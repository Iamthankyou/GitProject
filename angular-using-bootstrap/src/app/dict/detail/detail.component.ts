import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import { IWord } from 'src/app/model/iword';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  dict: IWord | undefined;

  constructor(
    private dictionaryService: DictionaryService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      const id = paramMap.get('id');
      this.dict = this.dictionaryService.findWordById((Number)(id));
    });
  }

}
