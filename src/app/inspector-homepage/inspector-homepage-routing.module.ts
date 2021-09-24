import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspectorHomepagePage } from './inspector-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: InspectorHomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectorHomepagePageRoutingModule {}
