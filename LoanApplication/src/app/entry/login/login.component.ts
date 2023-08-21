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

     this.loanService.getuser(username,password).subscribe((data:any)=>{
       
       if(data.responseData.userType=='re')
       {
                localStorage.setItem("userType","re");
            this.router.navigateByUrl('/dash/re')         
       }
        else if(data.responseData.userType=='oe')
       {
                localStorage.setItem("userType","oe");
            this.router.navigateByUrl('/dash/oe')         
       }
       else if(data.responseData.userType=='admin')
       {
                localStorage.setItem("userType","admin");
            this.router.navigateByUrl('/dash/admin');        
       }
       else{
        alert("Enter vlid login credentials..!")
       }
       
    })

  }
}
