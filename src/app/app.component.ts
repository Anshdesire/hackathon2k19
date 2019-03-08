import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feelSafe';

  model: any = {};

  plants: any = [{
    plant: "Areca Palm",
    absorptionRate: ''
  },{
    plant: "Lady Palm",
    absorptionRate: ''
  },{
    plant: "Bamboo palm",
    absorptionRate: ''
  },{
    plant: "Rubber Plant",
    absorptionRate: ''
  },{
    plant: 'Dracaena “Janet Craig”',
    absorptionRate: ''
  }];

  onSubmit() {
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
}
