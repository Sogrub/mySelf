import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.loadedEnd();
  }

  title = 'mySelf';

  loaded: boolean = true

  loadedEnd() {
    setTimeout(() => {
      this.loaded = false;
    }, 5000);
  }
}
