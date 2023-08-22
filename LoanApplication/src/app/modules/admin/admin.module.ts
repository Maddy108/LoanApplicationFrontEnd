import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
   
    ViewEnquiryComponent,
    SendMailComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
