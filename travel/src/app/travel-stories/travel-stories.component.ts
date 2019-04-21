import { Component, OnInit } from '@angular/core';
import { TravelStoryService } from '../TravelStories/travelstory.service';

@Component({
  selector: 'app-travel-stories',
  templateUrl: './travel-stories.component.html',
  styleUrls: ['./travel-stories.component.css']
})
export class TravelStoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
