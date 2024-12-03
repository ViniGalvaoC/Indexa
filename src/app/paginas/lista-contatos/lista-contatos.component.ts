import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';

import { ContatoService } from '../../services/contato.service';


interface Contato{
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [ContainerComponent,RouterLink, CabecalhoComponent, SeparadorComponent, ContatoComponent, FormsModule, FormularioContatoComponent],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit{
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = [];

  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService){
  }
  
  ngOnInit(){
    this.contatos = this.contatoService.getContatos();
  }

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private filtrarContatosPorTexto (): Contato [] {
    if (!this.filtroPorTexto) {
        return this.contatos
}
    return this.contatos.filter(contato => {
        return this.removerAcentos(contato.nome).toLowerCase().includes (this.filtroPorTexto.toLowerCase())
    })
}

  filtraContatosPorLetraInicial(letra:string) : Contato[]{
    return this.filtrarContatosPorTexto().filter( contato => {
      return contato.nome.toLowerCase().startsWith(letra);
    })
  }
}
