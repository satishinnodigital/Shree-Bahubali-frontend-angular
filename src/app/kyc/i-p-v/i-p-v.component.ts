import { Component, ViewChild } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-i-p-v',
  templateUrl: './i-p-v.component.html',
  styleUrls: ['./i-p-v.component.scss']
})
export class IPVComponent {

  photoUploader:boolean = true;
  signature:Boolean = false;
  cameraOpen = false;

  constructor(){
    this.checkLocationCamAccess();
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      alert("Camera access was not allowed by user!");
      this.openCamera();
    }
    navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
      console.log("camera permission is enabled")
      //this.cameraAllow = true;
    }).catch((err)=>{
      //this.cameraAllow = false;
        alert("camera is not permitted");
    })
    
    }

    
   

  
  public webcamImage!: WebcamImage;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    console.info('Saved webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.photoUploader = false;
    this.signature = true
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }



  cameraAllow!:boolean;
  checkLocationCamAccess(){
    navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
      console.log("camera permission is enabled")
      this.cameraAllow = true;
    }).catch((err)=>{
      this.cameraAllow = false;
        console.log("camera is not permitted")
    })
  }

  openCamera() {
    console.log(this.cameraAllow,"asdasdasdasd")
    if(this.cameraAllow === true){
      this.cameraOpen = true;
    }else{
      alert("Plase enable the camera and location permission");
    }
    
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      const locationData=navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        console.log(resp)
      },
        err => {
          reject(err);
        });
    });

    
  }
  


 


  
  
}
