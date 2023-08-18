import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { LoanAppComponent } from './loan-app/loan-app.component';


@NgModule({
  declarations: [
    ViewEnquiryComponent,
    AddEnquiryComponent,
    SendMailComponent,
    LoanAppComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule
  ]
})
export class ReModule { }
