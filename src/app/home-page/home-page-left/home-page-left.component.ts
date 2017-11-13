import { Component, OnInit } from '@angular/core';
import { fadeOut } from '../fade-out';

@Component({
  selector: 'app-home-page-left',
  templateUrl: './home-page-left.component.html',
  styleUrls: ['./home-page-left.component.styl'],
  animations: [fadeOut]
})
export class HomePageLeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
