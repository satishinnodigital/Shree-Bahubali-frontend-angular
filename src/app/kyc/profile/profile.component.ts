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
  addNominee = false;
  profileForm!: FormGroup;
  empForm!: FormGroup;

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
      nomineeDetails: this.formBuilder.array([]),
      politicallyExpose: new FormControl(''),
      qualification: new FormControl(''),
      investWith: new FormControl(''),
      accSettelement: new FormControl(''),
    });

    this.empForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      skills: this.formBuilder.array([]),
      educationDetails: this.formBuilder.array([]),
    });
    this.skills.push(this.newSkill());
  }

  profileSubmitStep1() {
    this.submitted = true;
  }

  get nomineeDetails(): FormArray {
    return this.profileForm.get('nomineeDetails') as FormArray;
  }

  addNewNominee(): FormGroup {
    return this.formBuilder.group({});
  }

  get f(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
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



  















  get skills(): FormArray {
    return this.empForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: new FormControl('', [Validators.required]),
      exp: new FormControl('', [Validators.required]),
    });
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    if (this.empForm.valid) {
      console.log(this.empForm.value);
      alert('Valid');
    }
    console.log(this.empForm.value);
  }
}
