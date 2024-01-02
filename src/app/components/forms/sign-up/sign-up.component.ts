import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/service/profile.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  form: FormGroup; 
  mobileverifyform:FormGroup;
  emailverifyform:FormGroup;
  submitted = false;
  submitted1 = false;
  submitted2 = false;
  verifyemailform:boolean=false;
  verifymobileForm:boolean=true;
  @Output() eventSignUp =new EventEmitter<string>

  constructor(private formBuilder: FormBuilder,private toastr: ToastrService,private profileService:ProfileService) {
    this.form = this.formBuilder.group({
      mobilenumber: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      //acceptTerms: new FormControl('',Validators.required),
    });

    this.mobileverifyform = this.formBuilder.group({
      mobileotp: new FormControl('',Validators.required),
    });
    this.emailverifyform = this.formBuilder.group({
      emailotp: new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {
  
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  get f1(): { [key: string]: AbstractControl } {
    return this.mobileverifyform.controls;
  }
  get f2(): { [key: string]: AbstractControl } {
    return this.emailverifyform.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.toastr.success('OTP sent successfully');
      alert(JSON.stringify(this.form.value));
      this.profileService.createClient({email:"satishkumarpenke@gmail.com",mobilenumber:9948333534}).subscribe((res:any)=>{
        console.log("clinetn api response",res);
      },err=>{
        console.log(err,'error message')
      })
     $('#exampleModal').modal('show');
    
    }

    
  }

  verifyMobile(){
    this.submitted1=true;
    if(this.mobileverifyform.valid){
      this.toastr.success('Mobile OTP Verified successfully');
      alert(JSON.stringify(this.mobileverifyform.value))
      this.mobileverifyform.reset();
      this.submitted1=false;
      this.verifymobileForm=false;
      this.verifyemailform=true
    }
  }

  verifyEmail(){
    this.submitted2=true;
    if(this.emailverifyform.valid){
      this.toastr.success('Email OTP Verified successfully');
      alert(JSON.stringify(this.emailverifyform.value))
      $('#exampleModal').modal('hide');
       this.eventSignUp.emit("signup")
      this.emailverifyform.reset();
      this.submitted2=false;
      this.verifymobileForm=true;
     
    }
  }

}
