import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(public http : HttpClient,) { }


  public adminLogin(ausername:string,apassword:string){
    return this.http.get("http://localhost:8080/loanapp/adminLogin/"+ausername+"/"+apassword);
  }
}
