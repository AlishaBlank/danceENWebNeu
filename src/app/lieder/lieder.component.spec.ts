import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiederComponent } from './lieder.component';

describe('LiederComponent', () => {
  let component: LiederComponent;
  let fixture: ComponentFixture<LiederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiederComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
