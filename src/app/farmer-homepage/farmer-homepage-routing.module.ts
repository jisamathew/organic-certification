import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmerHomepagePage } from './farmer-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: FarmerHomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerHomepagePageRoutingModule {}
