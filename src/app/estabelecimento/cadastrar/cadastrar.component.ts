import { Component } from '@angular/core';
import { Estabelecimento } from 'src/app/model/estabelecimento';
import { EstabelecimentoService } from 'src/app/service/estabelecimento/estabelecimento.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarEstabelecimentoComponent {

  constructor(
    private estabelecimentoService : EstabelecimentoService,
    
  ){}
  estebelecimentoModel = new Estabelecimento()

  submeterForm(){
    if(!this.estebelecimentoModel.nome)
      return alert("Por favor, preencher o campo nome!");
    this.estabelecimentoService.save(this.estebelecimentoModel).subscribe(
      {
        next: (estabelecimento) => {
          this.estebelecimentoModel = {};
          alert("Estabelecimento salvo com sucesso")
        }, 
        error: (err) => {alert(err)}
      })
  }  
}
