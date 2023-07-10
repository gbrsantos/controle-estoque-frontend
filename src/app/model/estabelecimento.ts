import { Produto } from "./produto";

export class Estabelecimento {
    constructor(
        public id?: number,
        public nome?: string,
        public produtos? : Produto[]
    ){}  
}
