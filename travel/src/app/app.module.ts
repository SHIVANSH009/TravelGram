import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TravelStoriesComponent } from './travel-stories/travel-stories.component';
import { TravelStoriesListComponent } from './TravelStories/travel-stories-list/travel-stories-list.component';
import { TravelStoriesPlaceComponent } from './TravelStories/TravelStories-list/travel-stories-place/travel-stories-place.component';
import { TravelStoriesMomentsComponent } from './TravelStories/travel-stories-moments/travel-stories-moments.component';
import { TravelSpotsComponent } from './travel-spots/travel-spots.component';
import { TravelSpotsEditComponent } from './TravelSpots/travel-spots-edit/travel-spots-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TravelSpotService } from './TravelSpots/travelspot.service';
import { StoryStartComponent } from './TravelStories/story-start/story-start.component';
import { StoryEditComponent } from './TravelStories/story-edit/story-edit.component';
import { TravelStoryService } from './TravelStories/travelstory.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TravelStoriesComponent,
    TravelStoriesListComponent,
    TravelStoriesPlaceComponent,
    TravelStoriesMomentsComponent,
    TravelSpotsComponent,
    TravelSpotsEditComponent,
    DropdownDirective,
    StoryStartComponent,
    StoryEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TravelSpotService,TravelStoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
