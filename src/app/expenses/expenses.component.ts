import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css', '../dashboard/dashboard.component.css']
})
export class ExpensesComponent implements OnInit {

  description;
  amount;
  paidBy;
  peopleInvolved;
  ng = this;

  constructor() {
  }

  ngOnInit() {
  }

  addExpense(descriptionValue, amountValue) {

  }


}
