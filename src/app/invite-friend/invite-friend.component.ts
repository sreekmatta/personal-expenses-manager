import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html',
  styleUrls: ['./invite-friend.component.css', '../dashboard/dashboard.component.css']
})
export class InviteFriendComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
    this.service.checkSession()
      .then(response => {
      }, response => this.router.navigate(['login']));

  }

}
