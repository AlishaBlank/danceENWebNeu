import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-column-date-picker-dialog',
  templateUrl: './add-column-date-picker-dialog.component.html',
  styleUrl: './add-column-date-picker-dialog.component.css'
})
export class AddColumnDatePickerDialogComponent {

  date: string = ""
  constructor(public dialogRef: MatDialogRef<AddColumnDatePickerDialogComponent>) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.dialogRef.close({ date: this.date });
  }
}
