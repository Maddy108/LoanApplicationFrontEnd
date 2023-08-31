import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

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

  constructor(private _formBuilder: FormBuilder, private router: Router, private loanService: LoanService) { }
  addCustomerForm: FormGroup;
  ngOnInit(): void {
    //Customer Details
    this.addCustomerForm = this._formBuilder.group({
      customerName: [],
      customerDateOfBirth: [],
      customerAge: [],
      customerGender: [],
      customerEmail: [],
      customerMobileNumber: [],
      customerTotalLoanRequired: [],
      //All Personal Documents
      allPersonalDoc:this._formBuilder.group({
        addressProof: [],
        panCard: [],
        addharCard: [],
        photo: [],
        signature: [],
        salarySlips: [],
      }),

      //Customer Address Details
      customerAddress: this._formBuilder.group({
        customerCityname: [],
        customerDistrict: [],
        customerState: [],
      }),

      //Customer Profession Details
      profession: this._formBuilder.group({
        professionType: [],
      }),
      //Current Loan Details
      currentLoanDetails: this._formBuilder.group({
        currentLoanNumber: [],
        //Previous Loan EMI Details Secondary Referance
        // emiAmountMonthlyl: [],
        // nextEmiDueDate: [],
        // previousEmiStatus: [],
        loanAmount: [],
        rateOfInterest: [],
        tenure: [],
        totalAmountToBePaidDouble: [],
        processingFees: [],
        totalInterest: [],
        sanctionDate: [],
        remark: [],
        status: [],
      }),

      //Account Details
      accountDetails: this._formBuilder.group({
        accounType: [],
        accountHolderName: [],
        accountNumber: [],
      }),

      //Guarantor Details
      gurantorDetails: this._formBuilder.group({
        guarantorName: [],
        guarantorRelationshipWithCustomer: [],
        guarantorAadharCardNumber: [],
      }),
    })
  }

  isLinear = false;


  addCustomerFormMethod() {
    const f = new FormData();
    f.append("customer", JSON.stringify(this.addCustomerForm.value));
    f.append("addressProof", this.addressProofdb);
    f.append("panCard", this.panCardDb);
    f.append("addharCard", this.addharCardDb);
    f.append("photo", this.photoDb);
    f.append("signature", this.signatureDb);
    f.append("salarySlips", this.salarySlipsDb)
    this.loanService.addCustomerForm(f).subscribe((data) => {
      //this.addCustomer.reset();
    })
  }

  addressProofdb: any;
  addressProof2: any;
  onSelectAddressProof(event) {
    this.addressProofdb = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.addressProof2 = reader.result;
    reader.readAsDataURL(this.addressProofdb);
  }

  panCardDb: any;
  pancard2: any;
  onSelectPanCard(event) {
    this.panCardDb = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.pancard2 = reader.result;
    reader.readAsDataURL(this.panCardDb);
  }

  addharCardDb: any;
  addharCard2: any;
  onSelectAddharCard(event) {
    this.addharCardDb = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.addharCard2 = reader.result;
    reader.readAsDataURL(this.addharCardDb);
  }

  photoDb: any;
  photo2: any;
  onSelectPhoto(event) {
    this.photoDb = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.photo2 = reader.result;
    reader.readAsDataURL(this.photoDb);
  }

  signatureDb: any;
  signature2: any;
  onSelectSignature(event) {
    this.signatureDb = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.signature2 = reader.result;
    reader.readAsDataURL(this.signatureDb);
  }

  salarySlipsDb: any;
  salarySlips2: any;
  onSelectSalarySlips(event) {
    this.salarySlipsDb = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.salarySlips2 = reader.result;
    reader.readAsDataURL(this.salarySlipsDb);
  }

}


