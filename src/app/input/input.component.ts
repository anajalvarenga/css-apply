import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  inputText: string = 'width: 200px; height: 200px; border: 2px solid blue; border-radius: 100px;';
  @Output() inputTextChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setStyle() {
    this.inputTextChanged.emit(this.inputText);
  }

}
