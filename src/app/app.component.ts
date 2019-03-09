import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feelSafe';
  model: any = {};
  names = [];
  submitPressed = false;
  text = null
  constructor(){

}


  plants: any = [{
    plant: "Areca Palm",
    absorptionRate: 0.003,
  },{
    plant: "Lady Palm",
    absorptionRate: 0.009
  },{
    plant: "Bamboo palm",
    absorptionRate: 0.022
  },{
    plant: "Rubber Plant",
    absorptionRate: 0.024
  },{
    plant: 'Dracaena “Janet Craig”',
    absorptionRate: 0.003
  }];

  onSubmit() {
    if(this.model.area &&  this.model.person){
      if (isNaN(this.model.area) || isNaN( this.model.person)) {
        this.text = "Please enter valid Input"
        
      } else {
        this.text = null
        this.submitPressed = true
      this.names = this.plants.map( a => {
        const vRoom = (this.model.area*2.4*1000);
        const overAllEmission = this.model.person * 0.066; // co2 mole /kg
        const vGas = overAllEmission* 8.314* 309 ;
        const diff = vRoom - vGas;
        // const no = Math.ceil(diff / (0.003*24*1000));
        return {
          ...a,
          count: Math.ceil(vGas/(a.absorptionRate*24*1000))
        }
      })
      }
     
    }
    else{
      this.text = "Please enter the values"
    }
    
  }
}
