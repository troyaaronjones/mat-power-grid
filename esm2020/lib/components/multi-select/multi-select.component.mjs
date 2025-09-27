import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../grids/grid.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/material/input";
export class MultiSelectComponent {
    constructor(gridService) {
        this.gridService = gridService;
        this.filter = new EventEmitter();
        this.resetFilters = null;
        this.filterConfig = {
            selectionMode: null,
            source: null,
            url: null,
            optionsObject: [],
            key: null,
            value: null,
            stringList: null
        };
        this.selection = new FormControl(null);
        this.selectionValuesApplied = [];
        this.selectionList = [];
        this.allSelected = false;
        this.searchFilter = '';
        this.multiple = true;
        this.filterApplied = false;
    }
    ngOnInit() {
        this.multiple = this.filterConfig.selectionMode === 'multiple' ? true : false;
        if (this.filterConfig.source === 'external') {
            this.gridService.getAny(this.filterConfig.url).subscribe(data => {
                if (data.statusCode === 200 || data.success) {
                    const { key, value } = this.filterConfig;
                    this.selectionList = data.payload.map((item) => {
                        return { text: item[key], value: item[value], hide: false };
                    });
                    this.setInitialFilters();
                }
                else {
                    console.log(`'${this.filterConfig.url}' failed`);
                }
            });
        }
        else { // internal
            this.selectionList = this.filterConfig.optionsObject.map((item) => ({ ...item, hide: false }));
            this.setInitialFilters();
        }
    }
    ngOnChanges(changes) {
        if (changes['resetFilters']?.currentValue) {
            this.reset(false);
        }
    }
    setInitialFilters() {
        if (this.initialFilter) {
            if (this.multiple && typeof this.initialFilter.value !== 'number') {
                const values = this.initialFilter.value.split(',');
                const filterValues = [];
                values.forEach((val) => {
                    filterValues.push(...this.selectionList.filter(selection => selection.value === val.trim()));
                });
                this.selection.setValue(filterValues);
                this.selectionValuesApplied = JSON.parse(JSON.stringify(values));
            }
            else {
                const i = this.selectionList.findIndex(selection => selection.value === this.initialFilter?.value);
                if (i !== -1) {
                    this.filterApplied = true;
                    this.selection.setValue(this.selectionList[i]);
                    this.selectionValuesApplied = [this.selectionList[i].text];
                }
            }
        }
    }
    menuOpened() {
        this.fromElement.nativeElement.focus();
    }
    selectionChange() {
        if (this.selection.value?.length === this.selectionList.length) {
            this.allSelected = true;
        }
        else {
            this.allSelected = false;
        }
        if (this.multiple === false) {
            const { text, value } = this.selection.value;
            this.selectionValuesApplied = [text];
            this.filter.emit({ operator: 'eq', value });
            this.filterApplied = true;
            this.mySelect.close();
        }
    }
    close() {
        const texts = this.selection.value?.map((val) => val.text);
        const values = this.selection.value?.map((val) => val.value);
        this.selectionValuesApplied = JSON.parse(JSON.stringify(texts));
        const value = values?.toString();
        if (value) {
            this.filter.emit({ operator: 'eq', value });
            this.filterApplied = true;
        }
        this.mySelect.close();
    }
    toggle() {
        this.searchFilter = '';
        this.changeSearch();
        this.allSelected = !this.allSelected;
        if (this.allSelected) {
            this.selection.setValue(this.selectionList);
        }
        else {
            this.selection.setValue([]);
        }
    }
    reset(emit = true) {
        this.selectionValuesApplied = [];
        if (this.multiple) {
            this.selection.setValue([]);
        }
        else {
            this.selection.setValue(null);
        }
        if (emit) {
            this.filter.emit({ operator: 'eq', value: null });
        }
        this.filterApplied = false;
        this.mySelect.close();
    }
    changeSearch() {
        this.selectionList.forEach((value, i) => {
            value.hide = !value.text.toLowerCase().includes(this.searchFilter.toLowerCase());
        });
    }
    searchFilterKeydown(event) {
        // prevent default behavior of selecting an option when the user filters the options with space being added
        if (event.code === 'Space') {
            event.stopPropagation();
        }
    }
}
MultiSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MultiSelectComponent, deps: [{ token: i1.GridService }], target: i0.ɵɵFactoryTarget.Component });
MultiSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: MultiSelectComponent, selector: "mpg-multi-select", inputs: { initialFilter: "initialFilter", resetFilters: "resetFilters", filterConfig: "filterConfig" }, outputs: { filter: "filter" }, viewQueries: [{ propertyName: "mySelect", first: true, predicate: ["mySelect"], descendants: true }, { propertyName: "fromElement", first: true, predicate: ["fromElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<mat-select\n    class=\"mpg-modified-mat-select\"\n    placeholder=\"Unfiltered\"\n    #mySelect\n    [formControl]=\"selection\"\n    [multiple]=\"multiple\"\n    xPosition=\"after\"\n    (selectionChange)=\"selectionChange()\"\n    (opened)=\"menuOpened()\"\n    [disableOptionCentering]=\"true\"\n    panelClass=\"mpg-custom-select-position\">\n  <mat-select-trigger class=\"mpg-layout-container mpg-p-0\">\n    <span *ngIf=\"selectionValuesApplied.length === 0\" class=\"mat-select-placeholder\">Unfiltered</span>\n    <a mat-button disableRipple color=\"accent\" class=\"mpg-filter-value mpg-text-truncate\" [ngClass]=\"{'grid-filter-applied-color mpg-font-weight-bold': filterApplied}\">{{selectionValuesApplied[0]}}</a>\n    <span *ngIf=\"selectionValuesApplied.length > 1\" class=\"mpg-additional-selection\">\n        (+{{selectionValuesApplied.length - 1}} {{selectionValuesApplied.length === 2 ? 'other' : 'others'}})\n      </span>\n  </mat-select-trigger>\n  <div class=\"mpg-layout-container mpg-mt-2\">\n    <div>\n      <button *ngIf=\"multiple\" mat-stroked-button type=\"button\" color=\"primary\" (click)=\"close()\" class=\"mpg-small-stroked-button mpg-mr-2\">Filter</button>\n      <button *ngIf=\"multiple\" mat-stroked-button type=\"button\" color=\"accent\" (click)=\"toggle()\" class=\"mpg-small-stroked-button\">Select {{allSelected ? 'None': 'All'}}</button>\n    </div>\n\n    <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset()\" class=\"mpg-small-stroked-button\">Reset</button>\n  </div>\n  <div class=\"mpg-layout-container mpg-mt-2\">\n    <mat-form-field class=\"mpg-w-100\">\n      <input id=\"mpg-multi-select-search\" matInput #fromElement placeholder=\"Search...\" [(ngModel)]=\"searchFilter\" (ngModelChange)=\"changeSearch()\" (keydown)=\"searchFilterKeydown($event)\"/>\n      <button id=\"mpg-multi-select-search-close\" mat-button *ngIf=\"searchFilter\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchFilter='';changeSearch()  \">\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n  <div id=\"mpg-list-container\" >\n    <mat-option class=\"mpg-mat-option\" *ngFor=\"let item of selectionList\" [value]=\"item\" [ngClass]=\"{'mpg-d-none': item.hide}\">{{item.text}}</mat-option>\n  </div>\n</mat-select>\n", styles: [".mpg-filter-value{padding:0;display:inline;min-width:auto;font-size:12px;line-height:normal}.mpg-filter-value:hover{text-decoration:none!important}.mpg-modified-mat-select{border:1px solid rgba(118,118,118,.3);border-radius:4px;padding:0 4px;height:28px;line-height:28px!important;background:white;box-sizing:border-box}.mpg-additional-selection{opacity:.75;font-size:.75em}#mpg-list-container{max-height:160px;overflow-y:scroll}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i4.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i6.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i6.MatSuffix, selector: "[matSuffix]" }, { kind: "component", type: i7.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "directive", type: i7.MatSelectTrigger, selector: "mat-select-trigger" }, { kind: "component", type: i8.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i9.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: MultiSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mpg-multi-select', template: "<mat-select\n    class=\"mpg-modified-mat-select\"\n    placeholder=\"Unfiltered\"\n    #mySelect\n    [formControl]=\"selection\"\n    [multiple]=\"multiple\"\n    xPosition=\"after\"\n    (selectionChange)=\"selectionChange()\"\n    (opened)=\"menuOpened()\"\n    [disableOptionCentering]=\"true\"\n    panelClass=\"mpg-custom-select-position\">\n  <mat-select-trigger class=\"mpg-layout-container mpg-p-0\">\n    <span *ngIf=\"selectionValuesApplied.length === 0\" class=\"mat-select-placeholder\">Unfiltered</span>\n    <a mat-button disableRipple color=\"accent\" class=\"mpg-filter-value mpg-text-truncate\" [ngClass]=\"{'grid-filter-applied-color mpg-font-weight-bold': filterApplied}\">{{selectionValuesApplied[0]}}</a>\n    <span *ngIf=\"selectionValuesApplied.length > 1\" class=\"mpg-additional-selection\">\n        (+{{selectionValuesApplied.length - 1}} {{selectionValuesApplied.length === 2 ? 'other' : 'others'}})\n      </span>\n  </mat-select-trigger>\n  <div class=\"mpg-layout-container mpg-mt-2\">\n    <div>\n      <button *ngIf=\"multiple\" mat-stroked-button type=\"button\" color=\"primary\" (click)=\"close()\" class=\"mpg-small-stroked-button mpg-mr-2\">Filter</button>\n      <button *ngIf=\"multiple\" mat-stroked-button type=\"button\" color=\"accent\" (click)=\"toggle()\" class=\"mpg-small-stroked-button\">Select {{allSelected ? 'None': 'All'}}</button>\n    </div>\n\n    <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset()\" class=\"mpg-small-stroked-button\">Reset</button>\n  </div>\n  <div class=\"mpg-layout-container mpg-mt-2\">\n    <mat-form-field class=\"mpg-w-100\">\n      <input id=\"mpg-multi-select-search\" matInput #fromElement placeholder=\"Search...\" [(ngModel)]=\"searchFilter\" (ngModelChange)=\"changeSearch()\" (keydown)=\"searchFilterKeydown($event)\"/>\n      <button id=\"mpg-multi-select-search-close\" mat-button *ngIf=\"searchFilter\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchFilter='';changeSearch()  \">\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n  <div id=\"mpg-list-container\" >\n    <mat-option class=\"mpg-mat-option\" *ngFor=\"let item of selectionList\" [value]=\"item\" [ngClass]=\"{'mpg-d-none': item.hide}\">{{item.text}}</mat-option>\n  </div>\n</mat-select>\n", styles: [".mpg-filter-value{padding:0;display:inline;min-width:auto;font-size:12px;line-height:normal}.mpg-filter-value:hover{text-decoration:none!important}.mpg-modified-mat-select{border:1px solid rgba(118,118,118,.3);border-radius:4px;padding:0 4px;height:28px;line-height:28px!important;background:white;box-sizing:border-box}.mpg-additional-selection{opacity:.75;font-size:.75em}#mpg-list-container{max-height:160px;overflow-y:scroll}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.GridService }]; }, propDecorators: { filter: [{
                type: Output
            }], initialFilter: [{
                type: Input
            }], resetFilters: [{
                type: Input
            }], filterConfig: [{
                type: Input
            }], mySelect: [{
                type: ViewChild,
                args: ['mySelect']
            }], fromElement: [{
                type: ViewChild,
                args: ['fromElement']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZGF0YS1ncmlkL3NyYy9saWIvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZGF0YS1ncmlkL3NyYy9saWIvY29tcG9uZW50cy9tdWx0aS1zZWxlY3QvbXVsdGktc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFVN0MsTUFBTSxPQUFPLG9CQUFvQjtJQXdCL0IsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUF0QmxDLFdBQU0sR0FBUSxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXZDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVE7WUFDM0IsYUFBYSxFQUFFLElBQUk7WUFDbkIsTUFBTSxFQUFFLElBQUk7WUFDWixHQUFHLEVBQUUsSUFBSTtZQUNULGFBQWEsRUFBRSxFQUFFO1lBQ2pCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsS0FBSyxFQUFFLElBQUk7WUFDWCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDO1FBSUYsY0FBUyxHQUFHLElBQUksV0FBVyxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLDJCQUFzQixHQUFVLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUMxQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixp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QUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBVWlCLFFBQVE7c0JBQTlCLFNBQVM7dUJBQUMsVUFBVTtnQkFDSyxXQUFXO3NCQUFwQyxTQUFTO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0U2VsZWN0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NlbGVjdFwiO1xuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9ncmlkcy9ncmlkLnNlcnZpY2UnO1xuaW1wb3J0IEdyaWRGaWx0ZXJJdGVtSW50ZXJmYWNlIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZ3JpZC1maWx0ZXItaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FtZGctbXVsdGktc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL211bHRpLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL211bHRpLXNlbGVjdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE11bHRpU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBPdXRwdXQoKSBmaWx0ZXI6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBpbml0aWFsRmlsdGVyPzogR3JpZEZpbHRlckl0ZW1JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIHJlc2V0RmlsdGVycyA9IG51bGw7XG4gIEBJbnB1dCgpIGZpbHRlckNvbmZpZzogYW55ID0ge1xuICAgIHNlbGVjdGlvbk1vZGU6IG51bGwsXG4gICAgc291cmNlOiBudWxsLFxuICAgIHVybDogbnVsbCxcbiAgICBvcHRpb25zT2JqZWN0OiBbXSxcbiAgICBrZXk6IG51bGwsXG4gICAgdmFsdWU6IG51bGwsXG4gICAgc3RyaW5nTGlzdDogbnVsbFxuICB9O1xuXG4gIEBWaWV3Q2hpbGQoJ215U2VsZWN0JykgbXlTZWxlY3QhOiBNYXRTZWxlY3Q7XG4gIEBWaWV3Q2hpbGQoJ2Zyb21FbGVtZW50JykgZnJvbUVsZW1lbnQhOiBFbGVtZW50UmVmO1xuICBzZWxlY3Rpb24gPSBuZXcgRm9ybUNvbnRyb2w8YW55PihudWxsKTtcbiAgc2VsZWN0aW9uVmFsdWVzQXBwbGllZDogYW55W10gPSBbXTtcbiAgc2VsZWN0aW9uTGlzdDogYW55W10gPSBbXTtcbiAgYWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgc2VhcmNoRmlsdGVyID0gJyc7XG4gIG11bHRpcGxlID0gdHJ1ZTtcbiAgZmlsdGVyQXBwbGllZCA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRTZXJ2aWNlOiBHcmlkU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aXBsZSA9IHRoaXMuZmlsdGVyQ29uZmlnLnNlbGVjdGlvbk1vZGUgPT09ICdtdWx0aXBsZScgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBpZiAodGhpcy5maWx0ZXJDb25maWcuc291cmNlID09PSAnZXh0ZXJuYWwnKSB7XG4gICAgICB0aGlzLmdyaWRTZXJ2aWNlLmdldEFueSh0aGlzLmZpbHRlckNvbmZpZy51cmwpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzQ29kZSA9PT0gMjAwIHx8IGRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IHtrZXksIHZhbHVlfSA9IHRoaXMuZmlsdGVyQ29uZmlnO1xuICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTGlzdCA9IGRhdGEucGF5bG9hZC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHt0ZXh0IDogaXRlbVtrZXldLCB2YWx1ZTogaXRlbVt2YWx1ZV0sIGhpZGU6IGZhbHNlfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNldEluaXRpYWxGaWx0ZXJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYCcke3RoaXMuZmlsdGVyQ29uZmlnLnVybH0nIGZhaWxlZGApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgeyAvLyBpbnRlcm5hbFxuICAgICAgdGhpcy5zZWxlY3Rpb25MaXN0ID0gdGhpcy5maWx0ZXJDb25maWcub3B0aW9uc09iamVjdC5tYXAoKGl0ZW06IGFueSkgPT4gKHsuLi5pdGVtLCBoaWRlOiBmYWxzZX0pKTtcbiAgICAgIHRoaXMuc2V0SW5pdGlhbEZpbHRlcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ3Jlc2V0RmlsdGVycyddPy5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0SW5pdGlhbEZpbHRlcnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbEZpbHRlcikge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdHlwZW9mIHRoaXMuaW5pdGlhbEZpbHRlci52YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5pbml0aWFsRmlsdGVyLnZhbHVlLnNwbGl0KCcsJyk7XG4gICAgICAgIGNvbnN0IGZpbHRlclZhbHVlczogYW55W10gPSBbXTtcbiAgICAgICAgdmFsdWVzLmZvckVhY2goKHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgZmlsdGVyVmFsdWVzLnB1c2goLi4udGhpcy5zZWxlY3Rpb25MaXN0LmZpbHRlcihzZWxlY3Rpb24gPT4gc2VsZWN0aW9uLnZhbHVlID09PSB2YWwudHJpbSgpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZXRWYWx1ZShmaWx0ZXJWYWx1ZXMpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblZhbHVlc0FwcGxpZWQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuc2VsZWN0aW9uTGlzdC5maW5kSW5kZXgoc2VsZWN0aW9uID0+IHNlbGVjdGlvbi52YWx1ZSA9PT0gdGhpcy5pbml0aWFsRmlsdGVyPy52YWx1ZSk7XG4gICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuZmlsdGVyQXBwbGllZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc2V0VmFsdWUodGhpcy5zZWxlY3Rpb25MaXN0W2ldKTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvblZhbHVlc0FwcGxpZWQgPSBbdGhpcy5zZWxlY3Rpb25MaXN0W2ldLnRleHRdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbWVudU9wZW5lZCgpOiB2b2lkIHtcbiAgICB0aGlzLmZyb21FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHNlbGVjdGlvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24udmFsdWU/Lmxlbmd0aCA9PT0gdGhpcy5zZWxlY3Rpb25MaXN0Lmxlbmd0aCkge1xuICAgICAgdGhpcy5hbGxTZWxlY3RlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB7dGV4dCwgdmFsdWV9ID0gdGhpcy5zZWxlY3Rpb24udmFsdWU7XG4gICAgICB0aGlzLnNlbGVjdGlvblZhbHVlc0FwcGxpZWQgPSBbdGV4dF07XG4gICAgICB0aGlzLmZpbHRlci5lbWl0KHtvcGVyYXRvcjogJ2VxJywgdmFsdWV9KTtcbiAgICAgIHRoaXMuZmlsdGVyQXBwbGllZCA9IHRydWU7XG4gICAgICB0aGlzLm15U2VsZWN0LmNsb3NlKCk7XG4gICAgfVxuXG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBjb25zdCB0ZXh0cyA9IHRoaXMuc2VsZWN0aW9uLnZhbHVlPy5tYXAoKHZhbDogYW55KSA9PiB2YWwudGV4dCk7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5zZWxlY3Rpb24udmFsdWU/Lm1hcCgodmFsOiBhbnkpICA9PiB2YWwudmFsdWUpO1xuICAgIHRoaXMuc2VsZWN0aW9uVmFsdWVzQXBwbGllZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGV4dHMpKTtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlcz8udG9TdHJpbmcoKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZmlsdGVyLmVtaXQoe29wZXJhdG9yOiAnZXEnLCB2YWx1ZX0pO1xuICAgICAgdGhpcy5maWx0ZXJBcHBsaWVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5teVNlbGVjdC5jbG9zZSgpO1xuICB9XG5cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VhcmNoRmlsdGVyID0gJyc7XG4gICAgdGhpcy5jaGFuZ2VTZWFyY2goKTtcbiAgICB0aGlzLmFsbFNlbGVjdGVkID0gIXRoaXMuYWxsU2VsZWN0ZWQ7XG4gICAgaWYgKHRoaXMuYWxsU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uLnNldFZhbHVlKHRoaXMuc2VsZWN0aW9uTGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uLnNldFZhbHVlKFtdKTtcbiAgICB9XG4gIH1cblxuICByZXNldChlbWl0ID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uVmFsdWVzQXBwbGllZCA9IFtdO1xuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbi5zZXRWYWx1ZShbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uLnNldFZhbHVlKG51bGwpO1xuICAgIH1cbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5maWx0ZXIuZW1pdCh7b3BlcmF0b3I6ICdlcScsIHZhbHVlOiBudWxsfSk7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyQXBwbGllZCA9IGZhbHNlO1xuICAgIHRoaXMubXlTZWxlY3QuY2xvc2UoKTtcbiAgfVxuXG4gIGNoYW5nZVNlYXJjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvbkxpc3QuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgIHZhbHVlLmhpZGUgPSAhdmFsdWUudGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoRmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoRmlsdGVyS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIC8vIHByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciBvZiBzZWxlY3RpbmcgYW4gb3B0aW9uIHdoZW4gdGhlIHVzZXIgZmlsdGVycyB0aGUgb3B0aW9ucyB3aXRoIHNwYWNlIGJlaW5nIGFkZGVkXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdTcGFjZScpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8bWF0LXNlbGVjdFxuICAgIGNsYXNzPVwiYW1kZy1tb2RpZmllZC1tYXQtc2VsZWN0XCJcbiAgICBwbGFjZWhvbGRlcj1cIlVuZmlsdGVyZWRcIlxuICAgICNteVNlbGVjdFxuICAgIFtmb3JtQ29udHJvbF09XCJzZWxlY3Rpb25cIlxuICAgIFttdWx0aXBsZV09XCJtdWx0aXBsZVwiXG4gICAgeFBvc2l0aW9uPVwiYWZ0ZXJcIlxuICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0aW9uQ2hhbmdlKClcIlxuICAgIChvcGVuZWQpPVwibWVudU9wZW5lZCgpXCJcbiAgICBbZGlzYWJsZU9wdGlvbkNlbnRlcmluZ109XCJ0cnVlXCJcbiAgICBwYW5lbENsYXNzPVwiYW1kZy1jdXN0b20tc2VsZWN0LXBvc2l0aW9uXCI+XG4gIDxtYXQtc2VsZWN0LXRyaWdnZXIgY2xhc3M9XCJhbWRnLWxheW91dC1jb250YWluZXIgYW1kZy1wLTBcIj5cbiAgICA8c3BhbiAqbmdJZj1cInNlbGVjdGlvblZhbHVlc0FwcGxpZWQubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJtYXQtc2VsZWN0LXBsYWNlaG9sZGVyXCI+VW5maWx0ZXJlZDwvc3Bhbj5cbiAgICA8YSBtYXQtYnV0dG9uIGRpc2FibGVSaXBwbGUgY29sb3I9XCJhY2NlbnRcIiBjbGFzcz1cImFtZGctZmlsdGVyLXZhbHVlIGFtZGctdGV4dC10cnVuY2F0ZVwiIFtuZ0NsYXNzXT1cInsnZ3JpZC1maWx0ZXItYXBwbGllZC1jb2xvciBhbWRnLWZvbnQtd2VpZ2h0LWJvbGQnOiBmaWx0ZXJBcHBsaWVkfVwiPnt7c2VsZWN0aW9uVmFsdWVzQXBwbGllZFswXX19PC9hPlxuICAgIDxzcGFuICpuZ0lmPVwic2VsZWN0aW9uVmFsdWVzQXBwbGllZC5sZW5ndGggPiAxXCIgY2xhc3M9XCJhbWRnLWFkZGl0aW9uYWwtc2VsZWN0aW9uXCI+XG4gICAgICAgICgre3tzZWxlY3Rpb25WYWx1ZXNBcHBsaWVkLmxlbmd0aCAtIDF9fSB7e3NlbGVjdGlvblZhbHVlc0FwcGxpZWQubGVuZ3RoID09PSAyID8gJ290aGVyJyA6ICdvdGhlcnMnfX0pXG4gICAgICA8L3NwYW4+XG4gIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxuICA8ZGl2IGNsYXNzPVwiYW1kZy1sYXlvdXQtY29udGFpbmVyIGFtZGctbXQtMlwiPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uICpuZ0lmPVwibXVsdGlwbGVcIiBtYXQtc3Ryb2tlZC1idXR0b24gdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJjbG9zZSgpXCIgY2xhc3M9XCJhbWRnLXNtYWxsLXN0cm9rZWQtYnV0dG9uIGFtZGctbXItMlwiPkZpbHRlcjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiAqbmdJZj1cIm11bHRpcGxlXCIgbWF0LXN0cm9rZWQtYnV0dG9uIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImFjY2VudFwiIChjbGljayk9XCJ0b2dnbGUoKVwiIGNsYXNzPVwiYW1kZy1zbWFsbC1zdHJva2VkLWJ1dHRvblwiPlNlbGVjdCB7e2FsbFNlbGVjdGVkID8gJ05vbmUnOiAnQWxsJ319PC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cInJlc2V0KClcIiBjbGFzcz1cImFtZGctc21hbGwtc3Ryb2tlZC1idXR0b25cIj5SZXNldDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImFtZGctbGF5b3V0LWNvbnRhaW5lciBhbWRnLW10LTJcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJhbWRnLXctMTAwXCI+XG4gICAgICA8aW5wdXQgaWQ9XCJhbWRnLW11bHRpLXNlbGVjdC1zZWFyY2hcIiBtYXRJbnB1dCAjZnJvbUVsZW1lbnQgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBbKG5nTW9kZWwpXT1cInNlYXJjaEZpbHRlclwiIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVNlYXJjaCgpXCIgKGtleWRvd24pPVwic2VhcmNoRmlsdGVyS2V5ZG93bigkZXZlbnQpXCIvPlxuICAgICAgPGJ1dHRvbiBpZD1cImFtZGctbXVsdGktc2VsZWN0LXNlYXJjaC1jbG9zZVwiIG1hdC1idXR0b24gKm5nSWY9XCJzZWFyY2hGaWx0ZXJcIiBtYXRTdWZmaXggbWF0LWljb24tYnV0dG9uIGFyaWEtbGFiZWw9XCJDbGVhclwiIChjbGljayk9XCJzZWFyY2hGaWx0ZXI9Jyc7Y2hhbmdlU2VhcmNoKCkgIFwiPlxuICAgICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJhbWRnLWxpc3QtY29udGFpbmVyXCIgPlxuICAgIDxtYXQtb3B0aW9uIGNsYXNzPVwiYW1kZy1tYXQtb3B0aW9uXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2VsZWN0aW9uTGlzdFwiIFt2YWx1ZV09XCJpdGVtXCIgW25nQ2xhc3NdPVwieydhbWRnLWQtbm9uZSc6IGl0ZW0uaGlkZX1cIj57e2l0ZW0udGV4dH19PC9tYXQtb3B0aW9uPlxuICA8L2Rpdj5cbjwvbWF0LXNlbGVjdD5cbiJdfQ==
