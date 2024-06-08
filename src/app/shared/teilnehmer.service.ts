import { EventEmitter, Injectable, Output } from '@angular/core';
import { Teilnehmer } from 'C:/Users/lisha/source/repos/danceENWeb/src/app/datamodels/teilnehmerliste';



@Injectable({
  providedIn: 'root'
})

export class TeilnehmerService {
  @Output() changed = new EventEmitter<void>();

  private objects: Teilnehmer[] = [
    { id: 1, vorname: 'TestVor1', nachname: 'TestNach1' },
    { id: 2, vorname: 'TestVor2', nachname: 'TestNach2' }
  ];

  constructor() { }

  teilnehmerHinzufuegen(teilnehmer: Teilnehmer): void {
    this.objects.push(teilnehmer);
    this.changed.emit();
  }

  getTeilnehmerListe(): Teilnehmer[] {
    return this.objects.slice();
  }

  async getAll(): Promise<Teilnehmer[]> {
    return this.objects.slice();
  }

  remove(obj: Teilnehmer): void {
    const index = this.objects.findIndex(x => x.id === obj.id);
    if (index !== -1) {
      this.objects.splice(index, 1);
      this.changed.emit();
    }
  }
}
