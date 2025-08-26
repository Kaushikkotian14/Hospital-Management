import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { physican } from '../models/physican.model';
import { trainedin } from '../models/trainedIn.model';
import { Observable } from 'rxjs';
import { environment } from '../../environment/env';


@Injectable({
  providedIn: 'root'
})
export class PhysicanService {
     private apiUrl =environment.apiUrl
  
constructor(private http:HttpClient){}

    public getPhysican(): Observable<physican[]> {
return this.http.get<physican[]>(`${this.apiUrl}/physician`);   
  }

  public addPhysician(physician: physican): Observable<physican> {
      return this.http.post<physican>(`${this.apiUrl}/physician`, physician);
    }
  
     public updatePhysician(physician: physican): Observable<physican> {
      return this.http.put<physican>(`${this.apiUrl}/physician`, physician);
    }
  
    public deletePhysician(physician: physican): Observable<void> {
    return this.http.request<void>('delete', `${this.apiUrl}/physician`, {body: physician});
  }

   public getTrainedIn(): Observable<trainedin[]> {
return this.http.get<trainedin[]>(`${this.apiUrl}/trainedin`);   
  }

  public getTrainedInById(): Observable<trainedin[]> {
return this.http.get<trainedin[]>(`${this.apiUrl}/trainedin/physician/{physicianId}`);   
  }


    

}
