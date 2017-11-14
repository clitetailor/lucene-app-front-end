import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageRightComponent } from './home-page/home-page-right/home-page-right.component';
import { HomePageLeftComponent } from './home-page/home-page-left/home-page-left.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageLeftComponent } from './search-page/search-page-left/search-page-left.component';
import { SearchPageRightComponent } from './search-page/search-page-right/search-page-right.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', component: HomePageLeftComponent, outlet: 'left-side' },
      { path: '', component: HomePageRightComponent, outlet: 'right-side' }
    ]
  },
  {
    path: 'search',
    component: HomePageComponent,
    children: [
      { path: '', component: SearchPageLeftComponent, outlet: 'left-side' },
      { path: '', component: SearchPageRightComponent, outlet: 'right-side' }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageRightComponent,
    HomePageLeftComponent,
    HomePageComponent,
    SearchPageLeftComponent,
    SearchPageRightComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
