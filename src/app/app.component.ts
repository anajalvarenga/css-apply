import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'css-apply';
  style = 'width: 200px; height: 200px; border: 2px solid blue; border-radius: 100px;';

  onSetStyle(newStyle: string) {
    this.style = newStyle;
  }
}
