import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form: FormGroup; 
  submitted = false;
  @Output() eventSignUp =new EventEmitter<string>

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      mobile: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('',[Validators.required, Validators.email]),
      acceptTerms: new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {
  
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
     alert("dsfsfdsdfsdfsd")
     this.eventSignUp.emit("signup")
    }

    
  }

}
