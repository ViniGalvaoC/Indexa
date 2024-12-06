import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "aninhaDoCorre@seloiro.com"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235", "email": "antonioNoia@esquece.com"},
    {"id": 3, "nome": "biel", "telefone": "38 128451235", "email": "bielDoPó@cheirada.com"},
  ];

  constructor(private httpClientModule: HttpClientModule) {
    //Tentar obter os dados do localStorage 
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString): null;
    
    if(contatosLocalStorage){
      this.contatos = contatosLocalStorage;
    }

    //Salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  getContatos(): Contato[] {
    return this.contatos;
  }

  addContato(contato: Contato): void {
    let newID = this.contatos.length + 1;
    contato.id = newID;
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  deleteContato(id:number): void {
    this.contatos = this.contatos.filter(contato => contato.id !== id);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
