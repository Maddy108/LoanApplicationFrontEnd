import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent {
  constructor(private fb:FormBuilder,private router:Router, private loanService:LoanService){}
  sendMailForm:FormGroup;

  ngOnInit(): void {
    this.sendMailForm=this.fb.group({
      mailTo : [],
      mailSubject : [],
      mailText : [],
      })
  }
  public sendMail()
  {this.loanService.sendMail(this.sendMailForm.value).subscribe(
    (data: any) => {
        this.sendMailForm.reset();
      }
  );
}


}
