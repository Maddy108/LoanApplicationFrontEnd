import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';  
import { Router } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent{

//   ngOnInit(): void {
//     this.addCustomer = this.fb.group({
//       customerName: [],
//       customerDateOfBirth: [],
//       customerAge: [],
//       customerGender: [],
//       customerEmail: [],
//       customerMobileNumber: [],
//       customerTotalLoanRequired: [],

      
//     })
//   }

//   addCustomerForm() {
//     const f = new FormData();
//     f.append("customer", JSON.stringify(this.customerForm.value));
//     f.append("addressProof", this.allPersonalDoc.addressProof);
//     f.append("panCard", this.allPersonalDoc.panCard);
//     f.append("addharCard", this.allPersonalDoc.addharCard);
//     f.append("photo", this.allPersonalDoc.photo);
//     f.append("signature", this.allPersonalDoc.signature);
//     f.append("salarySlips", this.allPersonalDoc.salarySlips);

//     this.loanService.addCustomerForm(f).subscribe((data: any) => {
//       this.resetf();
//     })
//   }
 
  
// imageSrc: any;
// onSelectProfilePhoto(event)
// {
//   this.profileImg=event.target.files[0];
 
//   const reader = new FileReader();
//   reader.onload = e => this.imageSrc = reader.result;
//      reader.readAsDataURL(this.profileImg);
  
// }
//   resetf(){
//     this.customerForm.reset();
//     this.addressProof=null;
//   } 

addCustomer: any;
allPersonalDoc: any;
addressProof: null;
customerForm: FormGroup;
profileImg: any;
selected = 'none';
constructor(private _formBuilder: FormBuilder, private router: Router, private loanService: LoanService) {}

//Customer Details
firstFormGroup = this._formBuilder.group({
  customerName: ['', Validators.required],
  customerDateOfBirth: ['', Validators.required],
  customerAge:['', Validators.required],
  customerGender: ['', Validators.required],
  customerEmail: ['', Validators.required],
  customerMobileNumber: ['', Validators.required],
  customerTotalLoanRequired: ['', Validators.required],
});
//All Personal Documents
secondFormGroup = this._formBuilder.group({
  addressProof: ['', Validators.required],
  panCard: ['', Validators.required],
  addharCard: ['', Validators.required],
  photo: ['', Validators.required],
  signature: ['', Validators.required],
  salarySlips: ['', Validators.required],
});

//Customer Address Details
thirdFormGroup = this._formBuilder.group({
  customerCityname: ['', Validators.required],
  customerDistrict: ['', Validators.required],
  customerState: ['', Validators.required],
});

//Customer Profession Details
fourthFormGroup = this._formBuilder.group({
  professionType: ['', Validators.required],
});

//Current Loan Details
fifthFormGroup = this._formBuilder.group({
  currentLoanNumber: ['', Validators.required],
  //Previous Loan EMI Details Secondary Referance
  emiAmountMonthlyl: ['', Validators.required],
  nextEmiDueDate: ['', Validators.required],
  previousEmiStatus: ['', Validators.required],
  loanAmount: ['', Validators.required],
  rateOfInterest: ['', Validators.required],
  tenure: ['', Validators.required],
  totalAmountToBePaidDouble: ['', Validators.required],
  processingFees: ['', Validators.required],
  totalInterest: ['', Validators.required],
  sanctionDate: ['', Validators.required],
  remark: ['', Validators.required],
  status: ['', Validators.required],  
});

//Account Details
sixthFormGroup = this._formBuilder.group({
  accounType: ['', Validators.required],
  accountHolderName: ['', Validators.required],
  accountNumber: ['', Validators.required],
});

//Guarantor Details
seventhFormGroup = this._formBuilder.group({
  guarantorName: ['', Validators.required],
  guarantorRelationshipWithCustomer: ['', Validators.required],
  guarantorAadharCardNumber: ['', Validators.required],
});
isLinear = false;

}


