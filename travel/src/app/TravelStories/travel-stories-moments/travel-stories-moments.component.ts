import { Component, OnInit, Input } from '@angular/core';
import { TravelStory } from '../TravelStories.model';

@Component({
  selector: 'app-travel-stories-moments',
  templateUrl: './travel-stories-moments.component.html',
  styleUrls: ['./travel-stories-moments.component.css']
})
export class TravelStoriesMomentsComponent implements OnInit {
  @Input() xyz:TravelStory;
  constructor() { }

  ngOnInit() {
  }

}
