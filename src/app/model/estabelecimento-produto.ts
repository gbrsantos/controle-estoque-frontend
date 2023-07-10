import { Estabelecimento } from "./estabelecimento";
import { Produto } from "./produto";

export class EstabelecimentoProduto {
    constructor(
        public estabelecimento?: Estabelecimento,
        public produto? : Produto
    ){}  
}
