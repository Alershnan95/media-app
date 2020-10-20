import { Component, OnInit } from '@angular/core';
import Store from 'src/app/store';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  constructor(public store: Store) { }

  ngOnInit(): void {
  }

}
