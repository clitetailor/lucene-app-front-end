import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-right',
  templateUrl: './home-page-right.component.html',
  styleUrls: ['./home-page-right.component.styl']
})
export class HomePageRightComponent implements OnInit {

  private array = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit() {
  }

}
