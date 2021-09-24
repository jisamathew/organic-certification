import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-farmer-homepage',
  templateUrl: './farmer-homepage.page.html',
  styleUrls: ['./farmer-homepage.page.scss'],
})
export class FarmerHomepagePage implements OnInit {

  constructor( private router: Router,private ngZone: NgZone) { }

  ngOnInit() {
  }
  viewApplicationForm(){
    this.ngZone.run(()=>this.navigateTo('farmer-application-form'));
  }
  viewStatus(){
    this.ngZone.run(()=>this.navigateTo('farmer-statusview'));
  }
  viewAllApplication(){
    this.ngZone.run(()=>this.navigateTo('farmer-viewapplications'));
  }
  navigateTo(url){
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([url]);
  }
}
