import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./componentes/container/container.component";
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { SeparadorComponent } from "./componentes/separador/separador.component";
import { ContatoComponent } from "./componentes/contato/contato.component";
import { FormsModule } from '@angular/forms';

interface Contato{
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json';
import { FormularioContatoComponent } from "./paginas/formulario-contato/formulario-contato.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContainerComponent, CabecalhoComponent, SeparadorComponent, ContatoComponent, FormsModule, FormularioContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;

  filtroPorTexto: string = '';

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  adicionarContato(contato: Contato){
    this.contatos.push(contato)
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
