import { Component, EventEmitter, Output, ViewChild ,ElementRef} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pan-details',
  templateUrl: './pan-details.component.html',
  styleUrls: ['./pan-details.component.scss']
})
export class PanDetailsComponent {

  @ViewChild('dateofmonthInput',{static:false}) dateofmonthInput:any;
  @ViewChild('dateofYearInput',{static:false}) dateofYearInput:any;

@Output() sendresponce=new EventEmitter<string>
  form: FormGroup; 
  submitted = false;
  
 

  constructor(private formBuilder: FormBuilder,private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      Pannumber: new FormControl('',[Validators.required,Validators.pattern("[A-Z]{3}P[A-Z][0-9]{4}[A-Z]{1}")]),
      day: new FormControl('',[Validators.required,Validators.maxLength(2),Validators.pattern('^(0?[1-9]|[1@2][0-9]|3[01])$')]),
      month: new FormControl('',[Validators.required,Validators.maxLength(2),Validators.pattern('(0?[1-9]|1[012])')]),
      year: new FormControl('',[Validators.required,Validators.maxLength(4)]),
     
    });
  }

  ngOnInit(): void {
  
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    const pan = this.form.get("Pannumber")?.value.toUpperCase();
    console.log(pan);

    const dob = this.form.get("day")?.value +'-'+this.form.get("month")?.value + '-'+ this.form.get('year')?.value;
    console.log(dob)
    this.submitted = true;

    const modifiedFormData = {pan:pan,dob:dob}
    console.log(modifiedFormData)

    if (this.form.valid) {
      this.toastr.success('Registered successfully');
    alert(JSON.stringify(this.form.value))
    this.sendresponce.emit('completed')
    }

    
  }

  OnInput(event:any,input?:any){
    if(event.target.value.length === event.target.maxLength && input){
    input.focus()
    }
  }


  

}
