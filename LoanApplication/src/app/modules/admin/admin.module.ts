import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewUserComponent } from './view-user/view-user.component';


@NgModule({
  declarations: [
   
    ViewEnquiryComponent,
    SendMailComponent,
    AddUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
