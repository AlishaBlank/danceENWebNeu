export class Teilnehmer {
  id: number;
  vorname: string;
  nachname: string;
  [key: string]: any;

  constructor(id: number, vorname: string, nachname: string) {
    this.id = id;
    this.vorname = vorname;
    this.nachname = nachname;
  }
}
