import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
    this.service.checkSession()
      .then(response => {
      }, response => this.router.navigate(['login']));
  }

}
