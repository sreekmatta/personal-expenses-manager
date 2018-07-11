import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../assets/css/style.css']
})
export class NavbarComponent implements OnInit {

  session;
  ng = this;

  constructor(private router: Router,
              private service: UserServiceClient) {
  }

  ngOnInit() {
    this.service.checkSession()
      .then(response => {
        if (response === 'BAD_REQUEST') {
          this.session = false;
        } else {
          this.session = true;
        }
      }, response => {
        this.session = false;
      });

  }


}
