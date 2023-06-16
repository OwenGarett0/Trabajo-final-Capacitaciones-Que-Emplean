import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MysqlService {
  apiUrl = 'http://TU_API_ENDPOINT'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  public query(sql: string): Observable<any[]> {
    const body = { sql };
    return this.http.post<any[]>(`${this.apiUrl}/query`, body);
  }
}