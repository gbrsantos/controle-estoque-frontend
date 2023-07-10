import { Estabelecimento } from "./estabelecimento";

export class Produto {
    constructor(
        public nome: string,
        public valor: number,
        public produtos : Estabelecimento[]
    ){}  
}
