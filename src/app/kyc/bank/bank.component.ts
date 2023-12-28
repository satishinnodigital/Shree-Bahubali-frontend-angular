import { Component, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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
      icon:"../../../assets/images/bank-icons/1150.jpg",
      city:"Prakash nagar,HYD",
      ifsc:"SBIN4707",
      address:"Hyderabad,Prakashnagar Pin:500094"
    },
    {
      id:2,
      bankname:"Carana Bank",
      icon:"../../../assets/images/bank-icons/1220.jpg",
      city:"Madhura Nagar,HYD",
      ifsc:"CANR000234",
      address:"Hyderabad,Prakashnagar Pin:500094"

    },
    {
      id:3,
      bankname:"Icici Bank",
      icon:"../../../assets/images/bank-icons/418.jpg",
      city:"Usufguda,HYD",
      ifsc:"ICIC000234",
      address:"Usufguda,Hyderabad,Pin:500094"
    },
    {
      id:4,
      bankname:"Indian Bank",
      icon:"../../../assets/images/bank-icons/430.jpg",
      city:"Jublihills,HYD",
      ifsc:"INDB000834",
      address:"Hyderabad,Jublihills Pin:500094"
    },
    {
      id:5,
      bankname:"Bank of Boroda",
      icon:"../../../assets/images/bank-icons/118.jpg",
      city:"PeddammaGudi,HYD",
      ifsc:"BOBD99333",
      address:"PeddammaGudi,Hyderabad Pin:500094"
    },
    {
      id:6,
      bankname:"Axis Bank",
      icon:"../../../assets/images/bank-icons/91.jpg",
      city:"Madhapur,HYD",
      ifsc:"AXIS000234",
      address:"Madhapur,Hyderabad Pin:500094"
    }
  ]
  



  newdata:any
  myvalue: any;
  form: FormGroup;
  submitted = false;


  
constructor(private formBuilder: FormBuilder){
  this.form = this.formBuilder.group({
    account_number: new FormControl('',[Validators.required,Validators.pattern("^[0-9]{8,15}$")]),
  
  });

 
}

  currentValue:any;
  currentBranch:any;
  currentIFSC:any;
  showIFSC = true;
  showBranches = true;
  show = true;
  step:boolean = true;
  bankDetails:any;
  
  ngOnChanges(changes: SimpleChanges) {
    this.currentValue = changes;
    if (this.currentValue) {
      this.show = true;
    }
    else{
      this.show = false;
    }
  }

  selectedBank:any;
  selectedValue = false
  optionselected(option:any) {
    console.log(option);
    this.currentValue = option.bankname;
    this.selectedBank = option.icon;
    this.selectedValue = true
    this.show = false;
    
  }

  selectedBranch:any;
  branchSelected(option:any){
    console.log(option.city)
    this.currentBranch = option.city;
    this.showBranches = false;
    this.showIFSC = false;
    this.currentIFSC = option.ifsc;
    if(option){
      this.step = false;
      this.bankDetails = option
    }
  }

  ifscSelected(option:any){
    this.currentIFSC = option.ifsc;
    this.showBranches = false;
    this.showIFSC = false;
    this.currentBranch = option.city;
    if(option){
      this.step = false;
      this.bankDetails = option
    }
  }

  bankEdit(){
    this.bankDetails = ''
    this.step = true;
    this.currentBranch='';
    this.currentIFSC = '';
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
    
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  

  // handleFocusIn() {
  //   this.show = true;
  //   console.log('status show' + this.show);
  // }
 
}
