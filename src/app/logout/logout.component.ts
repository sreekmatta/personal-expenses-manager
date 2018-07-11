import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  ngOnInit() {
    this.service.logout()
      .then(response => {
        alert('Logout successfully');
        this.router.navigate(['home']);
      }, response => alert('Logout failed, Please logout again!'));

  }

}
