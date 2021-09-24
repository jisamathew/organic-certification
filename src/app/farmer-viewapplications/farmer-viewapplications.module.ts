import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerViewapplicationsPageRoutingModule } from './farmer-viewapplications-routing.module';

import { FarmerViewapplicationsPage } from './farmer-viewapplications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerViewapplicationsPageRoutingModule
  ],
  declarations: [FarmerViewapplicationsPage]
})
export class FarmerViewapplicationsPageModule {}
