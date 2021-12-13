import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnChanges {

  countdown:number | undefined;

  @Input()
  time = 10
  
  @Output()
  finish = new EventEmitter<boolean>();

  private intervalId = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if ('seconds' in changes) {
      let v = changes['seconds'].currentValue;
      v = typeof v === 'undefined' ? 10 : v;
      const vFixed = Number(v);
      this.time = Number.isNaN(vFixed) ? 10: vFixed;
    }
  }

  clearTimer(){
    clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    this.reset();
  }

  reset(){
    this.clearTimer();
    this.countdown = this.time;
  }

  stop(){
    this.reset();
  }

  start(){
    this.clearTimer();

    this.intervalId = window.setInterval(()=>{
      console.log(this.time);
      this.time-=1;
      if (this.time === 0){
        this.clearTimer();
        this.finish.emit(true);
      }
    },1000);
  }

}
