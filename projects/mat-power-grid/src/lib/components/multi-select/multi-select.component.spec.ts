import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MultiSelectComponent } from './multi-select.component';
import { GridService } from '../../grids/grid.service';
import { SearchPipe } from '../pipes/search.pipe';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiSelectComponent, SearchPipe],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [GridService]
    }).compileComponents();

    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    component.filterConfig = {
      selectionMode: 'multiple',
      source: 'internal',
      optionsObject: [
        { text: 'Option 1', value: '1' },
        { text: 'Option 2', value: '2' }
      ]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load internal options on init', () => {
    expect(component.selectionList.length).toBe(2);
  });

  it('should toggle all selection', () => {
    component.toggle();
    expect(component.allSelected).toBeTrue();
    expect(component.selection.value.length).toBe(2);
  });

  it('should reset selection cleanly', () => {
    spyOn(component.filter, 'emit');
    component.reset();
    expect(component.filterApplied).toBeFalse();
    expect(component.filter.emit).toHaveBeenCalledWith({ operator: 'eq', value: null });
  });
});
