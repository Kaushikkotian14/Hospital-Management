import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Medicine } from '../models/medicine.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/env';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

    private apiUrl =environment.apiUrl

  constructor(private http: HttpClient) {}


  public getMedicine(): Observable<Medicine[]> {
      return this.http.get<Medicine[]>(`${this.apiUrl}/medication`);
    }

      public addMedicine(medicine: Medicine): Observable<Medicine> {
          return this.http.post<Medicine>(`${this.apiUrl}/medication`, medicine);
        }
      
         public updateMedicine(medicine: Medicine): Observable<Medicine> {
          return this.http.put<Medicine>(`${this.apiUrl}/medication`, medicine);
        }
      
        public deleteMedicine(medicine: Medicine): Observable<void> {
        return this.http.request<void>('delete', `${this.apiUrl}/medication`, {body: medicine});
      }
  
}
