import { TravelStory } from './TravelStories.model';
import { Injectable } from '@angular/core';
import { places } from '../shared/places.model';
import { TravelSpotService } from '../TravelSpots/travelspot.service';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class TravelStoryService{
   locchanged = new Subject<TravelStory[]>();
   private storys: TravelStory[] = [
    new TravelStory(
    'Goa',
   'This is a place',
   'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
   [
       new places('blue world'),
       new places('low price')
   ]),
    new TravelStory('Gold',
    'This is everything',
    'https://www.researchgate.net/profile/Shamim_Ripon/publication/271292997/figure/fig1/AS:317042243719168@1452600169685/Travel-agent-web-service-feature-diagram.png',
    [
        new places('location is cool'),
        new places('good resting place')
    ])
  ];

  constructor(private ssservice: TravelSpotService){}

  getStorys()
  {
    return this.storys.slice();
  }
  getstory(index:number)
  {
    return this.storys[index];
  }
  addplacestolist(placedd: places[])
  {
    this.ssservice.addsomething(placedd);
  }

  addloc(location: TravelStory)
  {
    this.storys.push(location);
    this.locchanged.next(this.storys.slice());
  }

  updateloc(index: number,existloc: TravelStory)
  {
    this.storys[index] = existloc; 
    this.locchanged.next(this.storys.slice());
  }

  deleteit(index:number)
  {
    this.storys.splice(index,1);
    this.locchanged.next(this.storys.slice());
  }
}