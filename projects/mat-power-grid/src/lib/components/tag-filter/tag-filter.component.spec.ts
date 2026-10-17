import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TagFilterComponent } from './tag-filter.component';

describe('TagFilterComponent', () => {
  let component: TagFilterComponent;
  let fixture: ComponentFixture<TagFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagFilterComponent],
      imports: [
        ReactiveFormsModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatIconModule,
        NoopAnimationsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TagFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add tag value when addTagValue is called', () => {
    const dummyEvent = { stopPropagation: () => {} } as Event;
    component.tagValue.setValue('Angular');
    component.addTagValue(dummyEvent);

    expect(component.tagValues).toContain('Angular');
  });

  it('should emit comma separated values on validate', () => {
    spyOn(component.filter, 'emit');
    component.tagValues = ['Tag1', 'Tag2'];
    component.validate();

    expect(component.filter.emit).toHaveBeenCalledWith({
      operator: 'eq',
      value: 'Tag1,Tag2'
    });
  });

  it('should reset tag filter cleanly', () => {
    spyOn(component.filter, 'emit');
    component.tagValues = ['Tag1'];
    component.reset();

    expect(component.tagValues.length).toBe(0);
    expect(component.filter.emit).toHaveBeenCalledWith({ operator: 'eq', value: null });
  });
});
