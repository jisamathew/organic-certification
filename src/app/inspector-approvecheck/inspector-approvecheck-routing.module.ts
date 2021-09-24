import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspectorApprovecheckPage } from './inspector-approvecheck.page';

const routes: Routes = [
  {
    path: '',
    component: InspectorApprovecheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectorApprovecheckPageRoutingModule {}
