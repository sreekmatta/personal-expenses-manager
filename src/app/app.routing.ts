import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {ExpensegatorComponent} from './expensegator/expensegator.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {InviteFriendComponent} from './invite-friend/invite-friend.component';
import {LogoutComponent} from './logout/logout.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ExpensegatorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'expenses', component: ExpensesComponent},
  {path: 'invite', component: InviteFriendComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: AppComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
