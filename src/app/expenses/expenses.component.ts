import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

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

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  ngOnInit() {
    this.service.checkSession()
      .then(response => {
      }, response => this.router.navigate(['login']));

  }

  addExpense(descriptionValue, amountValue) {

  }


}
