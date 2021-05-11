import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaDetalhesComponent } from './pessoa-detalhes/pessoa-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PessoaDetalhesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
