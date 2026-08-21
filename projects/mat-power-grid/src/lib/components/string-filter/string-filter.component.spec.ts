import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { StringFilterComponent } from './string-filter.component';
import { NumberFilterComponent } from '../number-filter/number-filter.component';
import { DateFilterComponent } from '../date-filter/date-filter.component';
import { TagFilterComponent } from '../tag-filter/tag-filter.component';

describe('Filter Components Safe Close Menu Tests', () => {
    describe('StringFilterComponent', () => {
        let component: StringFilterComponent;

        beforeEach(() => {
            component = new StringFilterComponent();
        });

        it('should handle reset when menu is undefined without throwing error', () => {
            expect(component.menu).toBeUndefined();
            expect(() => {
                component.ngOnChanges({
                    resetFilters: new SimpleChange(null, true, false)
                });
            }).not.toThrow();
        });
    });

    describe('NumberFilterComponent', () => {
        let component: NumberFilterComponent;

        beforeEach(() => {
            component = new NumberFilterComponent();
        });

        it('should handle reset when menu is undefined without throwing error', () => {
            expect(component.menu).toBeUndefined();
            expect(() => {
                component.ngOnChanges({
                    resetFilters: new SimpleChange(null, true, false)
                });
            }).not.toThrow();
        });
    });

    describe('DateFilterComponent', () => {
        let component: DateFilterComponent;

        beforeEach(() => {
            component = new DateFilterComponent();
        });

        it('should handle reset when menu is undefined without throwing error', () => {
            expect(component.menu).toBeUndefined();
            expect(() => {
                component.ngOnChanges({
                    resetFilters: new SimpleChange(null, true, false)
                });
            }).not.toThrow();
        });
    });

    describe('TagFilterComponent', () => {
        let component: TagFilterComponent;

        beforeEach(() => {
            component = new TagFilterComponent();
        });

        it('should handle reset when menu is undefined without throwing error', () => {
            expect(component.menu).toBeUndefined();
            expect(() => {
                component.ngOnChanges({
                    resetFilters: new SimpleChange(null, true, false)
                });
            }).not.toThrow();
        });
    });
});
