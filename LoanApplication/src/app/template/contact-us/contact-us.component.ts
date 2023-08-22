import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private fb:FormBuilder,private router:Router, private loanService:LoanService){}
  contactForm:FormGroup;

  ngOnInit(): void {
    this.contactForm=this.fb.group({
      name : [],
      email : [],
      mobileno : [],
      subject : [],
      })
  }
  public addContactUs()
  {this.loanService.addContactUs(this.contactForm.value).subscribe(
    (data: any) => {
        this.contactForm.reset();
      }
  );
}

}
