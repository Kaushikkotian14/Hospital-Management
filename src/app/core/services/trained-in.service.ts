import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { trainedInModel } from '../models/trainedIn.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/env';


@Injectable({
  providedIn: 'root'
})
export class TrainedInService {
   private apiUrl =environment.apiUrl
  
constructor(private http:HttpClient){}


     public getTrainedIns(): Observable<trainedInModel[]> {
return this.http.get<trainedInModel[]>(`${this.apiUrl}/trainedin`);   
  }

  public getTrainedInById(): Observable<trainedInModel[]> {
return this.http.get<trainedInModel[]>(`${this.apiUrl}/trainedin/physician/{physicianId}`);   
  }
}
