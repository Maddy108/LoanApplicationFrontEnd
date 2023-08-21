import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  constructor(private fb:FormBuilder,private router:Router, private loanService:LoanService){}
  enquiryForm:FormGroup;
  
  ngOnInit(): void {
    this.enquiryForm=this.fb.group({
    
    })
  }

  public addEnquiryInfo()
  {this.loanService.addEnquiry(this.fb).subscribe(
    (enquiry: any) => {
      if (enquiry.eId > 0) {
        alert("user created...")
        this.enquiryForm.reset();
      }
    }
  );
}

  }

