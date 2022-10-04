import { Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  _styleText = new Subject<string>();
  readonly styleText$ = this._styleText.asObservable();

  constructor() { }

  setStyle(inputText: string) {
    this._styleText.next(inputText);
  }
}
