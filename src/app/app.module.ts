import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routing';
import { ExpensegatorComponent } from './expensegator/expensegator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { InviteFriendComponent } from './invite-friend/invite-friend.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {UserServiceClient} from './services/user.service.client';
import { LogoutComponent } from './logout/logout.component';
import {ExpenseServiceClient} from './services/expense.service.client';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    HomeComponent,
    ExpensegatorComponent,
    DashboardComponent,
    ExpensesComponent,
    InviteFriendComponent,
    SidebarComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserServiceClient, ExpenseServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
