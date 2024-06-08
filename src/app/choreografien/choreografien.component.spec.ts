import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreografienComponent } from './choreografien.component';

describe('ChoreografienComponent', () => {
  let component: ChoreografienComponent;
  let fixture: ComponentFixture<ChoreografienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoreografienComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChoreografienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
