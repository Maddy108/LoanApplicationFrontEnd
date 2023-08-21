import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCmComponent } from './add-cm.component';

describe('AddCmComponent', () => {
  let component: AddCmComponent;
  let fixture: ComponentFixture<AddCmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCmComponent]
    });
    fixture = TestBed.createComponent(AddCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
