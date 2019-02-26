import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TravelStoriesComponent } from './travel-stories/travel-stories.component';
import { TravelStoriesListComponent } from './TravelStories/travel-stories-list/travel-stories-list.component';
import { TravelStoriesPlaceComponent } from './TravelStories/TravelStories-list/travel-stories-place/travel-stories-place.component';
import { TravelStoriesMomentsComponent } from './TravelStories/travel-stories-moments/travel-stories-moments.component';
import { TravelSpotsComponent } from './travel-spots/travel-spots.component';
import { TravelSpotsEditComponent } from './TravelSpots/travel-spots-edit/travel-spots-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TravelStoriesComponent,
    TravelStoriesListComponent,
    TravelStoriesPlaceComponent,
    TravelStoriesMomentsComponent,
    TravelSpotsComponent,
    TravelSpotsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
