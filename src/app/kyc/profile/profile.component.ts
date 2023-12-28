import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {


  addNominee = false;
  profileForm!:FormGroup;


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
      nominee:new FormControl(""),
      politicallyExpose:new FormControl(""),
      qualification:new FormControl(""),
      investWith:new FormControl(""),
      accSettelement: new FormControl("")
    })
  }
}
