import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { RouterModule } from '@angular/router';
import { CadastrarEstabelecimentoComponent } from './estabelecimento/cadastrar/cadastrar.component';
import { CadastrarProdutoComponent } from './produto/cadastrar/cadastrar-produto.component';
import { CadastrarProdutoEstabelecimentoComponent } from './produto-estabelecimento/cadastrar/cadastrar-produto-estabelecimento.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProdutoEstabelecimentoComponent } from './produto-estabelecimento/cadastrar/listar/produto-estabelecimento.component';


@NgModule({
  declarations: [
    AppComponent,
    EstabelecimentoComponent,
    CadastrarEstabelecimentoComponent,
    CadastrarProdutoComponent,
    CadastrarProdutoEstabelecimentoComponent,
    ProdutoEstabelecimentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'estabelecimento', component: EstabelecimentoComponent},
      {path: 'estabelecimento-cadastrar', component: CadastrarEstabelecimentoComponent},
      {path: 'produto-cadastrar', component: CadastrarProdutoComponent},
      {path: 'estabelecimento-produto', component: CadastrarProdutoEstabelecimentoComponent},
      {path: 'produtos', component: ProdutoEstabelecimentoComponent},
    ]),
    FontAwesomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
