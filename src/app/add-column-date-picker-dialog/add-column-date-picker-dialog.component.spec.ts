import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColumnDatePickerDialogComponent } from './add-column-date-picker-dialog.component';

describe('AddColumnDatePickerDialogComponent', () => {
  let component: AddColumnDatePickerDialogComponent;
  let fixture: ComponentFixture<AddColumnDatePickerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddColumnDatePickerDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddColumnDatePickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
