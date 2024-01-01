import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  panfileEventData = new Subject<any>();
  panfileCroppedData = new Subject<any>();
  signaturefileEventData = new Subject<any>();
  signaturefileCroppedData = new Subject<any>();
  constructor() { }
}
