import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddoctorComponent } from './finddoctor.component';

describe('FinddoctorComponent', () => {
  let component: FinddoctorComponent;
  let fixture: ComponentFixture<FinddoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinddoctorComponent]
    });
    fixture = TestBed.createComponent(FinddoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
