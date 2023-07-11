import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { EstabelecimentoService } from 'src/app/service/estabelecimento/estabelecimento.service';
import { Estabelecimento } from 'src/app/model/estabelecimento';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-estabelecimento',
  templateUrl: './produto-estabelecimento.component.html',
  styleUrls: ['./produto-estabelecimento.component.css']
})
export class ProdutoEstabelecimentoComponent {
  constructor(
    private estabelecimentoService : EstabelecimentoService,    
    private activatedroute: ActivatedRoute,
    private router:Router
  ){}  
  estabelecimento: Estabelecimento = {};
  faMagnifyingGlass = faMagnifyingGlass
  verificar: boolean = false;
  id:number = 0;
  ngOnInit() { 
    this.id = Number(this.activatedroute.snapshot
      .queryParamMap.get('id')||0);;     
    console.log(this.id);   
    this.estabelecimentoService.getById(1).subscribe(data =>{      
      this.estabelecimento = data;
    });     
  } 
}
