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
      selected:false,
      status:false
    },
    {
      id:2,
      title:"Track your existing application",
      selected:false,
      status:false
    }
  ]

  step:string ='signup';
 
  constructor(){
    this.authSteps[0].selected=true;
    this.step = 'signup';

    
  }
  authNav(id:any){
    if(id === 1){
       if(this.authSteps[0].status == false){
        this.step = 'signup';
        this.authSteps[0].selected=true;
        this.authSteps[1].selected=false;
       }else{
        this.step = 'pan';
        this.authSteps[0].selected=true;
        this.authSteps[1].selected=false;
       }
    }else{
        this.step = 'signin';
        this.authSteps[1].selected=true;
        this.authSteps[0].selected=false;
    }
  }

  signUp($event:any){
    console.log($event)
    if($event === 'signup'){
      this.step = 'pan';
      this.authSteps[0].status=true;
    }
  }

  pan($event:any){
    if($event === 'completed'){
      this.step = 'signin';
      this.authSteps[0].status=false;
      this.authSteps[0].selected=false;
        this.authSteps[1].selected=true;
    }
  }
}
