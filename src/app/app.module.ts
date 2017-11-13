import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { LeftContentComponent } from './home-page/left-content/left-content.component';
import { RightContentComponent } from './home-page/right-content/right-content.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'search', component: SearchResultPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchResultPageComponent,
    LeftContentComponent,
    RightContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
