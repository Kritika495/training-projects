import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
//data is coming from parent
@Input()
male?: number;
@Input()
female?: number;
@Input()
all?: number;
  constructor() { }

  ngOnInit(): void {
    
  }

}
