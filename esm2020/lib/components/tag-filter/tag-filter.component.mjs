import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/menu";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/divider";
import * as i9 from "@angular/material/chips";
import * as i10 from "@angular/material/input";
export class TagFilterComponent {
    constructor() {
        this.resetFilters = null;
        this.numbersOnly = false;
        this.filter = new EventEmitter();
        this.filterApplied = false;
        this.tagValue = new FormControl('', []);
        this.tagValues = [];
        this.tagValuesApplied = [];
        this.error = '';
        this.maximumTagLimit = 5000;
        this.stringMaxLength = 30;
        this.numberMaxLength = 9;
        this.tagValue.markAsDirty();
        this.tagValue.markAsTouched();
    }
    ngOnInit() {
        if (this.initialFilter && true) {
            const tagValues = this.initialFilter.value.split(',').map(item => item.trim());
            if (tagValues.length <= this.maximumTagLimit) {
                this.tagValues = tagValues;
                this.tagValuesApplied = JSON.parse(JSON.stringify(this.tagValues));
                this.filterApplied = true;
            }
            else {
                console.error(`Only a maximum of ${this.maximumTagLimit} tags can be added`);
            }
        }
    }
    ngOnChanges(changes) {
        if (changes['resetFilters']?.currentValue) {
            this.reset(false);
        }
    }
    menuOpened() {
        this.fromElement.nativeElement.focus();
    }
    validate() {
        if (this.tagValues.length > 0) {
            this.tagValuesApplied = JSON.parse(JSON.stringify(this.tagValues));
            this.filter.emit({ operator: 'eq', value: this.tagValues.join() });
            this.filterApplied = true;
        }
        else {
            this.filterApplied = false;
        }
        this.menu.closeMenu();
    }
    reset(emit = true) {
        this.tagValues = [];
        this.tagValuesApplied = [];
        if (emit) {
            this.filter.emit({ operator: 'eq', value: null });
        }
        this.filterApplied = false;
        this.tagValue.setErrors(null);
        this.tagValue.setValue('');
        this.menu.closeMenu();
    }
    addTagValue(event) {
        event.stopPropagation();
        if (this.tagValues.length < this.maximumTagLimit) {
            let maxLength = this.numberMaxLength;
            if (!this.numbersOnly) {
                maxLength = this.stringMaxLength;
            }
            const { value } = this.tagValue;
            if (value && value.trim()) {
                if (value.length <= maxLength) {
                    if (this.tagValues.indexOf(value) === -1) {
                        this.tagValues.push(value);
                        this.tagValue.setErrors(null);
                        this.tagValue.setValue('');
                    }
                    else {
                        this.tagValue.setErrors({ invalid: true });
                        this.error = 'Value already entered';
                    }
                }
                else {
                    this.tagValue.setErrors({ invalid: true });
                    this.error = `A single value cannot be more than ${maxLength} characters`;
                }
            }
        }
        else {
            this.tagValue.setErrors({ invalid: true });
            this.error = `Only a maximum of ${this.maximumTagLimit} tags can be added`;
        }
    }
    tagValueKeypress(event) {
        if (event.charCode !== 0 && this.numbersOnly) {
            const pattern = /[0-9\ ]/;
            const inputChar = String.fromCharCode(event.charCode);
            if (!pattern.test(inputChar)) {
                // invalid character, prevent input
                event.preventDefault();
            }
        }
    }
    stringPaste(event) {
        let stringList = event.clipboardData?.getData('Text');
        event.preventDefault();
        stringList = stringList?.replace(/	/g, ',');
        stringList = stringList?.replace(/\n/ig, ',');
        stringList = stringList?.replace(/\\t/g, ',');
        stringList = stringList?.replace(/\\n/g, ',');
        stringList = stringList?.replace(/[\r\n]/g, ',');
        let validPaste = true;
        const list = stringList ? stringList?.split(',').filter(Boolean) : []; // remove empty strings
        if (list.length <= this.maximumTagLimit && this.tagValues.length < this.maximumTagLimit &&
            (list.length + this.tagValues.length <= this.maximumTagLimit)) {
            const formattedList = [];
            let error = '';
            list.forEach(item => {
                // Loop start
                item = item.trim();
                if (this.numbersOnly) {
                    if (item.length <= this.numberMaxLength && this.ifNumber(item)) {
                        formattedList.push(parseInt(item, 10).toString());
                    }
                    else {
                        validPaste = false;
                        if (!(item.length <= this.numberMaxLength)) {
                            error = `A single value cannot be more than ${this.numberMaxLength} characters`;
                        }
                        else if (this.ifNumber(item) === false) {
                            error = 'Values cannot contain alphanumeric characters';
                        }
                    }
                }
                else { // string
                    if (item.length <= this.stringMaxLength) {
                        formattedList.push(item);
                    }
                    else {
                        validPaste = false;
                        error = `A single value cannot be more than ${this.stringMaxLength} characters`;
                    }
                }
                // Loop end
            });
            if (validPaste) {
                const allTagValues = [...this.tagValues, ...new Set(formattedList)]; // make sure to remove duplicates before pushing
                this.tagValues = [...new Set(allTagValues)];
                this.tagValue.setErrors(null);
            }
            else {
                this.tagValue.setErrors({ invalid: true });
                this.error = error;
            }
        }
        else {
            this.tagValue.setErrors({ invalid: true });
            this.error = 'Only a maximum of ' + this.maximumTagLimit + ' tags can be added';
        }
    }
    ifNumber(numberArg) {
        return isNaN(numberArg) === false;
    }
}
TagFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: TagFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TagFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: TagFilterComponent, selector: "mpg-tag-filter", inputs: { initialFilter: "initialFilter", resetFilters: "resetFilters", numbersOnly: "numbersOnly" }, outputs: { filter: "filter" }, viewQueries: [{ propertyName: "menu", first: true, predicate: ["menuTrigger"], descendants: true }, { propertyName: "fromElement", first: true, predicate: ["fromElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<button class=\"mpg-filter-open-btn mpg-layout-container\" mat-stroked-button [color]=\"filterApplied ? 'accent': 'none'\" type=\"button\" #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n  <span *ngIf=\"!filterApplied\" class=\"mpg-placeholder mpg-font-weight-normal\">Unfiltered</span>\n  <span *ngIf=\"filterApplied\" class=\"mpg-text-truncate\">{{tagValuesApplied ? tagValuesApplied[0] : null }}</span>\n  <span *ngIf=\"filterApplied && tagValuesApplied.length > 1\" class=\"mpg-additional-selection\">\n      (+{{tagValuesApplied.length - 1}} {{tagValuesApplied.length === 2 ? 'other' : 'others'}})\n    </span>\n  <div class=\"mpg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"mpg-overflow-hidden\">\n  <div class=\"mpg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\" (keydown.shift.tab)=\"$event.stopPropagation()\">\n    <div class=\"mpg-layout-container\">\n      <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\" class=\"mpg-mr-2 mpg-small-stroked-button\">Filter</button>\n      <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset()\" class=\"mpg-small-stroked-button\">Reset</button>\n    </div>\n    <div class=\"mpg-layout-container mpg-mt-2\">\n      <mat-form-field class=\"mpg-tag-input\">\n        <mat-label>Add Tag</mat-label>\n        <input matInput #fromElement type=\"text\" [formControl]=\"tagValue\" (keydown.enter)=\"addTagValue($event);\" (paste)=\"stringPaste($event)\" (keypress)=\"tagValueKeypress($event)\">\n        <mat-error>{{error}}</mat-error>\n      </mat-form-field>\n      <mat-icon class=\"mpg-cursor-pointer\" mat-ripple color=\"primary\" (click)=\"addTagValue($event);\">add</mat-icon>\n    </div>\n    <div class=\"mpg-layout-container\">\n      <mat-divider class=\"mpg-w-100 mt-1\"></mat-divider>\n    </div>\n    <p class=\"mpg-text-center mpg-mt-2 mpg-text-muted\" *ngIf=\"tagValues.length === 0\">No Tags entered</p>\n    <div class=\"mpg-tags-container mpg-p-3\" *ngIf=\"tagValues.length > 0;\">\n      <mat-chip-list>\n        <mat-chip *ngFor=\"let tag of tagValues;let i = index\" [removable]=\"true\" (removed)=\"tagValues.splice(i, 1)\" [selectable]=\"false\">\n          {{tag}} <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n    </div>\n\n  </div>\n</mat-menu>\n", styles: [".mpg-placeholder{opacity:.6}.mpg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.mpg-filter-container .mpg-tags-container{max-height:300px;overflow-y:auto}.mpg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:white}.mpg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.mpg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mpg-tag-input{width:calc(100% - 30px)}.mpg-additional-selection{opacity:.75;font-size:.75em;color:#000000de}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i3.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "directive", type: i5.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { kind: "directive", type: i6.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "directive", type: i7.MatError, selector: "mat-error", inputs: ["id"] }, { kind: "component", type: i7.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i7.MatLabel, selector: "mat-label" }, { kind: "component", type: i8.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i9.MatChipList, selector: "mat-chip-list", inputs: ["role", "aria-describedby", "errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { kind: "directive", type: i9.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "role", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { kind: "directive", type: i9.MatChipRemove, selector: "[matChipRemove]" }, { kind: "directive", type: i10.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: TagFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mpg-tag-filter', template: "<button class=\"mpg-filter-open-btn mpg-layout-container\" mat-stroked-button [color]=\"filterApplied ? 'accent': 'none'\" type=\"button\" #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n  <span *ngIf=\"!filterApplied\" class=\"mpg-placeholder mpg-font-weight-normal\">Unfiltered</span>\n  <span *ngIf=\"filterApplied\" class=\"mpg-text-truncate\">{{tagValuesApplied ? tagValuesApplied[0] : null }}</span>\n  <span *ngIf=\"filterApplied && tagValuesApplied.length > 1\" class=\"mpg-additional-selection\">\n      (+{{tagValuesApplied.length - 1}} {{tagValuesApplied.length === 2 ? 'other' : 'others'}})\n    </span>\n  <div class=\"mpg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"mpg-overflow-hidden\">\n  <div class=\"mpg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\" (keydown.shift.tab)=\"$event.stopPropagation()\">\n    <div class=\"mpg-layout-container\">\n      <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\" class=\"mpg-mr-2 mpg-small-stroked-button\">Filter</button>\n      <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset()\" class=\"mpg-small-stroked-button\">Reset</button>\n    </div>\n    <div class=\"mpg-layout-container mpg-mt-2\">\n      <mat-form-field class=\"mpg-tag-input\">\n        <mat-label>Add Tag</mat-label>\n        <input matInput #fromElement type=\"text\" [formControl]=\"tagValue\" (keydown.enter)=\"addTagValue($event);\" (paste)=\"stringPaste($event)\" (keypress)=\"tagValueKeypress($event)\">\n        <mat-error>{{error}}</mat-error>\n      </mat-form-field>\n      <mat-icon class=\"mpg-cursor-pointer\" mat-ripple color=\"primary\" (click)=\"addTagValue($event);\">add</mat-icon>\n    </div>\n    <div class=\"mpg-layout-container\">\n      <mat-divider class=\"mpg-w-100 mt-1\"></mat-divider>\n    </div>\n    <p class=\"mpg-text-center mpg-mt-2 mpg-text-muted\" *ngIf=\"tagValues.length === 0\">No Tags entered</p>\n    <div class=\"mpg-tags-container mpg-p-3\" *ngIf=\"tagValues.length > 0;\">\n      <mat-chip-list>\n        <mat-chip *ngFor=\"let tag of tagValues;let i = index\" [removable]=\"true\" (removed)=\"tagValues.splice(i, 1)\" [selectable]=\"false\">\n          {{tag}} <mat-icon matChipRemove>cancel</mat-icon>\n        </mat-chip>\n      </mat-chip-list>\n    </div>\n\n  </div>\n</mat-menu>\n", styles: [".mpg-placeholder{opacity:.6}.mpg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.mpg-filter-container .mpg-tags-container{max-height:300px;overflow-y:auto}.mpg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:white}.mpg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.mpg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mpg-tag-input{width:calc(100% - 30px)}.mpg-additional-selection{opacity:.75;font-size:.75em;color:#000000de}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { initialFilter: [{
                type: Input
            }], resetFilters: [{
                type: Input
            }], numbersOnly: [{
                type: Input
            }], filter: [{
                type: Output
            }], menu: [{
                type: ViewChild,
                args: ['menuTrigger']
            }], fromElement: [{
                type: ViewChild,
                args: ['fromElement']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWRhdGEtZ3JpZC9zcmMvbGliL2NvbXBvbmVudHMvdGFnLWZpbHRlci90YWctZmlsdGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZGF0YS1ncmlkL3NyYy9saWIvY29tcG9uZW50cy90YWctZmlsdGVyL3RhZy1maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7QUFTN0MsTUFBTSxPQUFPLGtCQUFrQjtJQWlCN0I7UUFkUyxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFNLEdBQVEsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUdoRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixhQUFRLEdBQUcsSUFBSSxXQUFXLENBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxvQkFBZSxHQUFHLElBQWEsQ0FBQztRQUNoQyxvQkFBZSxHQUFHLEVBQVcsQ0FBQztRQUM5QixvQkFBZSxHQUFHLENBQVUsQ0FBQztRQUczQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFD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bGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdE1lbnVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgR3JpZEZpbHRlckl0ZW1JbnRlcmZhY2UgZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9ncmlkLWZpbHRlci1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW1kZy10YWctZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhZy1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWctZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFnRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGluaXRpYWxGaWx0ZXI/OiBHcmlkRmlsdGVySXRlbUludGVyZmFjZTtcbiAgQElucHV0KCkgcmVzZXRGaWx0ZXJzID0gbnVsbDtcbiAgQElucHV0KCkgbnVtYmVyc09ubHkgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGZpbHRlcjogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoJ21lbnVUcmlnZ2VyJykgbWVudSE6IE1hdE1lbnVUcmlnZ2VyO1xuICBAVmlld0NoaWxkKCdmcm9tRWxlbWVudCcpIGZyb21FbGVtZW50ITogRWxlbWVudFJlZjtcbiAgZmlsdGVyQXBwbGllZCA9IGZhbHNlO1xuICB0YWdWYWx1ZSA9IG5ldyBGb3JtQ29udHJvbDxzdHJpbmc+KCcnLCBbXSk7XG4gIHRhZ1ZhbHVlczogc3RyaW5nW10gPSBbXTtcbiAgdGFnVmFsdWVzQXBwbGllZCA9IFtdO1xuICBlcnJvciA9ICcnO1xuICBtYXhpbXVtVGFnTGltaXQgPSA1MDAwIGFzIGNvbnN0O1xuICBzdHJpbmdNYXhMZW5ndGggPSAzMCBhcyBjb25zdDtcbiAgbnVtYmVyTWF4TGVuZ3RoID0gOSBhcyBjb25zdDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhZ1ZhbHVlLm1hcmtBc0RpcnR5KCk7XG4gICAgdGhpcy50YWdWYWx1ZS5tYXJrQXNUb3VjaGVkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0aWFsRmlsdGVyICYmIHRydWUpIHtcbiAgICAgICAgY29uc3QgdGFnVmFsdWVzID0gdGhpcy5pbml0aWFsRmlsdGVyLnZhbHVlLnNwbGl0KCcsJykubWFwKGl0ZW0gPT4gaXRlbS50cmltKCkpO1xuICAgICAgaWYgKHRhZ1ZhbHVlcy5sZW5ndGggPD0gdGhpcy5tYXhpbXVtVGFnTGltaXQpIHtcbiAgICAgICAgdGhpcy50YWdWYWx1ZXMgPSB0YWdWYWx1ZXM7XG4gICAgICAgIHRoaXMudGFnVmFsdWVzQXBwbGllZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy50YWdWYWx1ZXMpKTtcbiAgICAgICAgdGhpcy5maWx0ZXJBcHBsaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYE9ubHkgYSBtYXhpbXVtIG9mICR7dGhpcy5tYXhpbXVtVGFnTGltaXR9IHRhZ3MgY2FuIGJlIGFkZGVkYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydyZXNldEZpbHRlcnMnXT8uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBtZW51T3BlbmVkKCk6IHZvaWQge1xuICAgIHRoaXMuZnJvbUVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgdmFsaWRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFnVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudGFnVmFsdWVzQXBwbGllZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy50YWdWYWx1ZXMpKTtcbiAgICAgIHRoaXMuZmlsdGVyLmVtaXQoeyBvcGVyYXRvcjogJ2VxJywgdmFsdWU6IHRoaXMudGFnVmFsdWVzLmpvaW4oKSB9KTtcbiAgICAgIHRoaXMuZmlsdGVyQXBwbGllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyQXBwbGllZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLm1lbnUuY2xvc2VNZW51KCk7XG4gIH1cblxuICByZXNldChlbWl0ID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMudGFnVmFsdWVzID0gW107XG4gICAgdGhpcy50YWdWYWx1ZXNBcHBsaWVkID0gW107XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMuZmlsdGVyLmVtaXQoeyBvcGVyYXRvcjogJ2VxJywgdmFsdWU6IG51bGwgfSk7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyQXBwbGllZCA9IGZhbHNlO1xuICAgIHRoaXMudGFnVmFsdWUuc2V0RXJyb3JzKG51bGwpO1xuICAgIHRoaXMudGFnVmFsdWUuc2V0VmFsdWUoJycpO1xuICAgIHRoaXMubWVudS5jbG9zZU1lbnUoKTtcbiAgfVxuXG4gIGFkZFRhZ1ZhbHVlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnRhZ1ZhbHVlcy5sZW5ndGggPCB0aGlzLm1heGltdW1UYWdMaW1pdCkge1xuICAgICAgbGV0IG1heExlbmd0aDogbnVtYmVyID0gdGhpcy5udW1iZXJNYXhMZW5ndGg7XG4gICAgICBpZiAoIXRoaXMubnVtYmVyc09ubHkpIHtcbiAgICAgICAgbWF4TGVuZ3RoID0gdGhpcy5zdHJpbmdNYXhMZW5ndGg7XG4gICAgICB9XG4gICAgICBjb25zdCB7dmFsdWV9ID0gdGhpcy50YWdWYWx1ZTtcbiAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50cmltKCkpIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8PSBtYXhMZW5ndGgpIHtcbiAgICAgICAgICBpZiAodGhpcy50YWdWYWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRhZ1ZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudGFnVmFsdWUuc2V0RXJyb3JzKG51bGwpO1xuICAgICAgICAgICAgdGhpcy50YWdWYWx1ZS5zZXRWYWx1ZSgnJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFnVmFsdWUuc2V0RXJyb3JzKHtpbnZhbGlkOiB0cnVlfSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gJ1ZhbHVlIGFscmVhZHkgZW50ZXJlZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudGFnVmFsdWUuc2V0RXJyb3JzKHtpbnZhbGlkOiB0cnVlfSk7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IGBBIHNpbmdsZSB2YWx1ZSBjYW5ub3QgYmUgbW9yZSB0aGFuICR7bWF4TGVuZ3RofSBjaGFyYWN0ZXJzYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhZ1ZhbHVlLnNldEVycm9ycyh7aW52YWxpZDogdHJ1ZX0pO1xuICAgICAgdGhpcy5lcnJvciA9IGBPbmx5IGEgbWF4aW11bSBvZiAke3RoaXMubWF4aW11bVRhZ0xpbWl0fSB0YWdzIGNhbiBiZSBhZGRlZGA7XG4gICAgfVxuICB9XG5cbiAgdGFnVmFsdWVLZXlwcmVzcyhldmVudDogYW55KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmNoYXJDb2RlICE9PSAwICYmIHRoaXMubnVtYmVyc09ubHkpIHtcbiAgICAgIGNvbnN0IHBhdHRlcm4gPSAvWzAtOVxcIF0vO1xuICAgICAgY29uc3QgaW5wdXRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5jaGFyQ29kZSk7XG5cbiAgICAgIGlmICghcGF0dGVybi50ZXN0KGlucHV0Q2hhcikpIHtcbiAgICAgICAgLy8gaW52YWxpZCBjaGFyYWN0ZXIsIHByZXZlbnQgaW5wdXRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdHJpbmdQYXN0ZShldmVudDogQ2xpcGJvYXJkRXZlbnQpOiB2b2lkIHtcblxuICAgIGxldCBzdHJpbmdMaXN0ID0gZXZlbnQuY2xpcGJvYXJkRGF0YT8uZ2V0RGF0YSgnVGV4dCcpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzdHJpbmdMaXN0ID0gc3RyaW5nTGlzdD8ucmVwbGFjZSgvXHQvZywgJywnKTtcbiAgICBzdHJpbmdMaXN0ID0gc3RyaW5nTGlzdD8ucmVwbGFjZSgvXFxuL2lnLCAnLCcpO1xuICAgIHN0cmluZ0xpc3QgPSBzdHJpbmdMaXN0Py5yZXBsYWNlKC9cXFxcdC9nLCAnLCcpO1xuICAgIHN0cmluZ0xpc3QgPSBzdHJpbmdMaXN0Py5yZXBsYWNlKC9cXFxcbi9nLCAnLCcpO1xuICAgIHN0cmluZ0xpc3QgPSBzdHJpbmdMaXN0Py5yZXBsYWNlKC9bXFxyXFxuXS9nLCAnLCcpO1xuXG4gICAgbGV0IHZhbGlkUGFzdGUgPSB0cnVlO1xuICAgIGNvbnN0IGxpc3QgPSBzdHJpbmdMaXN0ID8gc3RyaW5nTGlzdD8uc3BsaXQoJywnKS5maWx0ZXIoQm9vbGVhbikgOiBbXTsgLy8gcmVtb3ZlIGVtcHR5IHN0cmluZ3NcbiAgICBpZiAobGlzdC5sZW5ndGggPD0gdGhpcy5tYXhpbXVtVGFnTGltaXQgJiYgdGhpcy50YWdWYWx1ZXMubGVuZ3RoIDwgdGhpcy5tYXhpbXVtVGFnTGltaXQgJiZcbiAgICAgICAgIChsaXN0Lmxlbmd0aCArIHRoaXMudGFnVmFsdWVzLmxlbmd0aCA8PSB0aGlzLm1heGltdW1UYWdMaW1pdCkpIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZExpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgZXJyb3IgPSAnJztcbiAgICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IHtcblxuICAgICAgICAvLyBMb29wIHN0YXJ0XG4gICAgICAgIGl0ZW0gPSBpdGVtLnRyaW0oKTtcbiAgICAgICAgaWYgKHRoaXMubnVtYmVyc09ubHkpIHtcbiAgICAgICAgICBpZiAoaXRlbS5sZW5ndGggPD0gdGhpcy5udW1iZXJNYXhMZW5ndGggJiYgdGhpcy5pZk51bWJlcihpdGVtKSkge1xuICAgICAgICAgICAgZm9ybWF0dGVkTGlzdC5wdXNoKHBhcnNlSW50KGl0ZW0sIDEwKS50b1N0cmluZygpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRQYXN0ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoIShpdGVtLmxlbmd0aCA8PSB0aGlzLm51bWJlck1heExlbmd0aCkpIHtcbiAgICAgICAgICAgICAgZXJyb3IgPSBgQSBzaW5nbGUgdmFsdWUgY2Fubm90IGJlIG1vcmUgdGhhbiAke3RoaXMubnVtYmVyTWF4TGVuZ3RofSBjaGFyYWN0ZXJzYDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZk51bWJlcihpdGVtKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgZXJyb3IgPSAnVmFsdWVzIGNhbm5vdCBjb250YWluIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIHN0cmluZ1xuICAgICAgICAgIGlmIChpdGVtLmxlbmd0aCA8PSB0aGlzLnN0cmluZ01heExlbmd0aCkge1xuICAgICAgICAgICAgZm9ybWF0dGVkTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZFBhc3RlID0gZmFsc2U7XG4gICAgICAgICAgICBlcnJvciA9IGBBIHNpbmdsZSB2YWx1ZSBjYW5ub3QgYmUgbW9yZSB0aGFuICR7dGhpcy5zdHJpbmdNYXhMZW5ndGh9IGNoYXJhY3RlcnNgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgLy8gTG9vcCBlbmRcblxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWxpZFBhc3RlKSB7XG4gICAgICAgIGNvbnN0IGFsbFRhZ1ZhbHVlcyA9IFsuLi50aGlzLnRhZ1ZhbHVlcywgLi4ubmV3IFNldChmb3JtYXR0ZWRMaXN0KV07IC8vIG1ha2Ugc3VyZSB0byByZW1vdmUgZHVwbGljYXRlcyBiZWZvcmUgcHVzaGluZ1xuICAgICAgICB0aGlzLnRhZ1ZhbHVlcyA9IFsuLi5uZXcgU2V0KGFsbFRhZ1ZhbHVlcyldO1xuICAgICAgICB0aGlzLnRhZ1ZhbHVlLnNldEVycm9ycyhudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFnVmFsdWUuc2V0RXJyb3JzKHtpbnZhbGlkOiB0cnVlfSk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWdWYWx1ZS5zZXRFcnJvcnMoe2ludmFsaWQ6IHRydWV9KTtcbiAgICAgIHRoaXMuZXJyb3IgPSAnT25seSBhIG1heGltdW0gb2YgJyArIHRoaXMubWF4aW11bVRhZ0xpbWl0ICsgJyB0YWdzIGNhbiBiZSBhZGRlZCc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpZk51bWJlcihudW1iZXJBcmc6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc05hTihudW1iZXJBcmcpID09PSBmYWxzZTtcbiAgfVxuXG59XG4iLCI8YnV0dG9uIGNsYXNzPVwiYW1kZy1maWx0ZXItb3Blbi1idG4gYW1kZy1sYXlvdXQtY29udGFpbmVyXCIgbWF0LXN0cm9rZWQtYnV0dG9uIFtjb2xvcl09XCJmaWx0ZXJBcHBsaWVkID8gJ2FjY2VudCc6ICdub25lJ1wiIHR5cGU9XCJidXR0b25cIiAjbWVudVRyaWdnZXI9XCJtYXRNZW51VHJpZ2dlclwiIFttYXRNZW51VHJpZ2dlckZvcl09XCJudW1iZXJGaWx0ZXJNZW51XCIgKG1lbnVPcGVuZWQpPVwibWVudU9wZW5lZCgpXCI+XG4gIDxzcGFuICpuZ0lmPVwiIWZpbHRlckFwcGxpZWRcIiBjbGFzcz1cImFtZGctcGxhY2Vob2xkZXIgYW1kZy1mb250LXdlaWdodC1ub3JtYWxcIj5VbmZpbHRlcmVkPC9zcGFuPlxuICA8c3BhbiAqbmdJZj1cImZpbHRlckFwcGxpZWRcIiBjbGFzcz1cImFtZGctdGV4dC10cnVuY2F0ZVwiPnt7dGFnVmFsdWVzQXBwbGllZCA/IHRhZ1ZhbHVlc0FwcGxpZWRbMF0gOiBudWxsIH19PC9zcGFuPlxuICA8c3BhbiAqbmdJZj1cImZpbHRlckFwcGxpZWQgJiYgdGFnVmFsdWVzQXBwbGllZC5sZW5ndGggPiAxXCIgY2xhc3M9XCJhbWRnLWFkZGl0aW9uYWwtc2VsZWN0aW9uXCI+XG4gICAgICAoK3t7dGFnVmFsdWVzQXBwbGllZC5sZW5ndGggLSAxfX0ge3t0YWdWYWx1ZXNBcHBsaWVkLmxlbmd0aCA9PT0gMiA/ICdvdGhlcicgOiAnb3RoZXJzJ319KVxuICAgIDwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cImFtZGctc2VsZWN0LWFycm93XCI+PC9kaXY+XG48L2J1dHRvbj5cblxuPG1hdC1tZW51ICNudW1iZXJGaWx0ZXJNZW51PVwibWF0TWVudVwiIGNsYXNzPVwiYW1kZy1vdmVyZmxvdy1oaWRkZW5cIj5cbiAgPGRpdiBjbGFzcz1cImFtZGctZmlsdGVyLWNvbnRhaW5lclwiIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIiAoa2V5ZG93bi50YWIpPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCIgKGtleWRvd24uc2hpZnQudGFiKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJhbWRnLWxheW91dC1jb250YWluZXJcIj5cbiAgICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwidmFsaWRhdGUoKVwiIGNsYXNzPVwiYW1kZy1tci0yIGFtZGctc21hbGwtc3Ryb2tlZC1idXR0b25cIj5GaWx0ZXI8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cIndhcm5cIiAoY2xpY2spPVwicmVzZXQoKVwiIGNsYXNzPVwiYW1kZy1zbWFsbC1zdHJva2VkLWJ1dHRvblwiPlJlc2V0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFtZGctbGF5b3V0LWNvbnRhaW5lciBhbWRnLW10LTJcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImFtZGctdGFnLWlucHV0XCI+XG4gICAgICAgIDxtYXQtbGFiZWw+QWRkIFRhZzwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgI2Zyb21FbGVtZW50IHR5cGU9XCJ0ZXh0XCIgW2Zvcm1Db250cm9sXT1cInRhZ1ZhbHVlXCIgKGtleWRvd24uZW50ZXIpPVwiYWRkVGFnVmFsdWUoJGV2ZW50KTtcIiAocGFzdGUpPVwic3RyaW5nUGFzdGUoJGV2ZW50KVwiIChrZXlwcmVzcyk9XCJ0YWdWYWx1ZUtleXByZXNzKCRldmVudClcIj5cbiAgICAgICAgPG1hdC1lcnJvcj57e2Vycm9yfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJhbWRnLWN1cnNvci1wb2ludGVyXCIgbWF0LXJpcHBsZSBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkVGFnVmFsdWUoJGV2ZW50KTtcIj5hZGQ8L21hdC1pY29uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbWRnLWxheW91dC1jb250YWluZXJcIj5cbiAgICAgIDxtYXQtZGl2aWRlciBjbGFzcz1cImFtZGctdy0xMDAgbXQtMVwiPjwvbWF0LWRpdmlkZXI+XG4gICAgPC9kaXY+XG4gICAgPHAgY2xhc3M9XCJhbWRnLXRleHQtY2VudGVyIGFtZGctbXQtMiBhbWRnLXRleHQtbXV0ZWRcIiAqbmdJZj1cInRhZ1ZhbHVlcy5sZW5ndGggPT09IDBcIj5ObyBUYWdzIGVudGVyZWQ8L3A+XG4gICAgPGRpdiBjbGFzcz1cImFtZGctdGFncy1jb250YWluZXIgYW1kZy1wLTNcIiAqbmdJZj1cInRhZ1ZhbHVlcy5sZW5ndGggPiAwO1wiPlxuICAgICAgPG1hdC1jaGlwLWxpc3Q+XG4gICAgICAgIDxtYXQtY2hpcCAqbmdGb3I9XCJsZXQgdGFnIG9mIHRhZ1ZhbHVlcztsZXQgaSA9IGluZGV4XCIgW3JlbW92YWJsZV09XCJ0cnVlXCIgKHJlbW92ZWQpPVwidGFnVmFsdWVzLnNwbGljZShpLCAxKVwiIFtzZWxlY3RhYmxlXT1cImZhbHNlXCI+XG4gICAgICAgICAge3t0YWd9fSA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZT5jYW5jZWw8L21hdC1pY29uPlxuICAgICAgICA8L21hdC1jaGlwPlxuICAgICAgPC9tYXQtY2hpcC1saXN0PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC9tYXQtbWVudT5cbiJdfQ==
