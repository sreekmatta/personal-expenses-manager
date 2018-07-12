export class ExpenseServiceClient {
  EXPENSE_URL = 'http://localhost:8080/api/expense';
  EXPENSE_BY_USER_ID = 'http://localhost:8080/api/people/expense/by/';

  createExpense(expense) {
    return fetch(this.EXPENSE_URL + '/create', {
      body: JSON.stringify(expense),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  findExpensesByUserId(id) {
    return fetch(this.EXPENSE_BY_USER_ID + '/' + id)
      .then(response => response.json(),
        response => alert('Expenses not found for user: ' + id));
  }

}
