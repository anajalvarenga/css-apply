import { Component, Input, OnInit } from '@angular/core';
import { InputService } from '../input/input.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  style = 'width: 200px;\nheight: 200px;\nborder: 2px solid #BB86FC;\nborder-radius: 100px;';

  constructor(private inputService: InputService) {
    this.inputService.styleText$.subscribe((style) => this.style = style);
  }

  ngOnInit(): void {
  }

}
