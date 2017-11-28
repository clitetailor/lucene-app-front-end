import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-site-page',
  templateUrl: './site-page.component.html',
  styleUrls: ['./site-page.component.styl']
})
export class SitePageComponent implements OnInit {

  @Input('content') content;

  constructor() { }

  ngOnInit() {
  }

}
