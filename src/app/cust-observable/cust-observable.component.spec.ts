import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustObservableComponent } from './cust-observable.component';

describe('CustObservableComponent', () => {
  let component: CustObservableComponent;
  let fixture: ComponentFixture<CustObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
