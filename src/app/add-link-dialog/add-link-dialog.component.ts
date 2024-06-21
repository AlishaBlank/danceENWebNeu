import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-link-dialog',
  templateUrl: './add-link-dialog.component.html',
})
export class AddLinkDialogComponent {
  title: string = '';
  url: string = '';

  constructor(public dialogRef: MatDialogRef<AddLinkDialogComponent>) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAdd(): void {
    this.dialogRef.close({ title: this.title, url: this.url });
  }
}
