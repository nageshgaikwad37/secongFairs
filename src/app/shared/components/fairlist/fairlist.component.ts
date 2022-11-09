import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fairlist',
  templateUrl: './fairlist.component.html',
  styleUrls: ['./fairlist.component.scss']
})
export class FairlistComponent implements OnInit {
 @Input() getid!:any;
 @Output() emiterIdto:EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  getemiterId(event:any){
    this.emiterIdto.emit(event)
    console.log(event);
    

  }
}
