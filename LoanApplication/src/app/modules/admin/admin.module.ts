import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddOeComponent } from './add-oe/add-oe.component';
import { AddReComponent } from './add-re/add-re.component';
import { AddCmComponent } from './add-cm/add-cm.component';
import { AddBankAccountantComponent } from './add-bank-accountant/add-bank-accountant.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { SendMailComponent } from './send-mail/send-mail.component';


@NgModule({
  declarations: [
    AddOeComponent,
    AddReComponent,
    AddCmComponent,
    AddBankAccountantComponent,
    ViewEnquiryComponent,
    SendMailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
