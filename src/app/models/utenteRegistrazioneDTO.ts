export class UtenteRegistrazioneDTO {
  constructor(
    public username: string,
    public password: string,
    public nome: string,
    public cognome: string,
    public codice: string
  ) {}
}
