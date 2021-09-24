import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerHomepagePageRoutingModule } from './farmer-homepage-routing.module';

import { FarmerHomepagePage } from './farmer-homepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerHomepagePageRoutingModule
  ],
  declarations: [FarmerHomepagePage]
})
export class FarmerHomepagePageModule {}
