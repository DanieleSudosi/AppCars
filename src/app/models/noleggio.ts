export class Noleggio {
    constructor(public id:number,
        public data_inizio: string,
        public data_reso: string,
        public stato: string,
        public cliente_id: number,
        public noleggiatore_id: number,
        public vettura_id: number){}
}