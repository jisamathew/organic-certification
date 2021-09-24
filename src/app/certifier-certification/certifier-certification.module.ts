import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertifierCertificationPageRoutingModule } from './certifier-certification-routing.module';

import { CertifierCertificationPage } from './certifier-certification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CertifierCertificationPageRoutingModule
  ],
  declarations: [CertifierCertificationPage]
})
export class CertifierCertificationPageModule {}
