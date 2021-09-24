import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertifierHomepagePageRoutingModule } from './certifier-homepage-routing.module';

import { CertifierHomepagePage } from './certifier-homepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertifierHomepagePageRoutingModule
  ],
  declarations: [CertifierHomepagePage]
})
export class CertifierHomepagePageModule {}
