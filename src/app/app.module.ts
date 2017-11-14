import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageRightComponent } from './home-page/home-page-right/home-page-right.component';
import { HomePageLeftComponent } from './home-page/home-page-left/home-page-left.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageLeftComponent } from './search-page/search-page-left/search-page-left.component';
import { SearchPageRightComponent } from './search-page/search-page-right/search-page-right.component';
import { SearchDropdownComponent } from './search-page/search-page-right/search-dropdown/search-dropdown.component';
import { SearchResultComponent } from './search-page/search-page-right/search-result/search-result.component';
import { CommonModule } from '@angular/common/src/common_module';

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
    SearchDropdownComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
