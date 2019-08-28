import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';
import {HttpClientModule} from '@angular/common/http';
import {DirectionCenterComponent} from './direction-center/direction-center.component';
import {DirectionComponent} from './direction/direction.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectionCenterComponent,
    DirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFWm9t-nLARH92q1iPeGi2q7_GZIU0mY4'
    }),
    AgmDirectionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
