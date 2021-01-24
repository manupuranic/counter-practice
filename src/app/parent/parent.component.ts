import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  counter: number = 0;

  constructor() {}

  ngOnInit(): void {
  }

  handleMessage(payload) {

    if (payload.name1 == "DecreaseFun"){
      this.counter--;
    }

    if (payload.name1 == "IncreaseFun"){
      this.counter++;
    }

    if (payload.name1 == "IncreaseByCounterFun"){
      if (payload.value1) {
        this.counter = this.counter+payload.value1;
      }
    }

    if (payload.name1 == "ResetFun"){
      this.counter=0;
    }
  }
}

