import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feelSafe';
  model: any = {};
  names = [{
    plant:'Bamboo',
    quantity:2
  ,},
  {
    plant:'Bamboo',
    quantity:2
  },
  {
    plant:'Bamboo',
    quantity:2
  },
  {
    plant:'Bamboo',
    quantity:2
  }]

  constructor(){
 
}

  onSubmit() {
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
