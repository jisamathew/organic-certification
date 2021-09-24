import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertifierCertificationPage } from './certifier-certification.page';

const routes: Routes = [
  {
    path: '',
    component: CertifierCertificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertifierCertificationPageRoutingModule {}
