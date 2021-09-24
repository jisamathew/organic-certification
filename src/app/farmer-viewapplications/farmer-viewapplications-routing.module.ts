import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmerViewapplicationsPage } from './farmer-viewapplications.page';

const routes: Routes = [
  {
    path: '',
    component: FarmerViewapplicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerViewapplicationsPageRoutingModule {}
