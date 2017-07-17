import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  myschema : any = {
    "type": "object",
    "properties": {
      "items": {
        "type": "array",
        "items": {
          "type": "string",
          "title": "Item",
          "default": "New Item"
        }
      }
    }
  };
  onSubmitFn() {
    console.log('on submit fn');
  }

}
