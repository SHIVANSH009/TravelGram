import { Component, OnInit } from '@angular/core';
import { places } from '../shared/places.module';

@Component({
  selector: 'app-travel-spots',
  templateUrl: './travel-spots.component.html',
  styleUrls: ['./travel-spots.component.css']
})
export class TravelSpotsComponent implements OnInit {

  place: places [] = [new places('Beach'),new places('Meausem'),];
  constructor() { }

  ngOnInit() {
  }

  onplaceadded(x:places)
  {
    this.place.push(x);
  }
}
