import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../assets/css/style.css']
})
export class LoginComponent implements OnInit {

  emailId;
  passwordValue;
  ng = this;

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  ngOnInit() {
  }

  login(email, password) {
    this.service.login(email, password).then((response) => {
        this.router.navigate(['dashboard']);
      }, (reponse) => alert('Invalid credentials. Please login again!')
    );
  }

}
