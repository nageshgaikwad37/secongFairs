import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-faircard',
  templateUrl: './faircard.component.html',
  styleUrls: ['./faircard.component.scss']
})
export class FaircardComponent implements OnInit {
  @Input() obj!:any;
  @Output() emiterId:EventEmitter<any> =  new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.emiterId.emit(this.obj.fairId);
    console.log(this.obj.fairId);
    

  }
}
