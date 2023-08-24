import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { CheckApplComponent } from './check-appl/check-appl.component';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';



@NgModule({
  declarations: [
    CheckApplComponent,
    SanctionLetterComponent 
  
  ],
  imports: [
    CommonModule,
    CmRoutingModule
  ]
})
export class CmModule { }
