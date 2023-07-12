import { Component } from '@angular/core';
import { Estabelecimento } from 'src/app/model/estabelecimento';
import { EstabelecimentoProduto } from 'src/app/model/estabelecimento-produto';
import { Produto } from 'src/app/model/produto';
import { EstabelecimentoProdutoService } from 'src/app/service/estabelecimento-produto/estabelecimento-produto.service';
import { EstabelecimentoService } from 'src/app/service/estabelecimento/estabelecimento.service';
import { ProdutoService } from 'src/app/service/produto/produto.service';

@Component({
  selector: 'app-cadastrar-produto-estabelecimento',
  templateUrl: './cadastrar-produto-estabelecimento.component.html',
  styleUrls: ['./cadastrar-produto-estabelecimento.component.css']
})
export class CadastrarProdutoEstabelecimentoComponent {

  constructor(
    private estabelecimentoService : EstabelecimentoService,
    private produtoService : ProdutoService,
    private estabelecimentoProdutoService : EstabelecimentoProdutoService
  ){}
  estebelecimentoProdutoModel = new EstabelecimentoProduto()
  estabelecimentos: Estabelecimento[] =[];
  produtos: Produto[] =[];
}
