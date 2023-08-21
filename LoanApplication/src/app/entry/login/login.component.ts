import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    
  constructor(private fb:FormBuilder,private router:Router, private loanService:LoanService){}
   loginForm:FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    })
  }



  onLogin()
  {

     let username:string=this.loginForm.controls['username'].value;
     let password:string=this.loginForm.controls['password'].value;

     if(username=='RE' && password=='RE@123')
     {
              localStorage.setItem("userType","re");
          this.router.navigateByUrl('/dash/re')         
     }
      else if(username=='OE' && password=='OE@123')
     {
              localStorage.setItem("userType","oe");
          this.router.navigateByUrl('/dash/oe')         
     }
     else if(username=="admin" && password=="admin@123")
     {
              localStorage.setItem("userType","admin");
          this.router.navigateByUrl('/dash/admin');        
     }
     else{
      alert("Enter vlid login credentials..!")
     }
    
  }
}
