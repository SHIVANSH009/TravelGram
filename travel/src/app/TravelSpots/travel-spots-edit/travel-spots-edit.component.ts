import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { places } from 'src/app/shared/places.module';

@Component({
  selector: 'app-travel-spots-edit',
  templateUrl: './travel-spots-edit.component.html',
  styleUrls: ['./travel-spots-edit.component.css']
})
export class TravelSpotsEditComponent implements OnInit {
  @ViewChild('nameinp') nameinpref: ElementRef;
  @Output() placeadded = new EventEmitter<places>();
  constructor() { }

  ngOnInit() {
  }
  onadditem()
  {
    const ingName = this.nameinpref.nativeElement.value;
    const newplace = new places(ingName);
    this.placeadded.emit(newplace);
  }
}
