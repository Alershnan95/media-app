import { Injectable } from '@angular/core';

@Injectable()
export default class Store {
  title = 'Media App';
  isUserAuthenticated = false;
  user: any;
  usersDB = [
    {
      userid: 'super_admin@xyz.com', password: 'password', username: 'Johnson'
    },
    {
      userid: 'admin@xyz.com', password: 'password', username: 'Neeraj'
    },
    {
      userid: 'user@xyz.com', password: 'password', username: 'Gautham'
    }
  ];

  validateUser(email, password) {
    let isUserFound = false;
    this.usersDB.forEach((user) => {
      if (user.userid === email && user.password === password) {
        isUserFound = true;
        this.isUserAuthenticated = true;
        this.user = user;
      }
    });
    if (!isUserFound) {
      this.isUserAuthenticated = false;
    }
  }
}
