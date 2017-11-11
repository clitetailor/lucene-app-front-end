import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageRightComponent } from './home-page-right.component';

describe('HomePageRightComponent', () => {
  let component: HomePageRightComponent;
  let fixture: ComponentFixture<HomePageRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
