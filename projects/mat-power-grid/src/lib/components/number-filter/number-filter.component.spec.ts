import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NumberFilterComponent } from './number-filter.component';

describe('NumberFilterComponent', () => {
  let component: NumberFilterComponent;
  let fixture: ComponentFixture<NumberFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberFilterComponent],
      imports: [
        ReactiveFormsModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NumberFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate and emit filter for single equal number', () => {
    spyOn(component.filter, 'emit');
    component.selection.setValue('eq');
    component.value.setValue('42');
    component.validate();

    expect(component.filter.emit).toHaveBeenCalledWith({
      operator: 'eq',
      value: '42'
    });
  });

  it('should validate and emit filter for range between numbers', () => {
    spyOn(component.filter, 'emit');
    component.selection.setValue('between');
    component.range.controls['from'].setValue('10');
    component.range.controls['to'].setValue('20');
    component.validate();

    expect(component.filter.emit).toHaveBeenCalledWith({
      operator: 'between',
      value: '10-20'
    });
  });

  it('should reset filter cleanly', () => {
    spyOn(component.filter, 'emit');
    component.reset();
    expect(component.filterApplied).toBeFalse();
    expect(component.filter.emit).toHaveBeenCalledWith({ operator: 'between', value: null });
  });
});
