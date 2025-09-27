import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/menu";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/select";
import * as i7 from "@angular/material/core";
import * as i8 from "@angular/material/input";
export class StringFilterComponent {
    constructor() {
        this.resetFilters = null;
        this.filter = new EventEmitter();
        this.filterApplied = false;
        this.stringFilterTypes = [
            { value: 'eq', text: 'Is equal to' },
            { value: 'neq', text: 'Is not equal to' },
            { value: 'contains', text: 'Contains' },
            { value: 'startswith', text: 'Starts with' },
            { value: 'endswith', text: 'Ends with' },
            { value: 'blank', text: 'Is Empty' },
        ];
        this.selection = new FormControl('contains', Validators.required);
        this.value = new FormControl(null, [Validators.required]);
        this.filterParam = '';
        this.invalidValue = false;
    }
    ngOnInit() {
        if (this.initialFilter) {
            this.selection.setValue(this.initialFilter.operator);
            this.filterApplied = true;
            if (this.initialFilter.operator === 'blank') {
                this.filterParam = 'Is Empty';
                this.value.setValue('Is Empty');
                this.value.disable();
            }
            else {
                this.filterParam = this.initialFilter.value;
                this.value.setValue(this.initialFilter.value);
            }
        }
    }
    ngOnChanges(changes) {
        if (changes['resetFilters']?.currentValue) {
            this.reset(false);
        }
    }
    menuOpened() {
        this.valueElement.nativeElement.focus();
    }
    changeSelection() {
        if (this.selection.value === 'blank') {
            this.value.disable();
        }
        else {
            if (this.value.value === 'Is Empty') {
                this.value.setValue('');
            }
            this.value.enable();
        }
    }
    reset(emit) {
        this.invalidValue = false;
        this.selection.setValue('contains');
        this.value.setValue(null);
        this.value.enable();
        this.close(null, emit);
    }
    validate() {
        if (this.value.valid) {
            this.invalidValue = false;
            this.close(this.value.value);
        }
        else if (this.selection.value === 'blank') {
            this.value.setValue('Is Empty');
            this.close('blank');
        }
        else {
            this.invalidValue = true;
        }
    }
    close(value, emit = true) {
        if (emit) {
            this.filter.emit({ operator: this.selection.value, value });
        }
        if (value) {
            this.filterApplied = true;
        }
        else {
            this.filterApplied = false;
        }
        this.filterParam = this.value.value;
        this.menu.closeMenu();
    }
}
StringFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: StringFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StringFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: StringFilterComponent, selector: "mpg-string-filter", inputs: { initialFilter: "initialFilter", resetFilters: "resetFilters" }, outputs: { filter: "filter" }, viewQueries: [{ propertyName: "menu", first: true, predicate: ["menuTrigger"], descendants: true }, { propertyName: "fromElement", first: true, predicate: ["fromElement"], descendants: true }, { propertyName: "valueElement", first: true, predicate: ["valueElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<button class=\"mpg-filter-open-btn mpg-layout-container\" [color]=\"filterApplied ? 'accent': 'none'\" mat-stroked-button type=\"button\" #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n  <span *ngIf=\"!filterApplied\" class=\"mpg-placeholder mpg-font-weight-normal\">Unfiltered</span>\n  <span *ngIf=\"filterApplied\" class=\"mpg-text-truncate\">{{filterParam}}</span>\n  <div class=\"mpg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"mpg-overflow-hidden\">\n  <div class=\"mpg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\" (keydown.shift.tab)=\"$event.stopPropagation()\">\n    <div class=\"mpg-layout-container\">\n      <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\" class=\"mpg-mr-2 mpg-small-stroked-button\">Filter</button>\n      <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset(true)\" class=\"mpg-small-stroked-button\">Reset</button>\n    </div>\n    <div class=\"mpg-layout-container\">\n      <mat-form-field class=\"mpg-w-100 mpg-mt-3\">\n        <mat-select [formControl]=\"selection\" placeholder=\"Logic\" (selectionChange)=\"changeSelection()\">\n          <mat-option class=\"mpg-mat-option\" *ngFor=\"let item of stringFilterTypes\" [value]=\"item.value\">{{item.text}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"mpg-layout-container\">\n      <mat-form-field class=\"mpg-w-100\">\n        <input matInput #valueElement type=\"text\" placeholder=\"Value\" [formControl]=\"value\" (keyup.enter)=\"validate()\">\n      </mat-form-field>\n    </div>\n    <div class=\"mpg-layout-container\">\n      <span *ngIf=\"invalidValue\" class=\"mpg-invalid-error\">Invalid value entered</span>\n    </div>\n  </div>\n</mat-menu>\n", styles: [".mpg-placeholder{opacity:.6}.mpg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.mpg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:white}.mpg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.mpg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mpg-invalid-error{color:#e53935;font-size:12px}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "directive", type: i4.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i6.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i7.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i8.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: StringFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mpg-string-filter', template: "<button class=\"mpg-filter-open-btn mpg-layout-container\" [color]=\"filterApplied ? 'accent': 'none'\" mat-stroked-button type=\"button\" #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n  <span *ngIf=\"!filterApplied\" class=\"mpg-placeholder mpg-font-weight-normal\">Unfiltered</span>\n  <span *ngIf=\"filterApplied\" class=\"mpg-text-truncate\">{{filterParam}}</span>\n  <div class=\"mpg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"mpg-overflow-hidden\">\n  <div class=\"mpg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\" (keydown.shift.tab)=\"$event.stopPropagation()\">\n    <div class=\"mpg-layout-container\">\n      <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\" class=\"mpg-mr-2 mpg-small-stroked-button\">Filter</button>\n      <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset(true)\" class=\"mpg-small-stroked-button\">Reset</button>\n    </div>\n    <div class=\"mpg-layout-container\">\n      <mat-form-field class=\"mpg-w-100 mpg-mt-3\">\n        <mat-select [formControl]=\"selection\" placeholder=\"Logic\" (selectionChange)=\"changeSelection()\">\n          <mat-option class=\"mpg-mat-option\" *ngFor=\"let item of stringFilterTypes\" [value]=\"item.value\">{{item.text}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"mpg-layout-container\">\n      <mat-form-field class=\"mpg-w-100\">\n        <input matInput #valueElement type=\"text\" placeholder=\"Value\" [formControl]=\"value\" (keyup.enter)=\"validate()\">\n      </mat-form-field>\n    </div>\n    <div class=\"mpg-layout-container\">\n      <span *ngIf=\"invalidValue\" class=\"mpg-invalid-error\">Invalid value entered</span>\n    </div>\n  </div>\n</mat-menu>\n", styles: [".mpg-placeholder{opacity:.6}.mpg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.mpg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:white}.mpg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.mpg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mpg-invalid-error{color:#e53935;font-size:12px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { initialFilter: [{
                type: Input
            }], resetFilters: [{
                type: Input
            }], filter: [{
                type: Output
            }], menu: [{
                type: ViewChild,
                args: ['menuTrigger']
            }], fromElement: [{
                type: ViewChild,
                args: ['fromElement']
            }], valueElement: [{
                type: ViewChild,
                args: ['valueElement']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWRhdGEtZ3JpZC9zcmMvbGliL2NvbXBvbmVudHMvc3RyaW5nLWZpbHRlci9zdHJpbmctZmlsdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZGF0YS1ncmlkL3NyYy9saWIvY29tcG9uZW50cy9zdHJpbmctZmlsdGVyL3N0cmluZy1maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztBQVN6RCxNQUFNLE9BQU8scUJBQXFCO0lBc0JoQztRQW5CUyxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNuQixXQUFNLEdBQVEsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNoRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixzQkFBaUIsR0FBRztZQUNsQixFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBQztZQUNsQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFDO1lBQ3ZDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQ3JDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFDO1lBQzFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFB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Q0FBQztTQUMxQjtJQUNILENBQUM7SUFFTyxLQUFLLENBQUMsS0FBb0IsRUFBRSxJQUFJLEdBQUcsSUFBSTtRQUM3QyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDN0Q7UUFDRCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN4QixDQUFDOztrSEE1RlUscUJBQXFCO3NHQUFyQixxQkFBcUIseWRDcEJsQyxpNERBOEJBOzJGRFZhLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxvQkFBb0I7MEVBTXJCLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDSSxNQUFNO3NCQUFmLE1BQU07Z0JBY21CLElBQUk7c0JBQTdCLFNBQVM7dUJBQUMsYUFBYTtnQkFDRSxXQUFXO3NCQUFwQyxTQUFTO3VCQUFDLGFBQWE7Z0JBQ0csWUFBWTtzQkFBdEMsU0FBUzt1QkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdE1lbnVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgR3JpZEZpbHRlckl0ZW1JbnRlcmZhY2UgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9ncmlkLWZpbHRlci1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW1kZy1zdHJpbmctZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0cmluZy1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdHJpbmctZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGluaXRpYWxGaWx0ZXI/OiBHcmlkRmlsdGVySXRlbUludGVyZmFjZTtcbiAgQElucHV0KCkgcmVzZXRGaWx0ZXJzID0gbnVsbDtcbiAgQE91dHB1dCgpIGZpbHRlcjogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGZpbHRlckFwcGxpZWQgPSBmYWxzZTtcbiAgc3RyaW5nRmlsdGVyVHlwZXMgPSBbXG4gICAge3ZhbHVlOiAnZXEnLCB0ZXh0OiAnSXMgZXF1YWwgdG8nfSxcbiAgICB7dmFsdWU6ICduZXEnLCB0ZXh0OiAnSXMgbm90IGVxdWFsIHRvJ30sXG4gICAge3ZhbHVlOiAnY29udGFpbnMnLCB0ZXh0OiAnQ29udGFpbnMnfSxcbiAgICB7dmFsdWU6ICdzdGFydHN3aXRoJywgdGV4dDogJ1N0YXJ0cyB3aXRoJ30sXG4gICAge3ZhbHVlOiAnZW5kc3dpdGgnLCB0ZXh0OiAnRW5kcyB3aXRoJ30sXG4gICAge3ZhbHVlOiAnYmxhbmsnLCB0ZXh0OiAnSXMgRW1wdHknfSxcbiAgXTtcbiAgc2VsZWN0aW9uID0gbmV3IEZvcm1Db250cm9sPG51bGwgfCBzdHJpbmc+KCdjb250YWlucycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICB2YWx1ZSA9IG5ldyBGb3JtQ29udHJvbDxudWxsIHwgc3RyaW5nPihudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pO1xuICBmaWx0ZXJQYXJhbTogc3RyaW5nIHwgbnVsbCA9ICcnO1xuICBpbnZhbGlkVmFsdWUgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgnbWVudVRyaWdnZXInKSBtZW51ITogTWF0TWVudVRyaWdnZXI7XG4gIEBWaWV3Q2hpbGQoJ2Zyb21FbGVtZW50JykgZnJvbUVsZW1lbnQhOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd2YWx1ZUVsZW1lbnQnKSB2YWx1ZUVsZW1lbnQhOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbEZpbHRlcikge1xuICAgICAgdGhpcy5zZWxlY3Rpb24uc2V0VmFsdWUodGhpcy5pbml0aWFsRmlsdGVyLm9wZXJhdG9yKTtcbiAgICAgIHRoaXMuZmlsdGVyQXBwbGllZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5pbml0aWFsRmlsdGVyLm9wZXJhdG9yID09PSAnYmxhbmsnKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyUGFyYW0gPSAnSXMgRW1wdHknO1xuICAgICAgICB0aGlzLnZhbHVlLnNldFZhbHVlKCdJcyBFbXB0eScpO1xuICAgICAgICB0aGlzLnZhbHVlLmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsdGVyUGFyYW0gPSB0aGlzLmluaXRpYWxGaWx0ZXIudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUuc2V0VmFsdWUodGhpcy5pbml0aWFsRmlsdGVyLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ3Jlc2V0RmlsdGVycyddPy5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG1lbnVPcGVuZWQoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZUVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgY2hhbmdlU2VsZWN0aW9uKCk6IHZvaWR7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uLnZhbHVlID09PSAnYmxhbmsnKSB7XG4gICAgICB0aGlzLnZhbHVlLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudmFsdWUudmFsdWUgPT09ICdJcyBFbXB0eScpIHtcbiAgICAgICAgdGhpcy52YWx1ZS5zZXRWYWx1ZSgnJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KGVtaXQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pbnZhbGlkVmFsdWUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGlvbi5zZXRWYWx1ZSgnY29udGFpbnMnKTtcbiAgICB0aGlzLnZhbHVlLnNldFZhbHVlKG51bGwpO1xuICAgIHRoaXMudmFsdWUuZW5hYmxlKCk7XG4gICAgdGhpcy5jbG9zZShudWxsLCBlbWl0KTtcbiAgfVxuXG4gIHZhbGlkYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlLnZhbGlkKSB7XG4gICAgICB0aGlzLmludmFsaWRWYWx1ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jbG9zZSh0aGlzLnZhbHVlLnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uLnZhbHVlID09PSAnYmxhbmsnKSB7XG4gICAgICB0aGlzLnZhbHVlLnNldFZhbHVlKCdJcyBFbXB0eScpO1xuICAgICAgdGhpcy5jbG9zZSgnYmxhbmsnKTtcbiAgICB9ZWxzZSB7XG4gICAgICB0aGlzLmludmFsaWRWYWx1ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCwgZW1pdCA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5maWx0ZXIuZW1pdCh7IG9wZXJhdG9yOiB0aGlzLnNlbGVjdGlvbi52YWx1ZSwgdmFsdWUgfSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5maWx0ZXJBcHBsaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJBcHBsaWVkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyUGFyYW0gPSB0aGlzLnZhbHVlLnZhbHVlO1xuICAgIHRoaXMubWVudS5jbG9zZU1lbnUoKTtcbiAgfVxuXG59XG4iLCI8YnV0dG9uIGNsYXNzPVwiYW1kZy1maWx0ZXItb3Blbi1idG4gYW1kZy1sYXlvdXQtY29udGFpbmVyXCIgW2NvbG9yXT1cImZpbHRlckFwcGxpZWQgPyAnYWNjZW50JzogJ25vbmUnXCIgbWF0LXN0cm9rZWQtYnV0dG9uIHR5cGU9XCJidXR0b25cIiAjbWVudVRyaWdnZXI9XCJtYXRNZW51VHJpZ2dlclwiIFttYXRNZW51VHJpZ2dlckZvcl09XCJudW1iZXJGaWx0ZXJNZW51XCIgKG1lbnVPcGVuZWQpPVwibWVudU9wZW5lZCgpXCI+XG4gIDxzcGFuICpuZ0lmPVwiIWZpbHRlckFwcGxpZWRcIiBjbGFzcz1cImFtZGctcGxhY2Vob2xkZXIgYW1kZy1mb250LXdlaWdodC1ub3JtYWxcIj5VbmZpbHRlcmVkPC9zcGFuPlxuICA8c3BhbiAqbmdJZj1cImZpbHRlckFwcGxpZWRcIiBjbGFzcz1cImFtZGctdGV4dC10cnVuY2F0ZVwiPnt7ZmlsdGVyUGFyYW19fTwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cImFtZGctc2VsZWN0LWFycm93XCI+PC9kaXY+XG48L2J1dHRvbj5cblxuPG1hdC1tZW51ICNudW1iZXJGaWx0ZXJNZW51PVwibWF0TWVudVwiIGNsYXNzPVwiYW1kZy1vdmVyZmxvdy1oaWRkZW5cIj5cbiAgPGRpdiBjbGFzcz1cImFtZGctZmlsdGVyLWNvbnRhaW5lclwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiAoa2V5ZG93bi50YWIpPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgKGtleWRvd24uc2hpZnQudGFiKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJhbWRnLWxheW91dC1jb250YWluZXJcIj5cbiAgICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidmFsaWRhdGUoKVwiIGNsYXNzPVwiYW1kZy1tci0yIGFtZGctc21hbGwtc3Ryb2tlZC1idXR0b25cIj5GaWx0ZXI8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cIndhcm5cIiAoY2xpY2spPVwicmVzZXQodHJ1ZSlcIiBjbGFzcz1cImFtZGctc21hbGwtc3Ryb2tlZC1idXR0b25cIj5SZXNldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbWRnLWxheW91dC1jb250YWluZXJcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImFtZGctdy0xMDAgYW1kZy1tdC0zXCI+XG4gICAgICAgIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJzZWxlY3Rpb25cIiBwbGFjZWhvbGRlcj1cIkxvZ2ljXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJjaGFuZ2VTZWxlY3Rpb24oKVwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uIGNsYXNzPVwiYW1kZy1tYXQtb3B0aW9uXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3RyaW5nRmlsdGVyVHlwZXNcIiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiPnt7aXRlbS50ZXh0fX08L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYW1kZy1sYXlvdXQtY29udGFpbmVyXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJhbWRnLXctMTAwXCI+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCAjdmFsdWVFbGVtZW50IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiIFtmb3JtQ29udHJvbF09XCJ2YWx1ZVwiIChrZXl1cC5lbnRlcik9XCJ2YWxpZGF0ZSgpXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbWRnLWxheW91dC1jb250YWluZXJcIj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiaW52YWxpZFZhbHVlXCIgY2xhc3M9XCJhbWRnLWludmFsaWQtZXJyb3JcIj5JbnZhbGlkIHZhbHVlIGVudGVyZWQ8L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9tYXQtbWVudT5cbiJdfQ==
