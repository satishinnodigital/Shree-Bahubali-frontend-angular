import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent {
  financialProof:boolean=false
  uploadfile:boolean=false
  financialProof2:boolean=false;

  form:FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      dpscheme: new FormControl('',[Validators.required]),
      skills: this.formBuilder.array([]) ,
    });

    
  }

  changeValue(event:any){
    if(event.target.checked === true){
      this.financialProof=true;
    }
    else{
      this.financialProof=false;
    }
  }

  selectValuee(event:any){
    if(event.target.value){
      this.uploadfile=true;
    }

  }
  get skills() : FormArray {
    return this.form.get("skills") as FormArray
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: '',
      file:''
    })
  }

  addSkills() {
      if(this.skills.length == 3){
       
      }else{
        for(let i=0; i<=2; i++){
          this.skills.push(this.newSkill());
          console.log(this.skills.length,'skills')
          this.financialProof2=true;
        }
      }


  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 

  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      alert(JSON.stringify(this.form.value))
    }


  }

  
}
