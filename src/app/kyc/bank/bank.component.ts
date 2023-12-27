import { Component } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {

  banknames=[
    {
      id:1,
      bankname:"State bank of india Bank"
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
  selectedvalue: any;

  selectValue(value:any){
    this.selectedvalue=value;

  }
}
