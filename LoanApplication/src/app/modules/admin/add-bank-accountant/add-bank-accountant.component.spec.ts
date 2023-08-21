import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankAccountantComponent } from './add-bank-accountant.component';

describe('AddBankAccountantComponent', () => {
  let component: AddBankAccountantComponent;
  let fixture: ComponentFixture<AddBankAccountantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBankAccountantComponent]
    });
    fixture = TestBed.createComponent(AddBankAccountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
