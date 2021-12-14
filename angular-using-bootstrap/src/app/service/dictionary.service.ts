import { Injectable } from '@angular/core';
import { IWord } from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }

  dicts: IWord[] = [
    {word: "one", mean: "1"},
    {word: "two", mean: "2"},
    {word: "three", mean: "3"},
    {word: "four", mean: "4"},
    {word: "five", mean: "5"},
  ]

  getAlls(){
    return this.dicts;
  }

  findWordById(id: number) {
    return (this.dicts)[id];
  }
}
