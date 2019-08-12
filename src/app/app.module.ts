import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearhListComponent } from './searh-list/searh-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrackDetailComponent } from './track-detail/track-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SearhListComponent
  },
  {
    path: 'trackDetail',
    component: TrackDetailComponent
  }
  // {
  //   path: 'items',
  //   component: AppComponent
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    SearhListComponent,
    TrackDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
