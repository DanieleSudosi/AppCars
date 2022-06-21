import { Servizio } from "./servizio";

export class Contratto {
  constructor(public id:number, public costoMensile: number, public titoloContratto: string,public descrizioneContratto:string, 
            public durataMax: number, public durataMin:number, public servizi: Servizio[]){};
}
