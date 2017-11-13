import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageRightComponent } from './search-page-right.component';

describe('SearchPageRightComponent', () => {
  let component: SearchPageRightComponent;
  let fixture: ComponentFixture<SearchPageRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
