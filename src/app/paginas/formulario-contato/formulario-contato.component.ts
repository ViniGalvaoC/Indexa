import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "../../componentes/container/container.component";
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [CommonModule,RouterLink, ContainerComponent, SeparadorComponent, ReactiveFormsModule],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent implements OnInit{
  contatoForm! : FormGroup;
  isSubmitted = false;

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  inicializarFormulario(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('',Validators.required),
      telefone: new FormControl('',[Validators.required,Validators.pattern('^\([1-9]{2}\) 9[0-9]{8}$')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  salvarContato(){
    this.isSubmitted = true;
    console.log(this.contatoForm.value);  
  }
}
