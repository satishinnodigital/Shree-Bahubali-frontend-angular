import { Component } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {
  serach:any

  banknames=[
    {
      id:1,
      bankname:"State bank of india Bank",
    },
    {
      id:2,
      bankname:"Carana Bank"
    },
    {
      id:3,
      bankname:"Icici Bank"
    },
    {
      id:4,
      bankname:"Indian Bank"
    },
    {
      id:5,
      bankname:"Bank of Boroda"
    },
    {
      id:6,
      bankname:"Axis Bank"
    }
  ]
  newdata:any

  
constructor(){
  this.newdata=this.banknames
  console.log(this.newdata)
}

  currentValue:any;
  show = true;
  selectValue(value:any){
   
  }

  // ngDoCheck() {
  //   if (this.currentValue) {
  //     this.show = true;
  //   }
  //   else{
  //     this.show = false;
  //   }
  // }
  // optionselected(option: string) {
  //   console.log(option);
  //   this.currentValue = option;
  //   this.show = false;
  // }

  // handleFocusIn() {
  //   this.show = true;
  //   console.log('status show' + this.show);
  // }
 
}
