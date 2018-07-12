import {User} from '../models/user.model.client';

export class Expense {
  id: number;
  ename: string;
  expenseType: string;
  amount: string;
  payers: User[];
  peopleInvolved: User[];
  dateCreated: String;
  dateUpdated: String;
}
