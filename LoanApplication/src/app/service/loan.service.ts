import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnquiryComponent } from '../template/enquiry/enquiry.component';
@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(public http : HttpClient,) { }

  public addEnquiry(enquiry:any)
  {
    return this.http.post("http://localhost:8080/loanapp/addEnquiryDetails",enquiry)
  }

  getuser(userName,userPassword)
  {
    return this.http.get("http://localhost:8080/loanapp/getusers/"+userName+"/"+userPassword);
  }

  public addContactUs(contactinfo:any)
  {

    return this.http.post("http://localhost:8080/loanapp/addContactInfo",contactinfo);
  }

  public viewEnquiry()
  {
    return  this.http.get("http://localhost:8080/loanapp/getEnquiry")
  }

  public addUser(f:FormData){
    return this.http.post("http://localhost:8080/loanapp/addUser",f);
  }
}
