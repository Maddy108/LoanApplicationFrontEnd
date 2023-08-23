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
  viewenquiryForm: FormGroup;
  enquiryStatus:String="CREATED"
  enquirystatus2:String="no"
 //enquiryuser:any[];

  enquiry: any[];
  ngOnInit(): void {
   this.getEnquiryData();
      }
   

  getEnquiryData()
  {
      this.loanService.getEnquiryStatusCheck(this.enquiryStatus,this.enquirystatus2).subscribe((data:any)=>{
        this.enquiry=data;
      });
  }
  editEnquiryStatus(enquiry:any)
  {
    this.loanService.updateEnquiry(enquiry.eid).subscribe();
    window.location.reload();
  }
}

