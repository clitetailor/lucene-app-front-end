import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms/src/directives/control_value_accessor';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.styl'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchInputComponent),
    multi: true
  }]
})
export class SearchInputComponent implements OnInit, ControlValueAccessor {

  @Input('placeholder') placeholder: String;
  @Input('type') type: String;

  private inputChange;
  private focus;
  private _focus = false;

  private value;

  constructor() { }

  ngOnInit() {
  }

  registerOnChange(inputChange) {
    this.inputChange = inputChange;
  }

  registerOnTouched(focus) {
    this.focus = function () {
      this._focus = !this._focus;
      focus();
    };
  }

  writeValue(value) {
    this.value = value;
  }
}
