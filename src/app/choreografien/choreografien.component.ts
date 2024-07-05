import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-choreografien',
  templateUrl: './choreografien.component.html',
  styleUrls: ['./choreografien.component.css']
})
export class ChoreografienComponent implements AfterViewInit {
  isDivVisible = false;

  @ViewChild('choreographyGrid') choreographyGrid!: ElementRef<HTMLDivElement>;
  teilnehmer = [
    { name: 'BC', position: { x: 40, y: 0 } },
    { name: 'CB', position: { x: 80, y: 0 } },
    { name: 'FL', position: { x: 120, y: 0 } },
    { name: 'H', position:  { x: 160, y: 0 } },
    { name: 'HJ', position: { x: 200, y: 0 } },
    { name: 'IN', position: { x: 240, y: 0 } },
    { name: 'LK', position: { x: 280, y: 0 } },
    { name: 'SM', position: { x: 320, y: 0 } }
  ];

  gridWidth!: number;
  gridHeight!: number;

  ngAfterViewInit() {
    this.gridWidth = this.choreographyGrid.nativeElement.offsetWidth;
    this.gridHeight = this.choreographyGrid.nativeElement.offsetHeight;
  }

  onDragEnded(event: CdkDragEnd, teilnehmer: any) {
    const element: HTMLElement = event.source.element.nativeElement;

    // Neue Position
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

    
    event.source.reset();
  }

  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }
}
