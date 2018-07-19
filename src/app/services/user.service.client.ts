export class UserServiceClient {
  USER_URL = 'http://localhost:8080/api/user';
  LOGIN_URL = 'http://localhost:8080/api/login';
  LOGOUT_URL = 'http://localhost:8080/api/logout';
  SESSION_URL = 'http://localhost:8080/api/get/session';

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


  login(email, password) {
    return fetch(this.LOGIN_URL + '?email=' + email + '&password=' + password);
  }

  logout() {
    return fetch(this.LOGOUT_URL);
  }

  checkSession() {
    return fetch(this.SESSION_URL)
      .then(response => response.json());
  }

  findUserByEmail(email) {
    return fetch(this.USER_URL + '/email/' + email)
      .then(response => response.json(),
        response => alert('Error thrown by server'));
  }

  findUserById(id) {
    return fetch(this.USER_URL + '/' + id, {
      credentials: 'include', // include, same-origin, *omit
    })
      .then(response => response.json(),
        response => alert('User not found by Id: ' + id));
  }

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
