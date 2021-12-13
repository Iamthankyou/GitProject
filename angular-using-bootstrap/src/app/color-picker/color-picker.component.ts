import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  color = "#000"
  constructor() { 
    this.color = "#000"
  }

  ngOnInit(): void {
  }

  colorPicker(){
    console.log("change color");
    console.log(this.color);
  }
}
