import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilComponent } from '../oe/check-cibil/check-cibil.component';
import { VerifyAppComponent } from '../oe/verify-app/verify-app.component';
import { ViewEnquiryComponent } from '../re/view-enquiry/view-enquiry.component';
import { SendMailComponent } from '../re/send-mail/send-mail.component';
import { AddEnquiryComponent } from '../re/add-enquiry/add-enquiry.component';
import { LoanAppComponent } from '../re/loan-app/loan-app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {path:"viewenquiry", component:ViewEnquiryComponent},
  {path:"sendmail", component:SendMailComponent},
  {path:"adduser", component:AddUserComponent},
  {path:"viewUser",component:ViewUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
