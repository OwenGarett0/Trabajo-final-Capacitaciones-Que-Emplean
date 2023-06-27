import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from './answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private apiUrl = 'http://localhost:3000/api/answers'; // Cambia la URL según tu configuración del backend

  constructor(private http: HttpClient) { }

  getRespuestas(threadId: number): Observable<Answer[]> {
    const url = `${this.apiUrl}/${threadId}`;
    return this.http.get<Answer[]>(url);
  }

  crearRespuesta(respuesta: Answer): Observable<any> {
    return this.http.post(this.apiUrl, respuesta);
  }

  // Implementa los demás métodos para actualizar y eliminar respuestas
}