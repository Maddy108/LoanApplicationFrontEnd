import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOeComponent } from './add-oe.component';

describe('AddOeComponent', () => {
  let component: AddOeComponent;
  let fixture: ComponentFixture<AddOeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOeComponent]
    });
    fixture = TestBed.createComponent(AddOeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
