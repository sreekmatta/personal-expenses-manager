import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../assets/css/style.css']
})
export class RegisterComponent implements OnInit {

  emailId;
  passwordValue;
  confirmPasswordValue;

  ng = this;

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  ngOnInit() {
  }

  register(email, password, confirmPassword) {
    const user = {
      email: email,
      password: password,
    };

    this.service.createUser(user).then((response) => {
      this.router.navigate(['dashboard']);
    }, (reponse) => alert('Error while creating user. Please register again!')
    );

  }

}
