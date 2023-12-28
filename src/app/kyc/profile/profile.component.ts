import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {


  addNominee = false;
  profileForm!:FormGroup;
  empForm!:FormGroup;


  constructor(private formBuilder:FormBuilder){
    this.profileForm =this.formBuilder.group({
      panUpload:new FormControl(""),
      signatureUpload:new FormControl(""),
      maritalStatus:new FormControl(""),
      exp:new FormControl(""),
      occupation:new FormControl(""),
      annualIncome:new FormControl(""),
      fatherName:new FormControl(""),
      spouseName:new FormControl(""),
      motherFirstName:new FormControl(""),
      motherMiddleName:new FormControl(""),
      motherLastName:new FormControl(""),
      nomineeDetails: this.formBuilder.array([]),
      politicallyExpose:new FormControl(""),
      qualification:new FormControl(""),
      investWith:new FormControl(""),
      accSettelement: new FormControl("")
    })

    this.empForm =  this.formBuilder.group({
      name:new FormControl("",[Validators.required]),
      skills:this.formBuilder.array([]),
      educationDetails:this.formBuilder.array([])
    })
    this.skills.push(this.newSkill());

  }

  get nomineeDetails():FormArray{
    return this.profileForm.get("nomineeDetails") as FormArray
  }


  addNewNominee():FormGroup{
    return this.formBuilder.group({

    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.empForm.controls;
  }































  get skills() : FormArray {
    return this.empForm.get("skills") as FormArray
  }

  newSkill():FormGroup{
    return this.formBuilder.group({
      skill:new FormControl("",[Validators.required]),
      exp:new FormControl("",[Validators.required]),
    })
  }

  addSkills(){
    this.skills.push(this.newSkill());
  }

  removeSkill(i:number){
    this.skills.removeAt(i);
  }
  submitted = false
  onSubmit() {
    this.submitted = true
    if(this.empForm.valid){
      console.log(this.empForm.value);
      alert("Valid")
    }
    console.log(this.empForm.value);
  }
}
