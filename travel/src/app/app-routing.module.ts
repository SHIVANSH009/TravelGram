import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelStoriesComponent } from './travel-stories/travel-stories.component';
import { TravelSpotsComponent } from './travel-spots/travel-spots.component';
import { StoryStartComponent } from './TravelStories/story-start/story-start.component';
import { TravelStoriesMomentsComponent } from './TravelStories/travel-stories-moments/travel-stories-moments.component';
import { StoryEditComponent } from './TravelStories/story-edit/story-edit.component';

const routes: Routes = [
  { path: '' , redirectTo: '/travelstory' , pathMatch: 'full' },
  { path: 'travelstory' , component: TravelStoriesComponent ,children:[
    { path: '', component: StoryStartComponent},
    { path: 'new', component: StoryEditComponent },
    { path: ':id', component: TravelStoriesMomentsComponent },
    { path: ':id/edit', component: StoryEditComponent }
  ]
},
  { path: 'travelspot' , component: TravelSpotsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
