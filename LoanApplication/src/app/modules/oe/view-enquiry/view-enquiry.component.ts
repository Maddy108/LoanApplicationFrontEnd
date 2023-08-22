import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent {
  constructor(private fb:FormBuilder,private router:Router, private loanService:LoanService){}
  viewEnquiry: any[];
  
  ngOnInit(): void {
   this.viewEnquiryDetail();
      }
   private viewEnquiryDetail()
   {
    this.loanService.viewEnquiry().subscribe(
      (data: any) => {
        console.log('Received data:', data);
        if (data && data.responseData) {
          this.viewEnquiry = data.responseData; 
        }
      },
      error => {
        console.error(error);
      }
    );
  }
   }
  


