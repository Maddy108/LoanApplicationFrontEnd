import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckApplComponent } from './check-appl/check-appl.component';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';

const routes: Routes = [
  {
    path:"checkappl",component:CheckApplComponent
  },
  {
    path:"letter",component:SanctionLetterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }
