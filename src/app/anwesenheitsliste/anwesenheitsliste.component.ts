import { Component, OnInit } from '@angular/core';
import { TeilnehmerService } from '../shared/teilnehmer.service'
import { Teilnehmer } from '../datamodels/teilnehmerliste'

@Component({
  selector: 'app-anwesenheitsliste',
  templateUrl: './anwesenheitsliste.component.html',
  styleUrls: ['./anwesenheitsliste.component.css']
})
export class AnwesenheitslisteComponent implements OnInit {
  objects: Teilnehmer[] = [];
  extraColumns: string[] = [];
  

  constructor(private teilnehmerService: TeilnehmerService) { }

  ngOnInit(): void {
    this.objects = this.teilnehmerService.getTeilnehmerListe();
    this.teilnehmerService.changed.subscribe(() => {
      this.objects = this.teilnehmerService.getTeilnehmerListe();
    });
  }

  addColumn(): void {
    const columnName = prompt("Bitte geben Sie den Namen der neuen Spalte ein:");
    if (columnName) {
      this.extraColumns.push(columnName);
      // Optional: Initialisiere die neue Spalte mit leeren Werten für vorhandene Teilnehmer
      this.objects = this.objects.map(teilnehmer => ({
        ...teilnehmer,
        [columnName]: ''
      }));
    }
  }
}
