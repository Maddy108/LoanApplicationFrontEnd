import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { VerifyAppComponent } from './verify-app/verify-app.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';


@NgModule({
  declarations: [
    CheckCibilComponent,
    VerifyAppComponent,
    ViewEnquiryComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule
  ]
})
export class OeModule { }
