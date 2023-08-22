import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { VerifyAppComponent } from './verify-app/verify-app.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';

const routes: Routes = [

  {path:'viewEnq', component:ViewEnquiryComponent},
  {path:'verifyApp' , component:VerifyAppComponent},
 // {path:'viewEnq', component:ViewEnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
