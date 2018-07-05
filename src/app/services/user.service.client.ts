export class UserServiceClient {
  USER_URL = 'http://localhost:8080/api/user';

  findAllUsers() {
    return fetch(this.USER_URL)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  createUser(user) {
    return fetch(this.USER_URL + '/create', {
      body: JSON.stringify(user),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  //
  // findUserByCredentials(username, password) {
  //   return fetch(this.USER_URL)
  //     .then(response => response.json(),
  //       response => alert('Error thrown by server'));
  // }
  //
  // findUserByUsername(username, password) {
  //   return fetch(this.USER_URL)
  //     .then(response => response.json(),
  //       response => alert('Error thrown by server'));
  // }
  //
  // updateUser(user) {
  //   return fetch(this.USER_URL)
  //     .then(response => response.json(),
  //       response => alert('Error thrown by server'));
  // }
  //
  // deleteUser(user) {
  //   return fetch(this.USER_URL)
  //     .then(response => response.json(),
  //       response => alert('Error thrown by server'));
  // }
}
