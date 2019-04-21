import { Component, OnInit } from '@angular/core';
import { TravelStory } from '../TravelStories.model';
import { TravelStoryService } from '../travelstory.service';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-travel-stories-moments',
  templateUrl: './travel-stories-moments.component.html',
  styleUrls: ['./travel-stories-moments.component.css']
})
export class TravelStoriesMomentsComponent implements OnInit {
   xyz:TravelStory;
   id: number;
  constructor(private tsservice: TravelStoryService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.xyz = this.tsservice.getstory(this.id);
      }
    )
  }
  onaddplacelist()
  {
    this.tsservice.addplacestolist(this.xyz.place);
  }
  oneditlist()
  {
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

  ondeletelist()
  {
    this.tsservice.deleteit(this.id);
    this.router.navigate(['/Travelstory']);
  }
}
