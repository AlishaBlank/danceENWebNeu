import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Teilnehmer } from '../datamodels/teilnehmerliste';

@Injectable({
  providedIn: 'root'
})
export class TeilnehmerService {
  private teilnehmerListe: Teilnehmer[] = [];
  changed = new Subject<void>();

  getTeilnehmerListe(): Teilnehmer[] {
    return this.teilnehmerListe;
  }

  teilnehmerHinzufuegen(teilnehmer: Teilnehmer): void {
    this.teilnehmerListe.push(teilnehmer);
    this.changed.next();
  }

  remove(teilnehmer: Teilnehmer): void {
    const index = this.teilnehmerListe.indexOf(teilnehmer);
    if (index > -1) {
      this.teilnehmerListe.splice(index, 1);
      this.changed.next();
    }
  }

  update(teilnehmer: Teilnehmer): void {
    const index = this.teilnehmerListe.findIndex(t => t.id === teilnehmer.id);
    if (index !== -1) {
      this.teilnehmerListe[index] = teilnehmer;
      this.changed.next();
    }
  }
}
