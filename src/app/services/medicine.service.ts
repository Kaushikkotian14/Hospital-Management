import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Medicine } from '../models/physican.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

    private apiUrl = 'https://gdtc-training-api.azurewebsites.net/api/hospital';

  constructor(private http: HttpClient) {}


  getMedicine(): Observable<Medicine[]> {
      return this.http.get<Medicine[]>(`${this.apiUrl}/medication`);
    }
  
}
