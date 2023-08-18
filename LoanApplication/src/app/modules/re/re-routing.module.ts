import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { LoanAppComponent } from './loan-app/loan-app.component';

const routes: Routes = [
  {
    path: "viewEnq", component:ViewEnquiryComponent
  },
  {
    path:"addEnq", component:AddEnquiryComponent
  },
  {
    path:"sendMail", component:SendMailComponent
  },
  {
    path:"loanApp", component:LoanAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
