import { Component, OnInit } from '@angular/core';
import { TravelStory } from '../TravelStories/TravelStories.model';

@Component({
  selector: 'app-travel-stories',
  templateUrl: './travel-stories.component.html',
  styleUrls: ['./travel-stories.component.css']
})
export class TravelStoriesComponent implements OnInit {

  selectedloc:TravelStory;
  constructor() { }

  ngOnInit() {
  }

}
