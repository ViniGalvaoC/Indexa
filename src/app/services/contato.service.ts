import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  getContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API);
  }


  addContato(contato: Contato):  Observable<Contato> {
    return this.http.post<Contato>(this.API,contato);
  }

  deleteContato(id:number): Observable<Contato> {
    return this.http.delete<Contato>(`${this.API}/${id}`)
  }
}
