import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureselected = new EventEmitter<string>();
  onselect(feature:string)
  {
    this.featureselected.emit(feature);
  }
  constructor() { }

  ngOnInit() {
  }

}
