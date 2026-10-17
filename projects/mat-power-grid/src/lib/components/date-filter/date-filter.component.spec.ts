import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DateFilterComponent } from './date-filter.component';

describe('DateFilterComponent', () => {
  let component: DateFilterComponent;
  let fixture: ComponentFixture<DateFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateFilterComponent],
      imports: [
        ReactiveFormsModule,
        MatMenuModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with initialFilter when provided', () => {
    component.initialFilter = { field: 'date', operator: 'betweendates', value: '01/01/2026-01/10/2026' };
    component.ngOnInit();
    expect(component.filterApplied).toBeTrue();
  });

  it('should emit filter on validate with valid date range', () => {
    spyOn(component.filter, 'emit');
    component.range.controls['start'].setValue(new Date(2026, 0, 1));
    component.range.controls['end'].setValue(new Date(2026, 0, 10));
    component.validate();

    expect(component.filter.emit).toHaveBeenCalledWith({
      operator: 'betweendates',
      value: '01/01/2026-01/10/2026'
    });
  });

  it('should reset filter cleanly', () => {
    spyOn(component.filter, 'emit');
    component.reset();
    expect(component.filterApplied).toBeFalse();
    expect(component.filter.emit).toHaveBeenCalledWith({ operator: 'betweendates', value: null });
  });
});
