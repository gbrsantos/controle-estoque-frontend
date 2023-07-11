import { Estabelecimento } from "./estabelecimento";

export class Produto {
    constructor(
        public id?: number,
        public nome?: string,
        public valor?: number,
        public produtos? : Estabelecimento[]
    ){}  
}
