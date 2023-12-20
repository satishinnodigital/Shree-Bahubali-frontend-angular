import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  authSteps =[
    {
      id:1,
      title:"SignUp Now",
      selected:false
    },
    {
      id:2,
      title:"Track your existing application",
      selected:false
    }
  ]

  step:string ='signup';

  constructor(){
    this.authSteps[0].selected=true;
    this.step = 'signup';
  }
  authNav(id:any){
    if(id === 1){
        this.step = 'signup';
        this.authSteps[0].selected=true;
        this.authSteps[1].selected=false;
    }else{
        this.step = 'signin';
        this.authSteps[1].selected=true;
        this.authSteps[0].selected=false;
    }
  }
}
