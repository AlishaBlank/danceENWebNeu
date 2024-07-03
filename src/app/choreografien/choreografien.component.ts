import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TeilnehmerComponent } from '../teilnehmer/teilnehmer.component';
import { TeilnehmerService } from '../shared/teilnehmer.service';
import { Teilnehmer } from '../datamodels/teilnehmerliste';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-choreografien',
  templateUrl: './choreografien.component.html',
  styleUrl: './choreografien.component.css'
})
export class ChoreografienComponent implements AfterViewInit{
  @ViewChild('choreographyGrid') choreographyGrid!: ElementRef<HTMLDivElement>;
  teilnehmer = [
    { name: 'BC', position: { x: 50, y: 50 } },
    { name: 'CB', position: { x: 100, y: 100 } },
    { name: 'FL', position: { x: 150, y: 150 } },
    { name: 'H', position: { x: 200, y: 200 } },
    { name: 'HJ', position: { x: 250, y: 250 } },
    { name: 'IN', position: { x: 300, y: 300 } },
    { name: 'LK', position: { x: 350, y: 350 } },
    { name: 'SM', position: { x: 400, y: 400 } }
  ];

  gridWidth!: number;
  gridHeight!: number;

  ngAfterViewInit() {
    this.gridWidth = this.choreographyGrid.nativeElement.offsetWidth;
    this.gridHeight = this.choreographyGrid.nativeElement.offsetHeight;
  }

  onDragEnded(event: CdkDragEnd, teilnehmer: any) {
    const element: HTMLElement = event.source.element.nativeElement;
    const rect = element.getBoundingClientRect();

    const offsetX = event.distance.x;
    const offsetY = event.distance.y;

    let newX = teilnehmer.position.x + offsetX;
    let newY = teilnehmer.position.y + offsetY;

    // Begrenzungen
    if (newX < 0) {
      newX = 0;
    } else if (newX + element.offsetWidth > this.gridWidth) {
      newX = this.gridWidth - element.offsetWidth;
    }

    if (newY < 0) {
      newY = 0;
    } else if (newY + element.offsetHeight > this.gridHeight) {
      newY = this.gridHeight - element.offsetHeight;
    }

    teilnehmer.position.x = newX;
    teilnehmer.position.y = newY;

    // Update the position in the DOM (optional if you don't rely on Angular change detection)
    element.style.transform = `translate(${newX}px, ${newY}px)`;
  }
}
