// src/app/fundo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fundo } from './fundo.model';
import { FundoRequest } from './fundo-request.modrl';

@Injectable({
  providedIn: 'root'
})
export class FundoService {
  private apiUrl = 'https://localhost:7187/api/v1/fundo'; // Substitua com a URL da sua API

  constructor(private http: HttpClient) {
    localStorage.setItem('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VySWQiLCJqdGkiOiJmNTUxN2JkOC04MDBjLTRjMTUtODM1NS00NmEzZmFmMGJhNTkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZ3VzdGF2byIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InRlc3RlIiwiZXhwIjoxNzI1ODE5NTg1LCJpc3MiOiJpdGF1LXRlc3RlIiwiYXVkIjoiaXRhdS10ZXN0ZSJ9.zGUXu5QLAaBanNPk9F_zapdmW4Wi76VCrTeFXMd2xc4');
   }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Use a chave que você usa para armazenar o token
    if (!token) {
      throw new Error('Token de autenticação não encontrado');
    }
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getFundos(): Observable<Fundo[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Fundo[]>(this.apiUrl, { headers });
  }

  getFundo(codigo: string): Observable<Fundo> {
    const headers = this.getAuthHeaders();
    return this.http.get<Fundo>(`${this.apiUrl}/${codigo}`, { headers });
  }

  addFundo(fundo: FundoRequest): Observable<FundoRequest> {
    const headers = this.getAuthHeaders();
    return this.http.post<FundoRequest>(this.apiUrl, fundo, { headers });
  }

  updateFundo(fundo: FundoRequest): Observable<FundoRequest> {
    const headers = this.getAuthHeaders();
    return this.http.put<FundoRequest>(`${this.apiUrl}`, fundo, { headers });
  }

  deleteFundo(codigo: string): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiUrl}?codigo=${codigo}`, { headers });
  }
}
