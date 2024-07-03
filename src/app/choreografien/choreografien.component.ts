import { Component } from '@angular/core';
import { TeilnehmerComponent } from '../teilnehmer/teilnehmer.component';
import { TeilnehmerService } from '../shared/teilnehmer.service';
import { Teilnehmer } from '../datamodels/teilnehmerliste';

@Component({
  selector: 'app-choreografien',
  templateUrl: './choreografien.component.html',
  styleUrl: './choreografien.component.css'
})
export class ChoreografienComponent {

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

}
