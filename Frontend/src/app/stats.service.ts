import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stats } from './stats.model';
@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private apiUrl = 'https://localhost:7223/api/stats';
  loginCount: number;
  visitasForo: number;
  visitasRegister: number;
  visitasLogin: number;
  visitasAboutus: number;
  visitasNewpass: number;
  constructor(private http: HttpClient) { }

  Forovisitas() {
    const url = `https://localhost:7223/api/stats/foro`;
    return this.http.post<void>(url, null);
  }
  Loginvisitas(){
    const url = `https://localhost:7223/api/stats/login`;
    return this.http.post<void>(url, null);
  }
  Registervisitas(){
    const url = `https://localhost:7223/api/stats/register`;
    return this.http.post<void>(url, null);
  }
  Aboutusvisitas(){
    const url = `https://localhost:7223/api/stats/aboutus`;
    return this.http.post<void>(url, null);
  }
  Statsvisitas(){
    const url = `https://localhost:7223/api/stats/stats`;
    console.log("dsa");
    return this.http.post<void>(url, null);
    
  }
  cantidadLogueos() {
    const url = 'https://localhost:7223/api/stats/logs';
    return this.http.post<void>(url, null);
  }

  getStats(){
    return this.http.get<Stats>(this.apiUrl);  
  }
}
