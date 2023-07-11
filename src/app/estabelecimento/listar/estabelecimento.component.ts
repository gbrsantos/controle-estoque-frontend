import { Component, Output } from '@angular/core';
import { EstabelecimentoService } from '../../service/estabelecimento/estabelecimento.service';
import { Estabelecimento } from '../../model/estabelecimento';
import { Observable } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent {
  constructor(
    private estabelecimentoService : EstabelecimentoService
  ){}  
  faMagnifyingGlass = faMagnifyingGlass
  estabelecimentos: Estabelecimento[] =[];
  verificar: boolean = false;
  id: number =0;
  ngOnInit() {  
    let result;  
    this.estabelecimentoService.getAll().subscribe(data =>{
      result = data as any;
      this.estabelecimentos = result.estabelecimentos?.slice();
    });     
  } 
}
