import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  constructor(private fb:FormBuilder,private router:Router, private loanService:LoanService){}
  proimg: any;
  users:any[] ;
  reader = new FileReader();


  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers()
    {
   this.loanService.getAllUsers().subscribe((data:any)=>{
      this.users=data.responseData;
      this.reader.onload=e=>this.proimg=this.reader.result;
      this.reader.readAsDataURL(this.proimg);

    });
}

}
  



