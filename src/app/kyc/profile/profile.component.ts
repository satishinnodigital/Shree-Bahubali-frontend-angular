import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Dimensions, ImageCroppedEvent, ImageTransform, LoadedImage } from 'ngx-image-cropper';
import { every } from 'rxjs';
import { ProfileService } from 'src/app/service/profile.service';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  addNominee = true;
  profileForm: FormGroup;
  submitted=false;

  //@Output() fileEvent = new EventEmitter<any>();


  constructor(
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private profileService:ProfileService
  ) {
    this.profileForm = this.formBuilder.group({
      // panUpload: new FormControl(''),
      // signatureUpload: new FormControl(''),
      maritalStatus: new FormControl('',[Validators.required]),
      exp: new FormControl('',[Validators.required]),
      occupation: new FormControl('',[Validators.required]),
      annualIncome: new FormControl('',[Validators.required]),
      father_feminine:new FormControl(''),
      fatherName: new FormControl(''),
      spouseName: new FormControl(''),
      feminine_Mother:new FormControl(''),
      motherFirstName: new FormControl(''),
      motherMiddleName: new FormControl(''),
      motherLastName: new FormControl(''),
      politicallyExpose: new FormControl(''),
      qualification: new FormControl(''),
      investWith: new FormControl(''),
      accSettelement: new FormControl(''),
      skills:this.formBuilder.array([]),
    });


  }

  profileSubmitStep1() {
    this.submitted = true;
  }

 
get f() {return this.profileForm.controls}
 get skills() {return(this.profileForm.get('skills') as FormArray).controls;}

  // get f():{ [key: string]: AbstractControl } {
  //   return this.profileForm.controls;
  // }
  

  addSkills(){
    const newSkill=this.formBuilder.group({
      nameeeee:['',[Validators.required]]
      
    });
    (this.profileForm.get('skills') as FormArray).push(newSkill);
    
  }

  removeskills(index:number){
    (this.profileForm.get('skills')as FormArray).removeAt(index)
  }

  open() {
    $('#imageViewer').modal('show');
  }

  close() {
    $('#imageViewer').modal('hide');
  }

  panUpload(event: any) {
    const file = event.target.files[0];
    //this.imageChangedEvent = event;
    console.log(event)
    console.log(event.objectUrl)
    //this.fileEvent.emit(event);
    //this.fileUploadData = event;
    
    this.profileService.panfileEventData.next(event);
    $('#imageViewer').modal('show');
  }

  signatureUpload(event:any){
    $('#imageViewer').modal('show');
    this.profileService.panfileEventData.next(event);
  }

  imageCropperData(event:any){
    console.log("cropped Image at parent",event);
  }


  
  onSubmit() {
    this.submitted = true;
    if (this.profileForm.invalid) {
      alert(JSON.stringify(this.profileForm.value))
     
    }
   
  }
}
