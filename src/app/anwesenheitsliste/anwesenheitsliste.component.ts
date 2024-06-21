import { Component, OnInit } from '@angular/core';
import { TeilnehmerService } from '../shared/teilnehmer.service'
import { Teilnehmer } from '../datamodels/teilnehmerliste'
import { MatDialog } from '@angular/material/dialog';
import { AddColumnDatePickerDialogComponent } from '../add-column-date-picker-dialog/add-column-date-picker-dialog.component';

@Component({
  selector: 'app-anwesenheitsliste',
  templateUrl: './anwesenheitsliste.component.html',
  styleUrls: ['./anwesenheitsliste.component.css']
})
export class AnwesenheitslisteComponent implements OnInit {
  objects: Teilnehmer[] = [];
  extraColumns: string[] = [];
  

  constructor(private teilnehmerService: TeilnehmerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.objects = this.teilnehmerService.getTeilnehmerListe();
    this.teilnehmerService.changed.subscribe(() => {
      this.objects = this.teilnehmerService.getTeilnehmerListe();
    });
  }


  addColumn(): void {
    const dialogRef = this.dialog.open(AddColumnDatePickerDialogComponent, {
      width: '300px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newColumn: string = result.date
        this.extraColumns.push(newColumn);
      }
    });
  }


}


/*const columnName = prompt("Bitte geben Sie den Namen der neuen Spalte ein:");
    if (columnName) {
      this.extraColumns.push(columnName);
      // Optional: Initialisiere die neue Spalte mit leeren Werten für vorhandene Teilnehmer
      this.objects = this.objects.map(teilnehmer => ({
        ...teilnehmer,
        [columnName]: ''
      }));
    } */
