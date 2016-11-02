/**
 * a sample component using the my-app directive
 * @author Johannes Konert
 */
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{name}}Heross</h1>'
})
export class AppComponent {

  name: string;

  constructor() {
    this.name = 'Our222';
  }
}

