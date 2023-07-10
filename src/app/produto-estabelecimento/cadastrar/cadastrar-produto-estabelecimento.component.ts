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

  ngOnInit() {
    this.preencherEstabelecimentos();   
    this.preencherProdutos();       
  } 

  private preencherEstabelecimentos() {
    let result;
    this.estabelecimentoService.getAll().subscribe(data => {
      result = data as any;
      this.estabelecimentos = result.estabelecimentos?.slice();
    });
  }
  private preencherProdutos() {
    let result;
    this.produtoService.getAll().subscribe(data => {
      result = data as any;
      this.produtos = result.produtos?.slice();
    });
  }

  submeterForm(){
    this.estabelecimentoProdutoService.save(this.estebelecimentoProdutoModel).subscribe(
      {
        next: (estabelecimento) => {
          console.log(estabelecimento);
          alert("Estabelecimento salvo com sucesso")
        }, 
        error: (err) => {alert(err)}
      })
  }
}
