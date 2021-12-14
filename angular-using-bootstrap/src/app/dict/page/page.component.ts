import { Component, OnInit } from '@angular/core';
import {IWord} from "../../model/iword";
import {DictionaryService} from "../../service/dictionary.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  dicts: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.dicts = this.dictionaryService.getAlls();
  }

}
