import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-elements';

  loadAndShowWebComponent() {
    const hello = document.getElementById('hello');
    hello.innerHTML = `
    <p>The web component:</p>
    <app-hello-world-custom></app-hello-world-custom>`;
  }
}
