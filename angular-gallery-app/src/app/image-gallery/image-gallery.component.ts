import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  @Input() listImage: any[]  = [];

  images:any;

  itemWidth: number | undefined;
  index = 0;

  constructor(
    @Inject(GalleryConfig)
    @Optional()
      index: number
  ) {
    if (index) {
      this.index = index;
    }
  }

  ngOnInit(): void {
    this.itemWidth = 100;
  }

  moveLeft(){
    if (this.index>0){
      this.index--;
    }
    console.log(this.index);
  }

  moveRight(){
    if (this.index+1<this.listImage.length){
      this.index++;
    }
    console.log(this.index);
  }
}
