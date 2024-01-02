import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {environment} from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  baseURL = environment.baseURL;

  panfileEventData = new Subject<any>();
  panfileCroppedData = new Subject<any>();
  signaturefileEventData = new Subject<any>();
  signaturefileCroppedData = new Subject<any>();
  constructor(private http:HttpClient) {

   }

   createClient(data:any){
    const endPoint = 'Client/CreateClient';
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8,text/plain,*/*'});
    return this.http.post(this.baseURL+endPoint,data,{headers});
   }
}
