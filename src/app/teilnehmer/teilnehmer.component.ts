import { Component, OnInit } from '@angular/core';
import { TeilnehmerService } from '../shared/teilnehmer.service';
import { Teilnehmer } from '../datamodels/teilnehmerliste';

@Component({
  selector: 'app-teilnehmer',
  templateUrl: './teilnehmer.component.html',
  styleUrls: ['./teilnehmer.component.css']
})
export class TeilnehmerComponent implements OnInit {
  objects: Teilnehmer[] = [];
  newTeilnehmer: Teilnehmer = { id: 0, vorname: '', nachname: '' };
  selectedObject: Teilnehmer | null = null;

  constructor(private teilnehmerService: TeilnehmerService) { }

  ngOnInit(): void {
    this.objects = this.teilnehmerService.getTeilnehmerListe();
    this.teilnehmerService.changed.subscribe(() => {
      this.objects = this.teilnehmerService.getTeilnehmerListe();
    });
  }

  onSelect(obj: Teilnehmer): void {
    this.selectedObject = obj;
  }

  onEdit(obj: Teilnehmer): void {
    this.newTeilnehmer = { ...obj };
    this.selectedObject = obj;
  }

  onDelete(obj: Teilnehmer): void {
    this.teilnehmerService.remove(obj);
    this.selectedObject = null;
  }

  addOrUpdateTeilnehmer(): void {
    if (this.newTeilnehmer.vorname && this.newTeilnehmer.nachname) {
      if (this.selectedObject) {
        // Update : Bearbiten von Teilnehmern
        const index = this.objects.findIndex(t => t.id === this.selectedObject!.id);
        if (index !== -1) {
          this.objects[index] = { ...this.newTeilnehmer };
          this.teilnehmerService.update(this.objects[index]);
        }
      } else {
        // Neuen Teilnehmer hinzufügen
        this.newTeilnehmer.id = this.objects.length + 1;
        this.teilnehmerService.teilnehmerHinzufuegen(this.newTeilnehmer);
      }
      this.newTeilnehmer = { id: 0, vorname: '', nachname: '' };
      this.selectedObject = null;
    }
  }
}
