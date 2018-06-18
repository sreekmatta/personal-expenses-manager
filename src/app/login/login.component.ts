import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId;
  passwordValue;
  data;

  constructor() {
  }

  ngOnInit() {
  }

  addCourse(email, password) {
    this.data = email + password;
  }

}
