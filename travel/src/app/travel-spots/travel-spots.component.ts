import { Component, OnInit, OnDestroy } from '@angular/core';
import { places } from '../shared/places.model';
import { TravelSpotService } from '../TravelSpots/travelspot.service';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-travel-spots',
  templateUrl: './travel-spots.component.html',
  styleUrls: ['./travel-spots.component.css']
})
export class TravelSpotsComponent implements OnInit,OnDestroy {

  private subscription:Subscription;
  place: places [];
  constructor(private tsservice: TravelSpotService) { } 

  ngOnInit() {
    this.place = this.tsservice.getnewplace();
    this.subscription = this.tsservice.placechanged
    .subscribe(
      (placed : places[]) => {
        this.place = placed;
      }
    );
  }
  onedititem(index: number)
  {
    this.tsservice.startedediting.next(index);
  }
 ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
