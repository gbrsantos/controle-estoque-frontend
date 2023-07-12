import { Estabelecimento } from "./estabelecimento";
import { Produto } from "./produto";

export class EstabelecimentoProduto {
    constructor(
        public id_estabelecimento?: number,
        public id_produto? : number
    ){}  
}
