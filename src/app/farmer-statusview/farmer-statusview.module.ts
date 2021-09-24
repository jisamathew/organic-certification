import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerStatusviewPageRoutingModule } from './farmer-statusview-routing.module';

import { FarmerStatusviewPage } from './farmer-statusview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerStatusviewPageRoutingModule
  ],
  declarations: [FarmerStatusviewPage]
})
export class FarmerStatusviewPageModule {}
