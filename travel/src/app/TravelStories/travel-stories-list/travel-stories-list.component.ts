import { Component, OnInit } from '@angular/core';
import { TravelStory } from '../TravelStories.model';
@Component({
  selector: 'app-travel-stories-list',
  templateUrl: './travel-stories-list.component.html',
  styleUrls: ['./travel-stories-list.component.css']
})
export class TravelStoriesListComponent implements OnInit {

  story: TravelStory[] = [new TravelStory('Goa','This is a place','https://hello.travefy.com/wp-content/uploads/2015/11/Instagram-Feature-Image.jpg'),
  new TravelStory('Gold','This is everything','https://www.researchgate.net/profile/Shamim_Ripon/publication/271292997/figure/fig1/AS:317042243719168@1452600169685/Travel-agent-web-service-feature-diagram.png')
];
  constructor() { }

  ngOnInit() {
  }

}
