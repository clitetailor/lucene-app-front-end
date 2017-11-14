import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.styl']
})
export class SearchDropdownComponent implements OnInit {

  @Input('list') list = [];

  constructor() { }

  ngOnInit() {
  }

}
