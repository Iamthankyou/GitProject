import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numFirst:number = 0;
  numSecond:number = 0;
  res:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    console.log("add");
    this.res = (Number)(this.numFirst)+(Number)(this.numSecond);
  }

  sub(){
    this.res = (Number)(this.numFirst)-(Number)(this.numSecond);
  }

  div(){
    this.res = (Number)(this.numFirst)/(Number)(this.numSecond);
  }

  mul(){
    this.res = (Number)(this.numFirst)*(Number)(this.numSecond);
  }
}
