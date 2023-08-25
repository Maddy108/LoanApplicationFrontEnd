import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-appl',
  templateUrl: './check-appl.component.html',
  styleUrls: ['./check-appl.component.css']
})
export class CheckApplComponent {
  viewenquiryForm: FormGroup;
  enquiry: any[];
}
