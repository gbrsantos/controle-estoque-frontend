import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { RouterModule } from '@angular/router';
import { CadastrarEstabelecimentoComponent } from './estabelecimento/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    EstabelecimentoComponent,
    CadastrarEstabelecimentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'estabelecimento', component: EstabelecimentoComponent},
      {path: 'estabelecimento-cadastrar', component: CadastrarEstabelecimentoComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
