import { Component, SimpleChanges } from '@angular/core';

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
      icon:"../../../assets/images/bank-icons/1150.jpg"
    },
    {
      id:2,
      bankname:"Carana Bank",
      icon:"../../../assets/images/bank-icons/1220.jpg"
    },
    {
      id:3,
      bankname:"Icici Bank",
      icon:"../../../assets/images/bank-icons/418.jpg"
    },
    {
      id:4,
      bankname:"Indian Bank",
      icon:"../../../assets/images/bank-icons/430.jpg"
    },
    {
      id:5,
      bankname:"Bank of Boroda",
      icon:"../../../assets/images/bank-icons/118.jpg"
    },
    {
      id:6,
      bankname:"Axis Bank",
      icon:"../../../assets/images/bank-icons/91.jpg"
    }
  ]
  newdata:any
  myvalue: any;

  
constructor(){
  this.newdata=this.banknames
  console.log(this.newdata)
}

  currentValue:any;
  show = true;
  selectValue(value:any){
   
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentValue = changes;
    if (this.currentValue) {
      this.show = true;
    }
    else{
      this.show = false;
    }
  }

  selectedValue = false
  optionselected(option: string) {
    console.log(option);
    this.currentValue = option;
    this.selectedValue = true
    this.show = false;
  }

  selecedvalue(that:any){
this.myvalue=that
  }

  // handleFocusIn() {
  //   this.show = true;
  //   console.log('status show' + this.show);
  // }
 
}
