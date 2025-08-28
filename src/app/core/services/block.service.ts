import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Block } from '../models/block.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/env';

@Injectable({
  providedIn: 'root'
})
export class BlockService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  public getBlock(): Observable<Block[]> {
    return this.http.get<Block[]>(`${this.apiUrl}/block`);
  }

  public addBlock(block: Block): Observable<Block> {
    return this.http.post<Block>(`${this.apiUrl}/block`, block);
  }

  public updateBlock(block: Block): Observable<Block> {
    return this.http.put<Block>(`${this.apiUrl}/block`, block);
  }

  public deleteBlock(block: Block): Observable<void> {
    return this.http.request<void>('delete', `${this.apiUrl}/block`, { body: block });
  }

}
