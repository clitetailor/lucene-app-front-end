import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageLeftComponent } from './search-page-left.component';

describe('SearchPageLeftComponent', () => {
  let component: SearchPageLeftComponent;
  let fixture: ComponentFixture<SearchPageLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
