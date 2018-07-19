import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {FriendRequestServiceClient} from '../services/friend-request.service.client';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html',
  styleUrls: ['./invite-friend.component.css', '../dashboard/dashboard.component.css']
})
export class InviteFriendComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient, private friendRequestService: FriendRequestServiceClient) {
  }

  emailId;
  usersByEmail;
  currentLoggedInUserId;
  ng = this;

  ngOnInit() {
    this.usersByEmail = [];
    this.service.checkSession()
      .then(response => {
        this.currentLoggedInUserId = response;
      }, response => this.router.navigate(['login']));

  }

  searchByEmail(email) {
    this.service.findUserByEmail(email).then((response) => {
        this.usersByEmail = response;
      }, (reponse) => alert('No users found!')
    );
  }

  sendFriendRequest(sendToId) {

    const friendRequest = {
      sentFrom: { id: this.currentLoggedInUserId},
      sentTo: { id: sendToId},
      status: 'PENDING'
    };

    this.friendRequestService.createFriendRequest(friendRequest).then((response) => {
        this.usersByEmail = response;
      }, (reponse) => alert('No users found!')
    );
  }


}
