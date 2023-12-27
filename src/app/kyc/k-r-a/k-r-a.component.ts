import { Component } from '@angular/core';

@Component({
  selector: 'app-k-r-a',
  templateUrl: './k-r-a.component.html',
  styleUrls: ['./k-r-a.component.scss']
})
export class KRAComponent {

dob:any;
  continueKRA(){
    if(this.dob === undefined){
      alert("Plase enter Date Of Birth");
    }else{
      alert("not implemented yet")
    }
  }
}
