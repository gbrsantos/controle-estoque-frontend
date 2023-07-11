import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { EstabelecimentoService } from 'src/app/service/estabelecimento/estabelecimento.service';
import { Estabelecimento } from 'src/app/model/estabelecimento';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/components/modal/modal.component';



@Component({
  selector: 'app-estabelecimento',
  templateUrl: './produto-estabelecimento.component.html',
  styleUrls: ['./produto-estabelecimento.component.css']
})
export class ProdutoEstabelecimentoComponent {
  constructor(
    private estabelecimentoService : EstabelecimentoService,    
    private activatedroute: ActivatedRoute,
    private modalService: MdbModalService
  ){}  
  estabelecimento: Estabelecimento = {};
  faMagnifyingGlass = faMagnifyingGlass
  faPlus = faPlus
  verificar: boolean = false;
  id:number = 0;

  modalRef: MdbModalRef<ModalComponent> | null = null;
  ngOnInit() { 
    this.id = Number(this.activatedroute.snapshot
      .queryParamMap.get('id')||0);;     
    console.log(this.id);   
    this.estabelecimentoService.getById(1).subscribe(data =>{      
      this.estabelecimento = data;
    });     
  } 

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: { title: 'Custom title' },
    });
  }
}
