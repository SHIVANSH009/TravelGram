import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TravelStory } from '../TravelStories.model';
import { TravelStoryService } from '../travelstory.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-travel-stories-list',
  templateUrl: './travel-stories-list.component.html',
  styleUrls: ['./travel-stories-list.component.css']
})
export class TravelStoriesListComponent implements OnInit,OnDestroy {

  storys: TravelStory[];
  subscription: Subscription;
    constructor(private tra: TravelStoryService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.tra.locchanged.subscribe(
      (rex:TravelStory[]) => {
        this.storys = rex;
      }
    )
    this.storys = this.tra.getStorys();
  }
  onnewlocation() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
