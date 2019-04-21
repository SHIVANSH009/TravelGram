import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { places } from 'src/app/shared/places.model';
import { TravelSpotService } from '../travelspot.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-travel-spots-edit',
  templateUrl: './travel-spots-edit.component.html',
  styleUrls: ['./travel-spots-edit.component.css']
})
export class TravelSpotsEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slform:NgForm;
  subs:Subscription;
  edititem:places;
  editmode = false;
  editindex:number;
  constructor(private tsservice: TravelSpotService) { }

  ngOnInit() {
    this.subs = this.tsservice.startedediting.
    subscribe(
      (index: number) => {
        this.editindex = index;
        this.editmode = true;
        this.edititem = this.tsservice.getnewplaces(index);
        this.slform.setValue({
          name: this.edititem.pl_name
        })
      }
    );
    }
  onadditem(form: NgForm)
  {
    const value = form.value;
    const newplace = new places(value.name);
    if(this.editmode)
    {
      this.tsservice.updateloc(this.editindex,newplace);
    }
    else
    {
      this.tsservice.addloc(newplace);
    }
    this.editmode = false;
    form.reset();
  }
  ngOnDestroy()
  {
    this.subs.unsubscribe();
  }

  onclear()
  {
    this.slform.reset();
    this.editmode = false;
  }

  ondelete()
  {
    this.tsservice.deleteitem(this.editindex);
    this.onclear();
  }
}
