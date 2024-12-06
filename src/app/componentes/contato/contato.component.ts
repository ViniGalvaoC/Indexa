import { Component, Input } from '@angular/core';
import { ListaContatosComponent } from '../../paginas/lista-contatos/lista-contatos.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Input() nome: string = '';
  @Input() telefone: string = '';
  @Input() id: number = 0;

  constructor(private listaContatos: ListaContatosComponent){

  }
  excluirContato(){
    this.listaContatos.deleteContato(this.id);
  }
}
