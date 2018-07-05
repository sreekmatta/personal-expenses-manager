import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensegatorComponent } from './expensegator.component';

describe('ExpensegatorComponent', () => {
  let component: ExpensegatorComponent;
  let fixture: ComponentFixture<ExpensegatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensegatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensegatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
