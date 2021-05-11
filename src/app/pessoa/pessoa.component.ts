import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoas';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {


  listaPessoas : Pessoa[];
  pessoaSelecionada : Pessoa;

  selecionaPessoa(pessoa : Pessoa) : void{
    this.pessoaSelecionada = pessoa;
  }
  
  mostrarCadastro() : void{
    console.log("hey");
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
