import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() style = 'width: 200px; height: 200px; border: 2px solid blue; border-radius: 100px;';

  constructor() { }

  ngOnInit(): void {
  }

}
