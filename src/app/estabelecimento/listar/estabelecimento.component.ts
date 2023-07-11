import { Component, Output } from '@angular/core';
import { EstabelecimentoService } from '../../service/estabelecimento/estabelecimento.service';
import { Estabelecimento } from '../../model/estabelecimento';
import { Observable } from 'rxjs';
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
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
  faTrash = faTrash
  estabelecimentos: Estabelecimento[] =[];
  verificar: boolean = false;
  id: number =0;
  ngOnInit() {  
   this.getAllEstabelecimentos();
  } 


  getAllEstabelecimentos() {
    let result;
    this.estabelecimentoService.getAll().subscribe(data => {
      result = data as any;
      this.estabelecimentos = result.estabelecimentos?.slice();
    });
  }

 async validarDelete(estabelecimento : Estabelecimento){
  await this.delete(estabelecimento);
 }
 delete(estabelecimento : Estabelecimento){
    let result;  
    this.estabelecimentoService.deleteById(Number(estabelecimento.id)).subscribe({
      next: () => {
        console.log("deu certo");
        const deleted = this.estabelecimentos.find(x => x.id === (Number(estabelecimento.id)));        
        this.estabelecimentos.splice(this.estabelecimentos.indexOf(deleted as any), 1);        
      }, 
      error: (err) => {alert(err)}
    });       
  }
  
}
