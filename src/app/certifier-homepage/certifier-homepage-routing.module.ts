import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertifierHomepagePage } from './certifier-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: CertifierHomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertifierHomepagePageRoutingModule {}
