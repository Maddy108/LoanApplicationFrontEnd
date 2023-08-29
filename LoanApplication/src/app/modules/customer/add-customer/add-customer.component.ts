import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addCustomer: any;
  allPersonalDoc: any;
  addressProof: null;
 

  constructor(private fb: FormBuilder, private router: Router, private loanService: LoanService) { }
  customerForm: FormGroup;
  profileImg: any;


  ngOnInit(): void {
    this.addCustomer = this.fb.group({
      customerName: [],
      customerDateOfBirth: [],
      customerAge: [],
      customerGender: [],
      customerEmail: [],
      customerMobileNumber: [],
      customerTotalLoanRequired: [],

      
    })
  }

  addCustomerForm() {
    const f = new FormData();
    f.append("customer", JSON.stringify(this.customerForm.value));
    f.append("addressProof", this.allPersonalDoc.addressProof);
    f.append("panCard", this.allPersonalDoc.panCard);
    f.append("addharCard", this.allPersonalDoc.addharCard);
    f.append("photo", this.allPersonalDoc.photo);
    f.append("signature", this.allPersonalDoc.signature);
    f.append("salarySlips", this.allPersonalDoc.salarySlips);

    this.loanService.addCustomerForm(f).subscribe((data: any) => {
      this.resetf();
    })
  }
 
  
imageSrc: any;
onSelectProfilePhoto(event)
{
  this.profileImg=event.target.files[0];
 
  const reader = new FileReader();
  reader.onload = e => this.imageSrc = reader.result;
     reader.readAsDataURL(this.profileImg);
  
}
  resetf(){
    this.customerForm.reset();
    this.addressProof=null;
  } 
}


