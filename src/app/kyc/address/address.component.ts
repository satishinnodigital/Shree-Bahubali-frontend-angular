import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  step=2;

  addressSteps =[
    {
      step:1,
      title:"We found your KYC!",
      selected:false
    },
    {
      step:2,
      title:"Digi Locker",
      selected:false
    },
    {
      step:3,
      title:"Manual Entry",
      selected:false
    }
  ]

  stepMove(step:any){
    switch(step){
      case 1:
        this.step = 1;
        break;
      case 2:
        this.step = 2;
        break;
      case 3:
        this.step = 3;
    }
  }
}
