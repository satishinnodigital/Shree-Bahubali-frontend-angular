import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  form: FormGroup; 
  submitted = false;
 

  constructor(private formBuilder: FormBuilder,private toastr: ToastrService,private route:Router) {
    this.form = this.formBuilder.group({
      PanNumber: new FormControl('',[Validators.required,Validators.pattern("[A-Z]{3}P[A-Z][0-9]{4}[A-Z]{1}")]),
      mobile: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
     
     
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
      this.toastr.success('Login Successfully');
      this.route.navigate(['/home'])

    }

    
  }

}
