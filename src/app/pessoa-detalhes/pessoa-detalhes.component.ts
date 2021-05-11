import { Component, OnInit, Input} from '@angular/core';
import { Pessoa } from '../pessoas';

@Component({
  selector: 'app-pessoa-detalhes',
  templateUrl: './pessoa-detalhes.component.html',
  styleUrls: ['./pessoa-detalhes.component.css']
})
export class PessoaDetalhesComponent implements OnInit {

  @Input () pessoaSelecionada : Pessoa;

 

  mostrarCadastro() : void{
    console.log("hey");
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
