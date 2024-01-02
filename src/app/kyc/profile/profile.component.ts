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
 
  profileForm: FormGroup;
  submitted=false;
  myshwow: boolean=false;
  ram:boolean=true;

  //@Output() fileEvent = new EventEmitter<any>();


  constructor(
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private profileService:ProfileService
  ) {
    this.profileForm = this.formBuilder.group({
      maritalStatus:new FormControl('',Validators.required),
      skills:this.formBuilder.array([]),
      spouse:this.formBuilder.array([]),
      father:this.formBuilder.array([]),
    });
    


  }


 
get f() {return this.profileForm.controls}
 get skills() {return(this.profileForm.get('skills') as FormArray).controls;}
 get spouse() {return(this.profileForm.get('spouse') as FormArray).controls;}
 get father() {return(this.profileForm.get('father') as FormArray).controls;}


  

  addSpouse(){
    const newSpouse=this.formBuilder.group({
      spouse:['',[Validators.required]],
     
      
    });
    (this.profileForm.get('spouse') as FormArray).push(newSpouse);
    
  }

  addFather(){
    const newFather=this.formBuilder.group({
      father:['',[Validators.required]],
     
      
    });
    (this.profileForm.get('father') as FormArray).push(newFather);
    
  }

  addSkills(){
    const newSkill=this.formBuilder.group({
      NomineeProof:['',[Validators.required]],
      NomineeProofnumber:['',[Validators.required]],
      NomineeDOBDay:['',[Validators.required]],
      NomineeDOBMonth:['',[Validators.required]],
      NomineeDOBYear:['',[Validators.required]],
      NomineeName:['',[Validators.required]],
      NomineeRelationShip:['',[Validators.required]],
      NomineeAddress:['',[Validators.required]],
      NomineeMobile:['',[Validators.required]],
      NomineeEmail:['',[Validators.required]]
      
    });
    (this.profileForm.get('skills') as FormArray).push(newSkill);
    
  }

  removeskills(index:number){
    (this.profileForm.get('skills')as FormArray).removeAt(index)
  }
  removespouse(index:number){
    (this.profileForm.get('spouse')as FormArray).removeAt(index)
  }
  removesFather(index:number){
    (this.profileForm.get('father')as FormArray).removeAt(index)
  }
  open() {
    $('#imageViewer').modal('show');
  }

  close() {
    $('#imageViewer').modal('hide');
  }

  panUpload(event: any) {
    const file = event.target.files[0];
    console.log(event)
    console.log(event.objectUrl)   
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
    if (this.profileForm.valid) {
      alert(JSON.stringify(this.profileForm.value))
  
     
    }
   
  }

  OnSelectChange(event:any){
    const selecedValue=event.target.value;
    const currentSkillLenghth=this.skills.length

    if(currentSkillLenghth < selecedValue){
      for(let i=currentSkillLenghth; i<selecedValue; i++){
        this.addSkills();
      }
    }else if(currentSkillLenghth > selecedValue){
      for(let i=currentSkillLenghth; i >=selecedValue; i--){
        this.removeskills(i)

      }

    }

  }

  selectradiovalue(event:any){
    if(event.target.value === 'yes'){
      this.myshwow=true
      this.addSkills();
    }
    else{
      const skillsArray=this.profileForm.get('skills')as FormArray;
      while (skillsArray.length !==0){
        this.myshwow=false;
        skillsArray.removeAt(0)
      }
    }

  }

  radioChangeValue(event:any){
    if(event.target.value === 'Spouse'){
      this.addSpouse();
      const skillsArray=this.profileForm.get('father')as FormArray;
      while (skillsArray.length !==0){
        skillsArray.removeAt(0)
      }
    
    }
    else{
      this.addFather();
      const skillsArray=this.profileForm.get('spouse')as FormArray;
      while (skillsArray.length !==0){
        skillsArray.removeAt(0)
      }
    }


  }
}
