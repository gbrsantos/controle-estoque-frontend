import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EstabelecimentoComponent } from './estabelecimento/listar/estabelecimento.component';
import { RouterModule } from '@angular/router';
import { CadastrarEstabelecimentoComponent } from './estabelecimento/cadastrar/cadastrar.component';
import { CadastrarProdutoComponent } from './produto/cadastrar/cadastrar-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ProdutoEstabelecimentoComponent } from './produto-estabelecimento/cadastrar/listar/produto-estabelecimento.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    EstabelecimentoComponent,
    CadastrarEstabelecimentoComponent,
    CadastrarProdutoComponent,
    ProdutoEstabelecimentoComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'estabelecimento', component: EstabelecimentoComponent},
      {path: 'estabelecimento-cadastrar', component: CadastrarEstabelecimentoComponent},
      {path: 'produto-cadastrar', component: CadastrarProdutoComponent},
      {path: 'produtos', component: ProdutoEstabelecimentoComponent},
    ]),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
