import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<user></user>'
  
})
export class AppComponent {

  Change() {
   console.log('works!!');

  }
constructor() {
  console.log("run");
}
}

