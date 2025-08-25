import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { physican,trainedin,treatment } from '../models/physican.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhysicanService {
     private apiUrl ='https://gdtc-training-api.azurewebsites.net/api/hospital/'
  
constructor(private http:HttpClient){}

    getPhysican(): Observable<physican[]> {
return this.http.get<physican[]>(`${this.apiUrl}/physician`);   
  }

  addPhysician(physician: physican): Observable<physican> {
      return this.http.post<physican>(`${this.apiUrl}/physician`, physician);
    }
  
     updatePhysician(physician: physican): Observable<physican> {
      return this.http.put<physican>(`${this.apiUrl}/physician`, physician);
    }
  
    deletePhysician(physician: physican): Observable<void> {
    return this.http.request<void>('delete', `${this.apiUrl}/physician`, {body: physician});
  }

   getTrainedIn(): Observable<trainedin[]> {
return this.http.get<trainedin[]>(`${this.apiUrl}/trainedin`);   
  }

  getTrainedInById(): Observable<trainedin[]> {
return this.http.get<trainedin[]>(`${this.apiUrl}/trainedin/physician/{physicianId}`);   
  }

getProcedure():Observable<treatment[]> {
return this.http.get<treatment[]>(`${this.apiUrl}/procedure`);   
  }

    

}
