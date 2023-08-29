import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
 
  constructor(private fb:FormBuilder, private loanService:LoanService){}

  addUserForm:FormGroup;
  profileImg:any;
 

  ngOnInit(): void {
    this.addUserForm=this.fb.group({
      name:[],
      userEmail:[],
      userType:[],
    })
  }

  addUser(){
    const f = new FormData();
    f.append("user", JSON.stringify(this.addUserForm.value));
    f.append("profile",this.profileImg);
    this.loanService.addUser(f).subscribe((data:any)=>{
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
    this.addUserForm.reset();
    this.profileImg=null;
  } 
}






