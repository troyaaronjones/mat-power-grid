import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterHeaderComponent } from './filter-header.component';
import { ColumnFilterPipe } from '../pipes/column-filter.pipe';

@Component({ selector: 'mpg-string-filter', template: '', standalone: false })
class MockStringFilterComponent {
  @Input() initialFilter: any;
  @Input() resetFilters: any;
  @Output() filter = new EventEmitter<any>();
}

@Component({ selector: 'mpg-number-filter', template: '', standalone: false })
class MockNumberFilterComponent {
  @Input() initialFilter: any;
  @Input() resetFilters: any;
  @Output() filter = new EventEmitter<any>();
}

@Component({ selector: 'mpg-date-filter', template: '', standalone: false })
class MockDateFilterComponent {
  @Input() initialFilter: any;
  @Input() resetFilters: any;
  @Output() filter = new EventEmitter<any>();
}

@Component({ selector: 'mpg-tag-filter', template: '', standalone: false })
class MockTagFilterComponent {
  @Input() initialFilter: any;
  @Input() resetFilters: any;
  @Input() numbersOnly: any;
  @Output() filter = new EventEmitter<any>();
}

@Component({ selector: 'mpg-multi-select', template: '', standalone: false })
class MockMultiSelectComponent {
  @Input() initialFilter: any;
  @Input() resetFilters: any;
  @Input() filterConfig: any;
  @Output() filter = new EventEmitter<any>();
}

describe('FilterHeaderComponent', () => {
  let component: FilterHeaderComponent;
  let fixture: ComponentFixture<FilterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FilterHeaderComponent,
        ColumnFilterPipe,
        MockStringFilterComponent,
        MockNumberFilterComponent,
        MockDateFilterComponent,
        MockTagFilterComponent,
        MockMultiSelectComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterHeaderComponent);
    component = fixture.componentInstance;
    component.heading = { fieldName: 'age', display: 'Age', type: 'number' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter object with fieldName on filterObjCreated', () => {
    spyOn(component.filter, 'emit');
    component.filterObjCreated({ field: 'age', operator: 'eq', value: '25' });

    expect(component.filter.emit).toHaveBeenCalledWith({
      field: 'age',
      operator: 'eq',
      value: '25'
    });
  });
});
