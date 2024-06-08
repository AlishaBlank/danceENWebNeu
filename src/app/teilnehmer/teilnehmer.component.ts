import { Component, OnInit } from '@angular/core';
import { TeilnehmerService } from '../shared/teilnehmer.service';
import { Teilnehmer } from 'C:/Users/lisha/source/repos/danceENWeb/src/app/datamodels/teilnehmerliste'

@Component({
  selector: 'app-teilnehmer',
  templateUrl: './teilnehmer.component.html',
  styleUrl: './teilnehmer.component.css'
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

  onDelete(obj: Teilnehmer): void {
    this.teilnehmerService.remove(obj);
    this.selectedObject = null;
  }

  addTeilnehmer(): void {
    if (this.newTeilnehmer.vorname && this.newTeilnehmer.nachname) {
      this.newTeilnehmer.id = this.objects.length + 1;
      this.teilnehmerService.teilnehmerHinzufuegen(this.newTeilnehmer);
      this.newTeilnehmer = { id: 0, vorname: '', nachname: '' };
    }
  }
}
