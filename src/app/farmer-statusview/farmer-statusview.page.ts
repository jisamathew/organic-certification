import { Component, Inject, OnInit } from '@angular/core';
import { default as contract } from "truffle-contract";
const ricecertificate_artifacts = require('../../../build/contracts/RiceCertificate.json');
var RiceCertificate = contract(ricecertificate_artifacts);
import { Web3Service } from '../web3.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Web3 from 'web3';
import * as d3 from 'd3';
var metamaskAddress, deployedRiceCertificate;
@Component({
  selector: 'app-farmer-statusview',
  templateUrl: './farmer-statusview.page.html',
  styleUrls: ['./farmer-statusview.page.scss'],
})
export class FarmerStatusviewPage implements OnInit {
  RiceCertificate: any;
  constructor(private web3Service: Web3Service,
    private router: Router,
    public alertController: AlertController,
    @Inject(Web3Service) public web3: Web3) { }

  ngOnInit() {
    this.web3Service.artifactsToContract(ricecertificate_artifacts)
    .then((RiceCertificateAbstraction) => {
      this.RiceCertificate = RiceCertificateAbstraction;
      this.RiceCertificate.deployed().then(deployed => {
        console.log(deployed);
        // deployed.Transfer({}, (err, ev) => {
        console.log('Transfer event came in, refreshing balance');
        // this.refreshBalance();
        // });
      });

    });
  }
  searchField(){
    // console.log(e.target.value);
    var fieldid = (<HTMLInputElement>document.getElementById('farmid')).value;
    console.log(fieldid);
    this.getStat(fieldid);
  }
  async getStat(id){
    const deployedRiceCertificate = await this.RiceCertificate.deployed();
 var info = await deployedRiceCertificate.getInfo.call(id);
 console.log(info);
             if (info[0] != "") {
              var stat = Web3.prototype.toAscii(info[5]).replace(/[^ -~]+/g, '');
                 console.log(stat);
                 d3.select("#the_SVG_ID").remove();

                 // the flat data
                 var flatData = [{
                     "name": "Pending",
                     "parent": null,
                     "status": "pending"
                 },
                 {
                     "name": "Inspected",
                     "parent": "Pending",
                     "status": "inspected"
                 },
                 {
                     "name": "Certified",
                     "parent": "Inspected",
                     "status": "certified"
                 },
                 ];

                 // convert the flat data into a hierarchy
                 var treeData = d3.stratify()
                     .id(function (d) {
                         return d.name;
                     })
                     .parentId(function (d) {
                         return d.parent;
                     })
                     (flatData);

                 // assign the name to each node
                 treeData.each(function (d) {
                     d.name = d.id;
                     d.stat = d.data.status
                     console.log(d.stat);
                 });

                 // set the dimensions and margins of the diagram
                 var margin = {
                     top: 10,
                     right: 20,
                     bottom: 30,
                     left: 20
                 },
                     width = 400 - margin.left - margin.right,
                     height = 400 - margin.top - margin.bottom;

                 // declares a tree layout and assigns the size
                 var treemap = d3.tree()
                     .size([height, width]);

                 //  assigns the data to a hierarchy using parent-child relationships
                 var nodes = d3.hierarchy(treeData, function (d) {
                     return d.children;
                 });

                 function responsivefy(svg) {
                     // get container + svg aspect ratio
                     var container = d3.select(svg.node().parentNode),
                         width = parseInt(svg.style("width")),
                         height = parseInt(svg.style("height")),
                         aspect = width / height;

                     // add viewBox and preserveAspectRatio properties,
                     // and call resize so that svg resizes on inital page load
                     svg.attr("viewBox", "0 0 " + width + " " + height)
                         .attr("preserveAspectRatio", "xMinYMid")
                         .call(resize);

                     // to register multiple listeners for same event type,
                     // you need to add namespace, i.e., 'click.foo'
                     // necessary if you call invoke this function for multiple svgs
                     // api docs: https://github.com/mbostock/d3/wiki/Selections#on
                     d3.select(window).on("resize." + container.attr("id"), resize);

                     // get width of container and resize svg to fit it
                     function resize() {
                         var targetWidth = parseInt(container.style("width"));
                         svg.attr("width", targetWidth);
                         svg.attr("height", Math.round(targetWidth / aspect));
                     }
                 }


                 // maps the node data to the tree layout
                 nodes = treemap(nodes);

                 // append the svg object to the body of the page
                 // appends a 'group' element to 'svg'
                 // moves the 'group' element to the top left margin
                 var svg = d3.select("#chart").append("svg")
                     .attr("id", "the_SVG_ID")

                     .attr("width", width + margin.left + margin.right)
                     .attr("height", height + margin.top + margin.bottom),
                     g = svg.append("g")
                         .attr("transform",
                         "translate(" + margin.left + "," + margin.top + ")");

                 // adds each node as a group
                 var node = g.selectAll(".node")
                     .data(nodes.descendants())
                     .enter().append("g")
                     .attr("class", function (d) {
                         return "node" +
                             (d.children ? " node--internal" : " node--leaf");
                     })
                     .attr("transform", function (d) {
                         return "translate(" + d.x + "," + d.y + ")";
                     });
                 // adds the text to the node

                 node.append("text")
                     .attr("y", ".35em")
                     .attr("dy", function (d) {
                         return d.children ? 20 : 20;
                     })
                     .style("text-anchor", function (d) {
                         return d.children ? "start" : "start";
                         //    return d.children ? "end" : "start";

                     })
                     .text(function (d) {
                         return d.data.name;
                     });

                 if (stat == "Pending") {

                     // adds the links between the nodes
                     var link = g.selectAll(".link")
                         .data(nodes.descendants().slice(1))
                         .enter().append("path")
                         .attr("class", "link")
                         .style("stroke", 'green')
                         .style("stroke-dasharray", function (d) {
                             if (d.data.name == "Pending")
                                 return 0;
                             else
                                 return 5;
                         })
                         .attr("d", function (d) {
                             console.log(d.status)
                             return "M" + d.x + "," + d.y +
                                 "C" + (d.x + d.parent.x) / 2 + "," + d.y +
                                 " " + (d.x + d.parent.x) / 2 + "," + d.parent.y +
                                 " " + d.parent.x + "," + d.parent.y;
                         });

                     // adds the circle to the node
                     node.append("circle")
                         .attr("r", 7)
                         .style("fill", function (d) {
                             if (d.data.name == "Pending")
                                 return 'steelblue'
                         });

                 } else if (stat == "Inspected") {
                     var link = g.selectAll(".link")
                         .data(nodes.descendants().slice(1))
                         .enter().append("path")
                         .attr("class", "link")
                         .style("stroke", function (d) {
                             if (d.data.name == "Pending" || d.data.name == "Inspected")
                                 return "green"
                             else
                                 return "red"
                         })
                         .style("stroke-dasharray", function (d) {
                             if (d.data.name == "Pending" || d.data.name == "Inspected")
                                 return 0;
                             else
                                 return 5;
                         })

                         .attr("d", function (d) {
                             console.log(d.status)
                             return "M" + d.x + "," + d.y +
                                 "C" + (d.x + d.parent.x) / 2 + "," + d.y +
                                 " " + (d.x + d.parent.x) / 2 + "," + d.parent.y +
                                 " " + d.parent.x + "," + d.parent.y;
                         });
                     // adds the circle to the node
                     node.append("circle")
                         .attr("r", 10)
                         .style("fill", function (d) {
                             if (d.data.name == "Inspected" || d.data.name == "Pending")
                                 return 'steelblue'
                         });

                 } else if (stat == "Certified") {
                     var link = g.selectAll(".link")
                         .data(nodes.descendants().slice(1))
                         .enter().append("path")
                         .attr("class", "link")
                         .style("stroke", "green")
                         .attr("d", function (d) {
                             console.log(d.status)
                             return "M" + d.x + "," + d.y +
                                 "C" + (d.x + d.parent.x) / 2 + "," + d.y +
                                 " " + (d.x + d.parent.x) / 2 + "," + d.parent.y +
                                 " " + d.parent.x + "," + d.parent.y;
                         });

                     // adds the circle to the node
                     node.append("circle")
                         .attr("r", 10)
                         .style("fill", 'steelblue')

                 }


             } else {
               this.showAlert();
             }

  }
  async showAlert(){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Sorry Not Found',
        message: 'recheck id and search',

    });

     alert.present();

  }
  }

