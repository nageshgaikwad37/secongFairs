import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fairdetails',
  templateUrl: './fairdetails.component.html',
  styleUrls: ['./fairdetails.component.scss']
})
export class FairdetailsComponent implements OnInit {
  @Input('fairDetailsArr') selectedObj!:any;
  // public selectedObj!:any;
  constructor() { }

  ngOnInit(): void {
    // this.selectedObj = this.fairDetailsArr[0];
  }



}
