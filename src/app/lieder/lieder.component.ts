import { Component, ViewChild, ElementRef } from '@angular/core';
import { links } from '../datamodels/Links';
import { MatDialog } from '@angular/material/dialog';
import { AddLinkDialogComponent } from '../../app/add-link-dialog/add-link-dialog.component'

@Component({
  selector: 'app-lieder',
  templateUrl: './lieder.component.html',
  styleUrl: './lieder.component.css'
})
export class LiederComponent {
  links: links[] = [];

  constructor(public dialog: MatDialog) { }

  openAddLinkDialog(): void {
    const dialogRef = this.dialog.open(AddLinkDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newLink: links = {
          id: this.links.length + 1,
          titel: result.title,
          url: result.url
        };
        this.links.push(newLink);
      }
    });
  }
}
