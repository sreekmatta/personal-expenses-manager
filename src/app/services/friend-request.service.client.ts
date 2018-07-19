export class FriendRequestServiceClient {
  FRIEND_REQUEST_URL = 'http://localhost:8080/api/friend';

  createFriendRequest(friendRequest) {
    return fetch(this.FRIEND_REQUEST_URL + '/request', {
      method: 'POST',
      body: JSON.stringify(friendRequest),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  findFriendsForUser(email) {
    return fetch(this.FRIEND_REQUEST_URL + '/all/accepted' + email)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  findPendingRequestForUser(email) {
    return fetch(this.FRIEND_REQUEST_URL + '/all/pending' + email)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  findSentRequestsForUser(email) {
    return fetch(this.FRIEND_REQUEST_URL + '//' + email)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }



}
