import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { SortHeaderComponent } from './sort-header.component';

describe('SortHeaderComponent', () => {
  let component: SortHeaderComponent;
  let fixture: ComponentFixture<SortHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortHeaderComponent],
      imports: [
        MatIconModule,
        MatTooltipModule,
        MatRippleModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sort directions asc -> desc -> null', () => {
    spyOn(component.filter, 'emit');
    component.heading = { fieldName: 'name', display: 'Name', sort: null, disableSorting: false };

    component.sort();
    expect(component.heading.sort).toBe('asc');
    expect(component.filter.emit).toHaveBeenCalledWith(component.heading);

    component.sort();
    expect(component.heading.sort).toBe('desc');

    component.sort();
    expect(component.heading.sort).toBeNull();
  });

  it('should not sort if disableSorting is true', () => {
    spyOn(component.filter, 'emit');
    component.heading = { fieldName: 'name', display: 'Name', sort: null, disableSorting: true };

    component.sort();
    expect(component.heading.sort).toBeNull();
    expect(component.filter.emit).not.toHaveBeenCalled();
  });
});
