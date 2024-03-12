import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {

  nome: string = '';
  nomeExibido: boolean = false;
  corMudada: boolean = false;
  corAlterada: boolean = false;


  exibirDados() {
    this.nomeExibido = true; 
  }

  limpar(){
    this.nome = '';
    this.nomeExibido = false;
  }

  trocarCor(){
    this.corAlterada = !this.corAlterada;
  }

  

}
