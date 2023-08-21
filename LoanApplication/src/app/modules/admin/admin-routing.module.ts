import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilComponent } from '../oe/check-cibil/check-cibil.component';
import { VerifyAppComponent } from '../oe/verify-app/verify-app.component';
import { ViewEnquiryComponent } from '../re/view-enquiry/view-enquiry.component';
import { SendMailComponent } from '../re/send-mail/send-mail.component';
import { AddEnquiryComponent } from '../re/add-enquiry/add-enquiry.component';
import { LoanAppComponent } from '../re/loan-app/loan-app.component';
import { AddOeComponent } from './add-oe/add-oe.component';
import { AddReComponent } from './add-re/add-re.component';
import { AddCmComponent } from './add-cm/add-cm.component';
import { AddBankAccountantComponent } from './add-bank-accountant/add-bank-accountant.component';

const routes: Routes = [
 
  {path:'addoe', component:AddOeComponent},
  {path:'addre' , component:AddReComponent},
  {path: "addcm", component:AddCmComponent},
  {path:"addbankacc", component:AddBankAccountantComponent},
  {path:"viewenquiry", component:ViewEnquiryComponent},
  {path:"sendmail", component:SendMailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
