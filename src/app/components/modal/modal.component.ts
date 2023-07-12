import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Estabelecimento } from 'src/app/model/estabelecimento';
import { EstabelecimentoProduto } from 'src/app/model/estabelecimento-produto';
import { Produto } from 'src/app/model/produto';
import { EstabelecimentoService } from 'src/app/service/estabelecimento/estabelecimento.service';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { EstabelecimentoProdutoService } from 'src/app/service/estabelecimento-produto/estabelecimento-produto.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

ngOnInit(){
}
  faClose= faClose  
  @Input()
  title: string = 'Title';

  @Input()
  htmlBody: string = '<p style="color: red;" class="col-md-3">Dummy text with styles</p>';

  @Input()
  buttons: { name: string, class: string, fnc: () => {} }[] = [];

  @Input()
  showCancelBtn = true;

  @Input()
  estabelecimentos: Estabelecimento[];

  estebelecimentoProdutoModel: EstabelecimentoProduto ={}

  produtos: Produto[];

  constructor(public modal: NgbActiveModal, 
    private estabelecimentoProdutoService : EstabelecimentoProdutoService) {}

}
