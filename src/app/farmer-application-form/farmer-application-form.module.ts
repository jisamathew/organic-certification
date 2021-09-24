import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerApplicationFormPageRoutingModule } from './farmer-application-form-routing.module';

import { FarmerApplicationFormPage } from './farmer-application-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerApplicationFormPageRoutingModule
  ],
  declarations: [FarmerApplicationFormPage]
})
export class FarmerApplicationFormPageModule {}
