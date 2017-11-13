import { Component, OnInit, OnDestroy } from '@angular/core';
import { fadeOut } from '../fade-out';

@Component({
  selector: 'app-home-page-right',
  templateUrl: './home-page-right.component.html',
  styleUrls: ['./home-page-right.component.styl'],
  animations: [fadeOut]
})
export class HomePageRightComponent implements OnInit {

  fadeOut = false;

  private array = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit() {
  }
}
