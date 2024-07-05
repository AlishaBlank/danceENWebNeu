import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-choreografien',
  templateUrl: './choreografien.component.html',
  styleUrls: ['./choreografien.component.css']
})
export class ChoreografienComponent implements AfterViewInit {
  @ViewChild('choreographyGrid', { static: false }) choreographyGrid!: ElementRef<HTMLDivElement>;
  choreographies: {
    id: number;
    name: string;
    isVisible: boolean;

    teilnehmer: {
      name: string;
      position: { x: number; y: number }
    }[];
  }[] = [];

  gridWidth!: number;
  gridHeight!: number;

  ngAfterViewInit() {
    this.updateGridDimensions();
  }

  updateGridDimensions() {
    if (this.choreographyGrid) {
      this.gridWidth = this.choreographyGrid.nativeElement.offsetWidth;
      this.gridHeight = this.choreographyGrid.nativeElement.offsetHeight;
    }
  }

  onDragEnded(event: CdkDragEnd, teilnehmer: any) {
    const element: HTMLElement = event.source.element.nativeElement;
    const offsetX = event.distance.x;
    const offsetY = event.distance.y;
    let newX = teilnehmer.position.x + offsetX;
    let newY = teilnehmer.position.y + offsetY;

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

  toggleDiv(id: number) {
    const choreo = this.choreographies.find(c => c.id === id);
    if (choreo) {
      choreo.isVisible = !choreo.isVisible;
    }
  }

  addChoreography() {
    const name = prompt('Bitte geben Sie einen Namen für die neue Choreografie ein:');
    if (name) {
      const newId = this.choreographies.length + 1;
      this.choreographies.push({
        id: newId,
        name: name,
        isVisible: true,
        teilnehmer: [
          { name: 'BC', position: { x: 40, y: 0 } },
          { name: 'CB', position: { x: 80, y: 0 } },
          { name: 'FL', position: { x: 120, y: 0 } },
          { name: 'H', position: { x: 160, y: 0 } },
          { name: 'HJ', position: { x: 200, y: 0 } },
          { name: 'IN', position: { x: 240, y: 0 } },
          { name: 'LK', position: { x: 280, y: 0 } },
          { name: 'SM', position: { x: 320, y: 0 } }
        ]
      });
    }
  }
}
