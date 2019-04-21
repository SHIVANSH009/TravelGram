import { Component, OnInit, Input } from '@angular/core';
import { TravelStory } from '../../TravelStories.model';

@Component({
  selector: 'app-travel-stories-place',
  templateUrl: './travel-stories-place.component.html',
  styleUrls: ['./travel-stories-place.component.css']
})
export class TravelStoriesPlaceComponent implements OnInit {
@Input() tax: TravelStory;
@Input() index: number;
  ngOnInit() {
  }
}
