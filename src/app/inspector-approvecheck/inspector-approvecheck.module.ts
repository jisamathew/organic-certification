import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InspectorApprovecheckPageRoutingModule } from './inspector-approvecheck-routing.module';

import { InspectorApprovecheckPage } from './inspector-approvecheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InspectorApprovecheckPageRoutingModule
  ],
  declarations: [InspectorApprovecheckPage]
})
export class InspectorApprovecheckPageModule {}
