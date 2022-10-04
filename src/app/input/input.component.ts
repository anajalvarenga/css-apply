import { Component, OnInit, Output } from '@angular/core';
import { InputService } from './input.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  inputText: string = 'width: 200px;\nheight: 200px;\nborder: 2px solid #BB86FC;\nborder-radius: 100px;';

  constructor(private inputService: InputService) { }

  ngOnInit(): void {
  }

  onSetStyle() {
    this.inputService.setStyle(this.inputText);
  }

}
