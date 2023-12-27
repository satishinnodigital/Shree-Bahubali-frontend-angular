import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mannual-entry',
  templateUrl: './mannual-entry.component.html',
  styleUrls: ['./mannual-entry.component.scss']
})
export class MannualEntryComponent {


  form: FormGroup;
  submitted = false;
  imageURL:any;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      select_prefix: new FormControl('',Validators.required),
      pan_name:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      address_one:new FormControl('',Validators.required),
      address_two:new FormControl('',Validators.required),
      address_three:new FormControl(''),
      resident_no:new FormControl(''),
      pincode:new FormControl('',[Validators.required,Validators.pattern(/^\d{6}$/)]),
      country:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      mobile:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      tel_office:new FormControl(''),
      fax_no:new FormControl(''),
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      address_proof:new FormControl('',Validators.required),
      address_proof_number:new FormControl('',Validators.required),
      file:new FormControl('',Validators.required)
     
    });
  }

  ngOnInit(): void {
  
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onsubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
    alert(JSON.stringify(this.form.value))
    }

  
  }
 
  
  showPreview(event:any) {
  const file=event.target.files[0]
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
   
  }
}
