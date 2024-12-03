import { Injectable } from '@angular/core';
import agenda from '../agenda.json'
interface Contato{
  id: number;
  nome: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatos: Contato[];

  constructor() {
    //Tentar obter os dados do localStorage 
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString): null;
    
    this.contatos = contatosLocalStorage || agenda;

    //Salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  getContatos(): Contato[] {
    return this.contatos;
  }

  addContato(contato: Contato): void {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  deleteContato(id: number): void {
    this.contatos = this.contatos.filter(contato => contato.id !== id);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
