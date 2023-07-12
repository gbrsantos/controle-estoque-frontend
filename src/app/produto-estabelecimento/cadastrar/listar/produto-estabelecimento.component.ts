import { Component, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { EstabelecimentoService } from 'src/app/service/estabelecimento/estabelecimento.service';
import { Estabelecimento } from 'src/app/model/estabelecimento';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { EstabelecimentoProduto } from 'src/app/model/estabelecimento-produto';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto/produto.service';
import { EstabelecimentoProdutoService } from 'src/app/service/estabelecimento-produto/estabelecimento-produto.service';


@Component({
  selector: 'app-estabelecimento',
  templateUrl: './produto-estabelecimento.component.html',
  styleUrls: ['./produto-estabelecimento.component.css']
})
export class ProdutoEstabelecimentoComponent {
  constructor(
    private estabelecimentoService : EstabelecimentoService,    
    private activatedroute: ActivatedRoute,
    private router:Router,
    private modalService: NgbModal,
    private produtoService : ProdutoService,
    private estabelecimentoProdutoService : EstabelecimentoProdutoService
  ){}  
  estabelecimento: Estabelecimento = {};
  faMagnifyingGlass = faMagnifyingGlass
  faPlus = faPlus
  verificar: boolean = false;
  id:number = 0;
  estebelecimentoProdutoModel = new EstabelecimentoProduto()
  estabelecimentos: Estabelecimento[] =[];
  produtos: Produto[] =[];
  itensSalvos:number = 0;

  ngOnInit() { 
    this.id = Number(this.activatedroute.snapshot
      .queryParamMap.get('id')||0);;     
    console.log(this.id);   
    this.estabelecimentoService.getById(this.id).subscribe(data =>{      
    this.estabelecimento = data;
        
    this.preencherProdutos();
    this.preencherEstabelecimentos();
    });     
    
  } 
  async controlarModalAvisoConclusaoProcesso() {  
    const modalAvisoConclusaoProcesso = this.modalService.open(ModalComponent, { centered: true });
    modalAvisoConclusaoProcesso.componentInstance.title = 'Vincular Produto ao Estabelecimento';    
    modalAvisoConclusaoProcesso.componentInstance.buttons = [
      {
        name: 'Voltar',
        class: 'btn btn-outline-danger',
        fnc: () => {
          modalAvisoConclusaoProcesso.dismiss()
          
        },
      },
      {
        name: 'Vincular',
        class: 'btn btn-outline-primary',
        fnc: () => this.salvarProdutoEstabelecimento(modalAvisoConclusaoProcesso.componentInstance.estebelecimentoProdutoModel),
      },
     
    ];
    modalAvisoConclusaoProcesso.componentInstance.estabelecimentos = this.estabelecimentos;
    modalAvisoConclusaoProcesso.componentInstance.produtos = this.produtos;
    modalAvisoConclusaoProcesso.componentInstance.showCancelBtn = false;
    const subscription = modalAvisoConclusaoProcesso.closed.subscribe(() => {
      subscription.unsubscribe();
    });
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

  salvarProdutoEstabelecimento(estebelecimentoProduto: EstabelecimentoProduto){
    console.log("tentando salvar",estebelecimentoProduto);
    this.estabelecimentoProdutoService.save(estebelecimentoProduto).subscribe(
      {
        next: (estabelecimento) => {
          this.estabelecimentoService.getById(this.id).subscribe(data =>{      
          this.estabelecimento = data;
          });
          console.log(estabelecimento);
          alert("Estabelecimento Produto salvo com sucesso")
        }, 
        error: (err) => {alert(err)}
      })
  }
  
}
