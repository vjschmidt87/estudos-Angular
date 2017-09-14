import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}! Server is running</h1>`,
})
export class AppComponent  { name = 'Vinicius'; }
