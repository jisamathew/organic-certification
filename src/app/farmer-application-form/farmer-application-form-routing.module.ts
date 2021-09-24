import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmerApplicationFormPage } from './farmer-application-form.page';

const routes: Routes = [
  {
    path: '',
    component: FarmerApplicationFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerApplicationFormPageRoutingModule {}
