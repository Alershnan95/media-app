import { Component } from '@angular/core';
import Store from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'media-app';

  constructor(
    public store: Store
  ) {
  }
}
