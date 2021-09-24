import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspectorHomepagePageRoutingModule } from './inspector-homepage-routing.module';

import { InspectorHomepagePage } from './inspector-homepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InspectorHomepagePageRoutingModule
  ],
  declarations: [InspectorHomepagePage]
})
export class InspectorHomepagePageModule {}
