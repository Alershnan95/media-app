import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Store from 'src/app/store';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email = '';
  password = '';
  currentUser: any;

  constructor(private router: Router, public store: Store) { }

  ngOnInit(): void {

  }

  navigateTo(link) {
    let url: string;
    switch (link) {
      case 'HOME':
        url = '/home';
        break;

      case 'ABOUT':
        url = '/about';
        break;

      case 'GALLERY':
        url = '/gallery';
        break;
    }
    this.router.navigate([url]);
  }

  submit() {
    console.log('email is', this.email);
    console.log('password is', this.password);
    console.log('store is', this.store);
    this.store.validateUser(this.email, this.password);
    this.currentUser = this.store.user.username;
    if (this.store.isUserAuthenticated) {
      Swal.fire('', 'Signed In Successfully', 'success');
    }
    else {
      Swal.fire('Oops...', 'Please try with correct credentials!', 'error');
    }

  }

  logout() {
    this.store.isUserAuthenticated = false;
    Swal.fire('', 'Logged Out', 'success');
    this.router.navigate(['/home']);
  }

}
