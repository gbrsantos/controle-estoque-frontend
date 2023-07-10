import { Component, Output } from '@angular/core';
import { EstabelecimentoService } from '../service/estabelecimento/estabelecimento.service';
import { Estabelecimento } from '../model/estabelecimento';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent {
  constructor(
    private estabelecimentoService : EstabelecimentoService
  ){}  

  estabelecimentos: Estabelecimento[] =[];
  verificar: boolean = false;

  ngOnInit() {
    let result;  
    this.estabelecimentoService.getAll().subscribe(data =>{
      result = data as any;
      this.estabelecimentos = result.estabelecimentos?.slice();
    });     
  } 
}
