export class Vettura {
    constructor(public id:number,
        public marca: string,
        public modello: string,
        public alimentazione: string,
        public descrizione: string,
        public quantita: number,
        public noleggiatore:any
        ){}
}