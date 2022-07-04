export class Noleggio {
    constructor(public id:number,
        public dataInizio: string,
        public dataReso: string,
        public stato: string,
        public clienteId: number,
        public noleggiatoreId: number,
        public vetturaId: number){}
}