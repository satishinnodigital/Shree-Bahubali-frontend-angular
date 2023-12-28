import { Component } from '@angular/core';

@Component({
  selector: 'app-kyc-main',
  templateUrl: './kyc-main.component.html',
  styleUrls: ['./kyc-main.component.scss']
})
export class KycMainComponent {

  kycSteps = [
    {
      id:1,
      step:1,
      title:'Address',
      completed:false,
      icon:"fa fa-address-card"

    },
    {
      id:2,
      step:2,
      title:'Bank',
      completed:false,
      icon:"fa fa-bank"

    },
    {
      id:3,
      step:3,
      title:'Profile',
      completed:false,
      icon:"fa fa-user"

    },
    {
      id:4,
      step:4,
      title:'Exchange',
      completed:false,
      icon:"fa-fa-random"

    },
    {
      id:5,
      step:5,
      title:'IPV',
      completed:false,
      icon:"fa fa-video-camera"
    }
  ]
  step = 1;

  nextStep(step:any){
    switch(step){
      case 1:
      this.step = 1;
        break;
      case 2:
        this.step = 2;
        break;
      case 3:
        this.step = 3;
        break;
      case 4:
        this.step = 4;
        break;
      case 5:
        this.step = 5;
        break;
    }
  }

  bankresponce($event:any){
    if($event === 'confrim'){
      this.step=3;
      this.kycSteps[1].completed = true;
    }
    

  }

}
