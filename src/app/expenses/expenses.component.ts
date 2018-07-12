import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {ExpenseServiceClient} from '../services/expense.service.client';
import {Expense} from '../models/expense.model.client';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css', '../dashboard/dashboard.component.css']
})
export class ExpensesComponent implements OnInit {

  userId;
  description;
  amount;
  paidBy;
  peopleInvolved;
  expensesByUserId: Expense[] = [];
  ng = this;

  constructor(private router: Router,
              private service: UserServiceClient,
              private expenseService: ExpenseServiceClient) {
  }

  ngOnInit() {
    this.service.checkSession()
      .then(response => {
        this.userId = response;
        this.expenseService.findExpensesByUserId(this.userId)
          .then(expenses => {
            this.expensesByUserId = expenses;
          });
      }, response => alert('Error rendering expenses for user'));

  }

  addExpense(descriptionValue, amountValue) {

  }


}
