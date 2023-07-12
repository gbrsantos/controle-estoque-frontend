import { Component } from '@angular/core';
import { Estabelecimento } from 'src/app/model/estabelecimento';
import { Produto } from 'src/app/model/produto';
import { EstabelecimentoService } from 'src/app/service/estabelecimento/estabelecimento.service';
import { ProdutoService } from 'src/app/service/produto/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent {

  constructor(
    private produtoService : ProdutoService
  ){}
  produtoModel = new Produto()

  submeterForm(){
    if((!this.produtoModel || !this.produtoModel.nome || !this.produtoModel.valor))
        return alert("Por favor, preencher todos os campos!");
    this.produtoService.save(this.produtoModel).subscribe(      
      {
        next: (produto) => {
          console.log(produto);
          this.produtoModel= {};
          alert("Produto salvo com sucesso")
        }, 
        error: (err) => {alert(err)}
      })
  }
}
