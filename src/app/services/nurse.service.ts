import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { nurse } from '../models/nurse.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class Nurse {
   private apiUrl ='https://gdtc-training-api.azurewebsites.net/api/hospital/'
  
constructor(private http:HttpClient){}

    getNurse(): Observable<nurse[]> {
return this.http.get<nurse[]>(`${this.apiUrl}/nurse`);   
  }

}