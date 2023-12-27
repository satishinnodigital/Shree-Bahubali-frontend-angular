import { Component } from '@angular/core';
import { DigiLockerService } from 'src/app/service/digi-locker.service';

@Component({
  selector: 'app-digi-locker',
  templateUrl: './digi-locker.component.html',
  styleUrls: ['./digi-locker.component.scss']
})
export class DigiLockerComponent {

  constructor(private digiLockerService:DigiLockerService ){

  }

  digilocker(){
    this.digiLockerService.digiLocker().subscribe((res:any)=>{
      console.log(res,"Digi data")
    })
  }
}
