import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  
  increaseBy:any = 5;

  @Output('TransmitMessage')
  message: EventEmitter<any> = new EventEmitter<any>();
  

  constructor() {}

  ngOnInit(): void {
  }

  handleIncreaseBy(){
    this.increaseBy++;
  }



  tempfn(payload){

    if(payload == "ResetFun"){
      this.increaseBy = 0;
    }

    this.message.emit({
      name1:payload,
      value1: this.increaseBy
    });
  }
}
