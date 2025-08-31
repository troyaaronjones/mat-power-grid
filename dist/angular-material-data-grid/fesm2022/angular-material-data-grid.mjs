import * as i0 from '@angular/core';
import { Injectable, Inject, Component, EventEmitter, Input, Output, ViewChild, Pipe, ChangeDetectionStrategy, HostListener, ViewEncapsulation, NgModule } from '@angular/core';
import * as i15 from '@angular/cdk/drag-drop';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import * as i4$3 from '@angular/cdk/scrolling';
import { FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY, ScrollingModule } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';
import * as i1$1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i2$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$2 from '@angular/forms';
import { FormControl, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i4$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i5 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i6 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i6$2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i12 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i7$2 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i4$2 from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import * as i8$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i3 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i7 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i6$1 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i7$1 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i8 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import * as i1$3 from '@angular/platform-browser';

class AngularMaterialDataGridService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: AngularMaterialDataGridService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: AngularMaterialDataGridService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: AngularMaterialDataGridService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class GridService {
    constructor(http) {
        this.http = http;
    }
    getAny(url) {
        return this.http.get(url);
    }
    getAnyPost(url, body) {
        return this.http.post(url, body);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: GridService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: GridService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: GridService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.HttpClient }] });

class ConfirmationComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.content = {
            title: null,
            content: null,
            cancel_text: null,
            ok_text: null
        };
    }
    ngOnInit() {
        this.content = this.data;
    }
    close() {
        this.dialogRef.close();
    }
    ok() {
        this.dialogRef.close(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: ConfirmationComponent, deps: [{ token: i1$1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.2.1", type: ConfirmationComponent, isStandalone: false, selector: "amdg-confirmation", ngImport: i0, template: "<h2 id=\"amdg-dialog-confirmation-title\">{{ content.title }}</h2>\n<p id=\"amdg-dialog-confirmation-paragraph\">{{ content.content }}</p>\n\n<div class=\"amdg-text-right\">\n    <button mat-button color=\"primary\" class=\"amdg-mr-2\" type=\"button\" (click)=\"close()\">{{ content.cancel_text }}\n    </button>\n    <button mat-stroked-button color=\"primary\" tabindex=\"1\" class=\"button\" type=\"button\"\n        (click)=\"ok()\">{{ content.ok_text }}\n    </button>\n</div>\n", styles: ["#amdg-dialog-confirmation-title{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;margin-bottom:.75rem}#amdg-dialog-confirmation-paragraph{margin-bottom:.75rem}.amdg-text-right{text-align:right}\n"], dependencies: [{ kind: "component", type: i4.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: ConfirmationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amdg-confirmation', standalone: false, template: "<h2 id=\"amdg-dialog-confirmation-title\">{{ content.title }}</h2>\n<p id=\"amdg-dialog-confirmation-paragraph\">{{ content.content }}</p>\n\n<div class=\"amdg-text-right\">\n    <button mat-button color=\"primary\" class=\"amdg-mr-2\" type=\"button\" (click)=\"close()\">{{ content.cancel_text }}\n    </button>\n    <button mat-stroked-button color=\"primary\" tabindex=\"1\" class=\"button\" type=\"button\"\n        (click)=\"ok()\">{{ content.ok_text }}\n    </button>\n</div>\n", styles: ["#amdg-dialog-confirmation-title{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;margin-bottom:.75rem}#amdg-dialog-confirmation-paragraph{margin-bottom:.75rem}.amdg-text-right{text-align:right}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }] });

class PaginationComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.pageChanged = new EventEmitter();
        this.toggleFullScreen = new EventEmitter();
        this.noOfTotalRecords = 0;
        this.loadingData = true;
        this.noOfRecords = 0;
        this.noOfSelectedRow = 0;
        this.currentPage = 1;
        this.disableFullScreenToggle = false;
        this.showNoOfRecords = true;
        this.pageSizes = [50, 100, 250, 500, 1000];
        this.newRecordsPerPage = 100;
        this.recordsPerPage = 100;
        this.pages = 0;
        // currentPage = 1;
        this.pagesOnDisplay = [];
        this.pageInfoDisplayText = '';
        this.discardSelectionConfirmationObj = {
            width: '300px',
            data: {
                title: 'Discard Selection?',
                content: 'If you leave this page your selection will get discarded, do you want to proceed anyway?',
                ok_text: 'PROCEED',
                cancel_text: 'CANCEL'
            }
        };
        this.fullscreen = false;
    }
    ngOnInit() {
        // this.pageChanged.emit({pageNo: 1, recordsPerPage: this.recordsPerPage});
        // initial request trigger
    }
    ngOnChanges(changes) {
        if (changes['loadingData']?.currentValue === false) { // render pages buttons when data is loaded
            if (this.newRecordsPerPage !== this.recordsPerPage) { // if page size changes go back to page 1
                this.recordsPerPage = this.newRecordsPerPage;
                this.currentPage = 1;
            }
            this.pageChange(this.currentPage, false); // render page buttons without an emit to parent
        }
    }
    pageChange(pageNo, notify = true) {
        if (this.noOfSelectedRow > 0) {
            this.dialog.open(ConfirmationComponent, this.discardSelectionConfirmationObj).afterClosed().subscribe(result => {
                if (result) {
                    this.continuePageChange(pageNo, notify);
                }
            });
        }
        else {
            this.continuePageChange(pageNo, notify);
        }
    }
    continuePageChange(pageNo, notify = true) {
        this.pages = Math.ceil(this.noOfTotalRecords / this.recordsPerPage);
        this.currentPage = pageNo;
        this.pagesOnDisplay = [];
        if (this.pages > 5) {
            if (pageNo <= 3) {
                for (let i = 1; i <= 5; i++) {
                    this.pagesOnDisplay.push(i);
                }
            }
            else if (pageNo > 3 && pageNo < this.pages - 2) {
                for (let i = 1; i < 5 + 1; i++) {
                    this.pagesOnDisplay.push(i + pageNo - 3);
                }
            }
            else {
                for (let i = 1; i < 5 + 1; i++) {
                    this.pagesOnDisplay.push(i + this.pages - 5);
                }
            }
        }
        else {
            for (let i = 1; i < this.pages + 1; i++) {
                this.pagesOnDisplay.push(i);
            }
        }
        this.pageInfoDisplayText = `${(this.recordsPerPage * this.currentPage) - this.recordsPerPage + 1} - ${this.currentPage === this.pages ? this.noOfTotalRecords : this.newRecordsPerPage * this.currentPage} of ${this.noOfTotalRecords} items`;
        if (this.noOfTotalRecords === 0) {
            this.pageInfoDisplayText = '0 items';
        }
        if (notify) {
            this.pageChanged.emit({ pageNo: this.currentPage, recordsPerPage: this.recordsPerPage });
        }
    }
    recordsPerPageChanged() {
        if (this.noOfSelectedRow > 0) {
            this.dialog.open(ConfirmationComponent, this.discardSelectionConfirmationObj).afterClosed().subscribe(result => {
                if (result) {
                    this.pageChanged.emit({ pageNo: 1, recordsPerPage: this.newRecordsPerPage });
                }
            });
        }
        else {
            this.pageChanged.emit({ pageNo: 1, recordsPerPage: this.newRecordsPerPage });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: PaginationComponent, deps: [{ token: i1$1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.1", type: PaginationComponent, isStandalone: false, selector: "amdg-pagination", inputs: { noOfTotalRecords: "noOfTotalRecords", loadingData: "loadingData", noOfRecords: "noOfRecords", noOfSelectedRow: "noOfSelectedRow", currentPage: "currentPage", disableFullScreenToggle: "disableFullScreenToggle", showNoOfRecords: "showNoOfRecords", pageSizes: "pageSizes", newRecordsPerPage: "newRecordsPerPage" }, outputs: { pageChanged: "pageChanged", toggleFullScreen: "toggleFullScreen" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"amdg-layout-container\" style=\"height: 40px;\">\n    <div id=\"amdg-buttons-container\">\n        <button mat-icon-button class=\"amdg-desktop\" aria-label=\"pagination\" color=\"accent\" [disabled]=\"currentPage === 1 || loadingData\" (click)=\"pageChange(1)\">\n            <mat-icon>skip_previous</mat-icon>\n        </button>\n        <button mat-icon-button aria-label=\"pagination\" color=\"accent\" [disabled]=\"currentPage === 1 || loadingData\" (click)=\"pageChange(currentPage - 1)\">\n            <mat-icon class=\"material-icons-outlined\">keyboard_arrow_left</mat-icon>\n        </button>\n        @if (!pagesOnDisplay.includes(1)) {\n            <button mat-icon-button class=\"amdg-desktop\" aria-label=\"pagination\" disabled>\n                <mat-icon class=\"material-icons-outlined\">more_horiz</mat-icon>\n            </button>\n        }\n        @for (page of pagesOnDisplay; track page) {\n            @if (currentPage === page) {\n                <button mat-flat-button\n                    [class.amdg-larger-page-btn]=\"(page + '').length >= 3\"\n                    aria-label=\"pagination\"\n                    color=\"accent\"\n                    class=\"amdg-active\"\n                    [disabled]=\"loadingData\"\n                    (click)=\"pageChange(page)\">\n                    {{page}}\n                </button>\n            } @else {\n                <button mat-icon-button\n                    [class.amdg-larger-page-btn]=\"(page + '').length >= 3\"\n                    aria-label=\"pagination\"\n                    color=\"accent\"\n                    class=\"amdg-desktop\"\n                    [disabled]=\"loadingData\"\n                    (click)=\"pageChange(page)\">\n                    {{page}}\n                </button>\n            }\n        }\n\n        @if (!pagesOnDisplay.includes(pages)) {\n            <button mat-icon-button class=\"amdg-desktop\" aria-label=\"pagination\" disabled>\n                <mat-icon class=\"material-icons-outlined\">more_horiz</mat-icon>\n            </button>\n        }\n        <button mat-icon-button aria-label=\"pagination\" color=\"accent\" [disabled]=\"currentPage === pages || noOfTotalRecords === 0 || loadingData\" (click)=\"pageChange(currentPage + 1)\">\n            <mat-icon class=\"material-icons-outlined\">keyboard_arrow_right</mat-icon>\n        </button>\n        <button mat-icon-button class=\"amdg-desktop\" aria-label=\"pagination\" color=\"accent\" [disabled]=\"currentPage === pages || noOfTotalRecords === 0  || loadingData\" (click)=\"pageChange(pages)\">\n            <mat-icon>skip_next_outline</mat-icon>\n        </button>\n    </div>\n\n    <div>\n        @if (!disableFullScreenToggle) {\n            <button mat-icon-button aria-label=\"pagination\" class=\"amdg-desktop amdg-mr-2\" matTooltip=\"Toggle Fullscreen\" (click)=\"fullscreen = !fullscreen;toggleFullScreen.emit(fullscreen)\">\n                @if (fullscreen) {\n                    <mat-icon>fullscreen_exit</mat-icon>\n                } @else {\n                    <mat-icon>fullscreen</mat-icon>\n                }\n            </button>\n        }\n        @if (showNoOfRecords) {\n            <p class=\"amdg-desktop amdg-text-muted amdg-d-inline amdg-mr-2\">Items per page:</p>\n            <mat-form-field class=\"amdg-pagination-selector amdg-mr-4\">\n                <mat-select [disabled]=\"loadingData\" [(ngModel)]=\"newRecordsPerPage\" (ngModelChange)=\"recordsPerPageChanged()\">\n                    @for (pageSize of pageSizes; track pageSize) {\n                        <mat-option class=\"amdg-mat-option\" [value]=\"pageSize\">{{pageSize}}</mat-option>\n                    }\n                </mat-select>\n            </mat-form-field>\n        }\n        @if (noOfSelectedRow) {\n            <span class=\"amdg-desktop\">\n            <a mat-button color=\"accent\" disableRipple class=\"amdg-grid-filter-applied-color amdg-font-weight-bold\">{{noOfSelectedRow}} Selected</a>\n            <span class=\"amdg-ml-2 amdg-mr-2\">|</span>\n        </span>\n        }\n        {{pageInfoDisplayText}}\n    </div>\n</div>\n", styles: [".amdg-layout-container{border-top:1px solid rgba(118,118,118,.3);background:#7676761a}.amdg-layout-container .mat-icon-button,.amdg-layout-container .mat-flat-button{width:26px;height:26px;line-height:26px!important;border-radius:2px;margin-right:4px;font-weight:400;min-width:26px;padding:0}.amdg-layout-container .mat-icon-button.amdg-active,.amdg-layout-container .mat-flat-button.amdg-active{color:#fff}.amdg-layout-container .mat-icon-button.amdg-larger-page-btn,.amdg-layout-container .mat-flat-button.amdg-larger-page-btn{width:40px}.amdg-grid-filter-applied-color{padding:0;display:inline;min-width:auto;font-size:12px;line-height:normal;cursor:inherit}.amdg-pagination-selector{font-size:12px;width:70px;height:42px}@media screen and (max-width: 768px){.amdg-desktop{display:none!important}}\n"], dependencies: [{ kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i4.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i4.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]", exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i7.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amdg-pagination', standalone: false, template: "<div class=\"amdg-layout-container\" style=\"height: 40px;\">\n    <div id=\"amdg-buttons-container\">\n        <button mat-icon-button class=\"amdg-desktop\" aria-label=\"pagination\" color=\"accent\" [disabled]=\"currentPage === 1 || loadingData\" (click)=\"pageChange(1)\">\n            <mat-icon>skip_previous</mat-icon>\n        </button>\n        <button mat-icon-button aria-label=\"pagination\" color=\"accent\" [disabled]=\"currentPage === 1 || loadingData\" (click)=\"pageChange(currentPage - 1)\">\n            <mat-icon class=\"material-icons-outlined\">keyboard_arrow_left</mat-icon>\n        </button>\n        @if (!pagesOnDisplay.includes(1)) {\n            <button mat-icon-button class=\"amdg-desktop\" aria-label=\"pagination\" disabled>\n                <mat-icon class=\"material-icons-outlined\">more_horiz</mat-icon>\n            </button>\n        }\n        @for (page of pagesOnDisplay; track page) {\n            @if (currentPage === page) {\n                <button mat-flat-button\n                    [class.amdg-larger-page-btn]=\"(page + '').length >= 3\"\n                    aria-label=\"pagination\"\n                    color=\"accent\"\n                    class=\"amdg-active\"\n                    [disabled]=\"loadingData\"\n                    (click)=\"pageChange(page)\">\n                    {{page}}\n                </button>\n            } @else {\n                <button mat-icon-button\n                    [class.amdg-larger-page-btn]=\"(page + '').length >= 3\"\n                    aria-label=\"pagination\"\n                    color=\"accent\"\n                    class=\"amdg-desktop\"\n                    [disabled]=\"loadingData\"\n                    (click)=\"pageChange(page)\">\n                    {{page}}\n                </button>\n            }\n        }\n\n        @if (!pagesOnDisplay.includes(pages)) {\n            <button mat-icon-button class=\"amdg-desktop\" aria-label=\"pagination\" disabled>\n                <mat-icon class=\"material-icons-outlined\">more_horiz</mat-icon>\n            </button>\n        }\n        <button mat-icon-button aria-label=\"pagination\" color=\"accent\" [disabled]=\"currentPage === pages || noOfTotalRecords === 0 || loadingData\" (click)=\"pageChange(currentPage + 1)\">\n            <mat-icon class=\"material-icons-outlined\">keyboard_arrow_right</mat-icon>\n        </button>\n        <button mat-icon-button class=\"amdg-desktop\" aria-label=\"pagination\" color=\"accent\" [disabled]=\"currentPage === pages || noOfTotalRecords === 0  || loadingData\" (click)=\"pageChange(pages)\">\n            <mat-icon>skip_next_outline</mat-icon>\n        </button>\n    </div>\n\n    <div>\n        @if (!disableFullScreenToggle) {\n            <button mat-icon-button aria-label=\"pagination\" class=\"amdg-desktop amdg-mr-2\" matTooltip=\"Toggle Fullscreen\" (click)=\"fullscreen = !fullscreen;toggleFullScreen.emit(fullscreen)\">\n                @if (fullscreen) {\n                    <mat-icon>fullscreen_exit</mat-icon>\n                } @else {\n                    <mat-icon>fullscreen</mat-icon>\n                }\n            </button>\n        }\n        @if (showNoOfRecords) {\n            <p class=\"amdg-desktop amdg-text-muted amdg-d-inline amdg-mr-2\">Items per page:</p>\n            <mat-form-field class=\"amdg-pagination-selector amdg-mr-4\">\n                <mat-select [disabled]=\"loadingData\" [(ngModel)]=\"newRecordsPerPage\" (ngModelChange)=\"recordsPerPageChanged()\">\n                    @for (pageSize of pageSizes; track pageSize) {\n                        <mat-option class=\"amdg-mat-option\" [value]=\"pageSize\">{{pageSize}}</mat-option>\n                    }\n                </mat-select>\n            </mat-form-field>\n        }\n        @if (noOfSelectedRow) {\n            <span class=\"amdg-desktop\">\n            <a mat-button color=\"accent\" disableRipple class=\"amdg-grid-filter-applied-color amdg-font-weight-bold\">{{noOfSelectedRow}} Selected</a>\n            <span class=\"amdg-ml-2 amdg-mr-2\">|</span>\n        </span>\n        }\n        {{pageInfoDisplayText}}\n    </div>\n</div>\n", styles: [".amdg-layout-container{border-top:1px solid rgba(118,118,118,.3);background:#7676761a}.amdg-layout-container .mat-icon-button,.amdg-layout-container .mat-flat-button{width:26px;height:26px;line-height:26px!important;border-radius:2px;margin-right:4px;font-weight:400;min-width:26px;padding:0}.amdg-layout-container .mat-icon-button.amdg-active,.amdg-layout-container .mat-flat-button.amdg-active{color:#fff}.amdg-layout-container .mat-icon-button.amdg-larger-page-btn,.amdg-layout-container .mat-flat-button.amdg-larger-page-btn{width:40px}.amdg-grid-filter-applied-color{padding:0;display:inline;min-width:auto;font-size:12px;line-height:normal;cursor:inherit}.amdg-pagination-selector{font-size:12px;width:70px;height:42px}@media screen and (max-width: 768px){.amdg-desktop{display:none!important}}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.MatDialog }], propDecorators: { pageChanged: [{
                type: Output
            }], toggleFullScreen: [{
                type: Output
            }], noOfTotalRecords: [{
                type: Input
            }], loadingData: [{
                type: Input
            }], noOfRecords: [{
                type: Input
            }], noOfSelectedRow: [{
                type: Input
            }], currentPage: [{
                type: Input
            }], disableFullScreenToggle: [{
                type: Input
            }], showNoOfRecords: [{
                type: Input
            }], pageSizes: [{
                type: Input
            }], newRecordsPerPage: [{
                type: Input
            }] } });

class SortHeaderComponent {
    constructor() {
        this.heading = { display: null, type: 'string', sort: '', disableSorting: false, headerTooltip: null };
        this.filter = new EventEmitter();
    }
    sort() {
        if (!this.heading.disableSorting) {
            switch (this.heading.sort) {
                case 'asc':
                    this.heading.sort = 'desc';
                    break;
                case 'desc':
                    this.heading.sort = null;
                    break;
                default:
                    this.heading.sort = 'asc';
            }
            this.filter.emit(this.heading);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: SortHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.1", type: SortHeaderComponent, isStandalone: false, selector: "amdg-sort-header", inputs: { heading: "heading" }, outputs: { filter: "filter" }, ngImport: i0, template: "<div class=\"amdg-layout-container\" [ngStyle]=\"{'cursor': heading.disableSorting ? 'default': 'pointer'}\" matRipple [matRippleDisabled]=\"heading.disableSorting\" (click)=\"sort()\">\n    <span id=\"amdg-header-text\" class=\"amdg-text-truncate\" [matTooltip]=\"heading.headerTooltip\"> {{heading.display}}</span>\n    @if (!heading.disableSorting) {\n        <ng-container>\n            @if (!heading.sort) {\n                <mat-icon class=\"amdg-sort-icon\" matTooltip=\"Sort Ascending\">sort</mat-icon>\n            } @else if (heading.sort === 'asc') {\n                <mat-icon color=\"accent\" matTooltip=\"Sort Descending\">arrow_upward</mat-icon>\n            } @else if (heading.sort === 'desc') {\n                <mat-icon color=\"accent\" matTooltip=\"Remove Sort\">arrow_downward</mat-icon>\n            }\n        </ng-container>\n    }\n</div>\n", styles: [".amdg-layout-container{margin:0 -8px;height:35px}.amdg-layout-container #amdg-header-text{font-weight:700;max-width:calc(100% - 28px)}.amdg-layout-container .amdg-sort-icon{font-size:18px;width:18px;height:18px}\n"], dependencies: [{ kind: "directive", type: i2$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i7.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "directive", type: i4$2.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: SortHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amdg-sort-header', standalone: false, template: "<div class=\"amdg-layout-container\" [ngStyle]=\"{'cursor': heading.disableSorting ? 'default': 'pointer'}\" matRipple [matRippleDisabled]=\"heading.disableSorting\" (click)=\"sort()\">\n    <span id=\"amdg-header-text\" class=\"amdg-text-truncate\" [matTooltip]=\"heading.headerTooltip\"> {{heading.display}}</span>\n    @if (!heading.disableSorting) {\n        <ng-container>\n            @if (!heading.sort) {\n                <mat-icon class=\"amdg-sort-icon\" matTooltip=\"Sort Ascending\">sort</mat-icon>\n            } @else if (heading.sort === 'asc') {\n                <mat-icon color=\"accent\" matTooltip=\"Sort Descending\">arrow_upward</mat-icon>\n            } @else if (heading.sort === 'desc') {\n                <mat-icon color=\"accent\" matTooltip=\"Remove Sort\">arrow_downward</mat-icon>\n            }\n        </ng-container>\n    }\n</div>\n", styles: [".amdg-layout-container{margin:0 -8px;height:35px}.amdg-layout-container #amdg-header-text{font-weight:700;max-width:calc(100% - 28px)}.amdg-layout-container .amdg-sort-icon{font-size:18px;width:18px;height:18px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { heading: [{
                type: Input
            }], filter: [{
                type: Output
            }] } });

class MultiSelectComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: MultiSelectComponent, deps: [{ token: GridService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.1", type: MultiSelectComponent, isStandalone: false, selector: "amdg-multi-select", inputs: { initialFilter: "initialFilter", resetFilters: "resetFilters", filterConfig: "filterConfig" }, outputs: { filter: "filter" }, viewQueries: [{ propertyName: "mySelect", first: true, predicate: ["mySelect"], descendants: true }, { propertyName: "fromElement", first: true, predicate: ["fromElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<mat-select\n    class=\"amdg-modified-mat-select\"\n    placeholder=\"Unfiltered\"\n    #mySelect\n    [formControl]=\"selection\"\n    [multiple]=\"multiple\"\n    xPosition=\"after\"\n    (selectionChange)=\"selectionChange()\"\n    (opened)=\"menuOpened()\"\n    [disableOptionCentering]=\"true\"\n    panelClass=\"amdg-custom-select-position\">\n    <mat-select-trigger class=\"amdg-layout-container amdg-p-0\">\n        @if (selectionValuesApplied.length === 0) {\n            <span class=\"mat-select-placeholder\">Unfiltered</span>\n        } @else {\n            <a mat-button disableRipple color=\"accent\" class=\"amdg-filter-value amdg-text-truncate\" [ngClass]=\"{'grid-filter-applied-color amdg-font-weight-bold': filterApplied}\">{{selectionValuesApplied[0]}}</a>\n            @if (selectionValuesApplied.length > 1) {\n                <span class=\"amdg-additional-selection\">\n          (+{{selectionValuesApplied.length - 1}} {{selectionValuesApplied.length === 2 ? 'other' : 'others'}}))\n        </span>\n            }\n        }\n    </mat-select-trigger>\n    <div class=\"amdg-layout-container amdg-mt-2\">\n        <div>\n            @if (multiple) {\n                <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"close()\" class=\"amdg-small-stroked-button amdg-mr-2\">Filter</button>\n                <button mat-stroked-button type=\"button\" color=\"accent\" (click)=\"toggle()\" class=\"amdg-small-stroked-button\">Select {{allSelected ? 'None': 'All'}}</button>\n            }\n        </div>\n\n        <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset()\" class=\"amdg-small-stroked-button\">Reset</button>\n    </div>\n    <div class=\"amdg-layout-container amdg-mt-2\">\n        <mat-form-field class=\"amdg-w-100\">\n            <input id=\"amdg-multi-select-search\" matInput #fromElement placeholder=\"Search...\" [(ngModel)]=\"searchFilter\" (ngModelChange)=\"changeSearch()\" (keydown)=\"searchFilterKeydown($event)\"/>\n            @if (searchFilter) {\n                <button id=\"amdg-multi-select-search-close\" mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchFilter='';changeSearch()\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            }\n        </mat-form-field>\n    </div>\n    <div id=\"amdg-list-container\" >\n        @for (item of selectionList; track item) {\n            <mat-option class=\"amdg-mat-option\" [value]=\"item\" [ngClass]=\"{'amdg-d-none': item.hide}\">{{item.text}}</mat-option>\n        }\n    </div>\n</mat-select>\n", styles: [".amdg-filter-value{padding:0;display:inline;min-width:auto;font-size:12px;line-height:normal}.amdg-filter-value:hover{text-decoration:none!important}.amdg-modified-mat-select{border:1px solid rgba(118,118,118,.3);border-radius:4px;padding:0 4px;height:28px;line-height:28px!important;background:#fff;box-sizing:border-box}.amdg-additional-selection{opacity:.75;font-size:.75em}#amdg-list-container{max-height:160px;overflow-y:scroll}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i1$2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "directive", type: i3.MatSelectTrigger, selector: "mat-select-trigger" }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i4.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i4.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]", exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: MultiSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amdg-multi-select', standalone: false, template: "<mat-select\n    class=\"amdg-modified-mat-select\"\n    placeholder=\"Unfiltered\"\n    #mySelect\n    [formControl]=\"selection\"\n    [multiple]=\"multiple\"\n    xPosition=\"after\"\n    (selectionChange)=\"selectionChange()\"\n    (opened)=\"menuOpened()\"\n    [disableOptionCentering]=\"true\"\n    panelClass=\"amdg-custom-select-position\">\n    <mat-select-trigger class=\"amdg-layout-container amdg-p-0\">\n        @if (selectionValuesApplied.length === 0) {\n            <span class=\"mat-select-placeholder\">Unfiltered</span>\n        } @else {\n            <a mat-button disableRipple color=\"accent\" class=\"amdg-filter-value amdg-text-truncate\" [ngClass]=\"{'grid-filter-applied-color amdg-font-weight-bold': filterApplied}\">{{selectionValuesApplied[0]}}</a>\n            @if (selectionValuesApplied.length > 1) {\n                <span class=\"amdg-additional-selection\">\n          (+{{selectionValuesApplied.length - 1}} {{selectionValuesApplied.length === 2 ? 'other' : 'others'}}))\n        </span>\n            }\n        }\n    </mat-select-trigger>\n    <div class=\"amdg-layout-container amdg-mt-2\">\n        <div>\n            @if (multiple) {\n                <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"close()\" class=\"amdg-small-stroked-button amdg-mr-2\">Filter</button>\n                <button mat-stroked-button type=\"button\" color=\"accent\" (click)=\"toggle()\" class=\"amdg-small-stroked-button\">Select {{allSelected ? 'None': 'All'}}</button>\n            }\n        </div>\n\n        <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset()\" class=\"amdg-small-stroked-button\">Reset</button>\n    </div>\n    <div class=\"amdg-layout-container amdg-mt-2\">\n        <mat-form-field class=\"amdg-w-100\">\n            <input id=\"amdg-multi-select-search\" matInput #fromElement placeholder=\"Search...\" [(ngModel)]=\"searchFilter\" (ngModelChange)=\"changeSearch()\" (keydown)=\"searchFilterKeydown($event)\"/>\n            @if (searchFilter) {\n                <button id=\"amdg-multi-select-search-close\" mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchFilter='';changeSearch()\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            }\n        </mat-form-field>\n    </div>\n    <div id=\"amdg-list-container\" >\n        @for (item of selectionList; track item) {\n            <mat-option class=\"amdg-mat-option\" [value]=\"item\" [ngClass]=\"{'amdg-d-none': item.hide}\">{{item.text}}</mat-option>\n        }\n    </div>\n</mat-select>\n", styles: [".amdg-filter-value{padding:0;display:inline;min-width:auto;font-size:12px;line-height:normal}.amdg-filter-value:hover{text-decoration:none!important}.amdg-modified-mat-select{border:1px solid rgba(118,118,118,.3);border-radius:4px;padding:0 4px;height:28px;line-height:28px!important;background:#fff;box-sizing:border-box}.amdg-additional-selection{opacity:.75;font-size:.75em}#amdg-list-container{max-height:160px;overflow-y:scroll}\n"] }]
        }], ctorParameters: () => [{ type: GridService }], propDecorators: { filter: [{
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

class NumberFilterComponent {
    constructor() {
        this.resetFilters = null;
        this.filter = new EventEmitter();
        this.filterApplied = false;
        this.numericFilterTypes = [
            { value: 'between', text: 'Is between' },
            { value: 'eq', text: 'Is equal to' },
            { value: 'neq', text: 'Is not equal to' },
            { value: 'greaterorequal', text: 'Is greater than or equal to' },
            { value: 'greaterthan', text: 'Is greater than' },
            { value: 'lessthanorequal', text: 'Is less than or equal to' },
            { value: 'lessthan', text: 'Is less than' }
        ];
        this.selection = new FormControl('between', Validators.required);
        this.selectionSubscription = new Subscription();
        this.NUMBER_PATTERN = '^(\\+|-)?[0-9]+(.[0-9]{1,2})?$'; // '^[0-9]*$'
        this.range = new FormGroup({
            from: new FormControl(null, [Validators.required, Validators.pattern(this.NUMBER_PATTERN)]),
            to: new FormControl(null, [Validators.required, Validators.pattern(this.NUMBER_PATTERN)])
        });
        this.value = new FormControl(null, [Validators.required, Validators.pattern(this.NUMBER_PATTERN)]);
        this.filterParam = '';
        this.invalidRangeValue = false;
        this.invalidValue = false;
    }
    ngOnInit() {
        if (this.initialFilter) {
            this.selection.setValue(this.initialFilter.operator);
            this.filterParam = this.initialFilter.value;
            if (this.initialFilter.operator === 'between' && typeof this.initialFilter.value !== 'number') {
                const [start, end] = this.initialFilter.value.split('-');
                this.range.controls['from'].setValue(start);
                this.range.controls['to'].setValue(end);
            }
            else {
                this.value.setValue(this.initialFilter.value);
            }
            this.filterApplied = true;
        }
        this.selectionSubscription = this.selection.valueChanges.subscribe(value => {
            this.invalidRangeValue = false;
            this.invalidValue = false;
        });
    }
    ngOnChanges(changes) {
        if (changes['resetFilters']?.currentValue) {
            this.reset(false);
        }
    }
    ngOnDestroy() {
        this.selectionSubscription.unsubscribe();
    }
    menuOpened() {
        if (this.selection.value === 'between') {
            this.fromElement.nativeElement.focus();
        }
        else {
            this.valueElement.nativeElement.focus();
        }
    }
    reset(emit) {
        this.invalidRangeValue = false;
        this.invalidValue = false;
        this.range.controls['from'].setValue(null);
        this.range.controls['to'].setValue(null);
        this.value.setValue(null);
        this.filterParam = '';
        this.close(null, emit);
    }
    validate() {
        if (this.selection.value === 'between') {
            if (this.range.valid) {
                const { from, to } = this.range.value;
                if ((from && to) && from < to) {
                    this.invalidRangeValue = false;
                    this.filterParam = from + '-' + to;
                    this.close(from + '-' + to);
                }
                else {
                    this.invalidRangeValue = true;
                }
            }
            else {
                this.invalidRangeValue = true;
            }
        }
        else {
            if (this.value.valid) {
                this.invalidValue = false;
                this.filterParam = this.value.value || '';
                this.close(this.filterParam.toString());
            }
            else {
                this.invalidValue = true;
            }
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
        this.menu.closeMenu();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: NumberFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.1", type: NumberFilterComponent, isStandalone: false, selector: "amdg-number-filter", inputs: { initialFilter: "initialFilter", resetFilters: "resetFilters" }, outputs: { filter: "filter" }, viewQueries: [{ propertyName: "menu", first: true, predicate: ["menuTrigger"], descendants: true }, { propertyName: "fromElement", first: true, predicate: ["fromElement"], descendants: true }, { propertyName: "valueElement", first: true, predicate: ["valueElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<button class=\"amdg-filter-open-btn amdg-layout-container\" [color]=\"filterApplied ? 'accent': 'none'\" mat-stroked-button type=\"button\" #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n    @if (!filterApplied) {\n        <span class=\"amdg-placeholder amdg-font-weight-normal\">Unfiltered</span>\n    } @else {\n        <span class=\"amdg-text-truncate\">{{filterParam}}</span>\n    }\n  <div class=\"amdg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"amdg-overflow-hidden\">\n  <div class=\"amdg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\" (keydown.shift.tab)=\"$event.stopPropagation()\">\n    <div class=\"amdg-layout-container\">\n      <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\" class=\"amdg-mr-2 amdg-small-stroked-button\">Filter</button>\n      <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset(true)\" class=\"amdg-small-stroked-button\">Reset</button>\n    </div>\n    <div class=\"amdg-layout-container\">\n      <mat-form-field class=\"amdg-w-100 amdg-mt-3\">\n        <mat-select [formControl]=\"selection\" placeholder=\"Logic\">\n          @for (item of numericFilterTypes; track item) {\n            <mat-option class=\"amdg-mat-option\" [value]=\"item.value\">{{item.text}}</mat-option>\n          }\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    @if (selection.value === 'between') {\n        <div [formGroup]=\"range\" class=\"amdg-layout-container\" (keyup.enter)=\"validate()\">\n          <mat-form-field>\n            <input matInput #fromElement type=\"number\" placeholder=\"From\" formControlName=\"from\" (keydown.e)=\"$event.preventDefault()\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput type=\"number\" placeholder=\"To\" formControlName=\"to\" (keydown.e)=\"$event.preventDefault()\">\n          </mat-form-field>\n        </div>\n    } @else {\n        <div class=\"amdg-layout-container\">\n          <mat-form-field class=\"amdg-w-100\">\n            <input matInput #valueElement type=\"number\" placeholder=\"Value\" [formControl]=\"value\" (keydown.e)=\"$event.preventDefault()\" (keyup.enter)=\"validate()\">\n          </mat-form-field>\n        </div>\n    }\n    <div class=\"amdg-layout-container\">\n        @if (invalidRangeValue) {\n            <span class=\"amdg-invalid-range-error\">Invalid range entered</span>\n        }\n        @if (invalidValue) {\n            <span class=\"amdg-invalid-range-error\">Invalid value entered</span>\n        }\n    </div>\n  </div>\n</mat-menu>\n", styles: [".amdg-placeholder{opacity:.6}.amdg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.amdg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:#fff}.amdg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.amdg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}mat-form-field{width:calc(50% - 4px);margin:0}.amdg-invalid-range-error{font-size:12px}\n"], dependencies: [{ kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i4.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i5.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "directive", type: i5.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: NumberFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amdg-number-filter', standalone: false, template: "<button class=\"amdg-filter-open-btn amdg-layout-container\" [color]=\"filterApplied ? 'accent': 'none'\" mat-stroked-button type=\"button\" #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n    @if (!filterApplied) {\n        <span class=\"amdg-placeholder amdg-font-weight-normal\">Unfiltered</span>\n    } @else {\n        <span class=\"amdg-text-truncate\">{{filterParam}}</span>\n    }\n  <div class=\"amdg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"amdg-overflow-hidden\">\n  <div class=\"amdg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\" (keydown.shift.tab)=\"$event.stopPropagation()\">\n    <div class=\"amdg-layout-container\">\n      <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\" class=\"amdg-mr-2 amdg-small-stroked-button\">Filter</button>\n      <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset(true)\" class=\"amdg-small-stroked-button\">Reset</button>\n    </div>\n    <div class=\"amdg-layout-container\">\n      <mat-form-field class=\"amdg-w-100 amdg-mt-3\">\n        <mat-select [formControl]=\"selection\" placeholder=\"Logic\">\n          @for (item of numericFilterTypes; track item) {\n            <mat-option class=\"amdg-mat-option\" [value]=\"item.value\">{{item.text}}</mat-option>\n          }\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    @if (selection.value === 'between') {\n        <div [formGroup]=\"range\" class=\"amdg-layout-container\" (keyup.enter)=\"validate()\">\n          <mat-form-field>\n            <input matInput #fromElement type=\"number\" placeholder=\"From\" formControlName=\"from\" (keydown.e)=\"$event.preventDefault()\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput type=\"number\" placeholder=\"To\" formControlName=\"to\" (keydown.e)=\"$event.preventDefault()\">\n          </mat-form-field>\n        </div>\n    } @else {\n        <div class=\"amdg-layout-container\">\n          <mat-form-field class=\"amdg-w-100\">\n            <input matInput #valueElement type=\"number\" placeholder=\"Value\" [formControl]=\"value\" (keydown.e)=\"$event.preventDefault()\" (keyup.enter)=\"validate()\">\n          </mat-form-field>\n        </div>\n    }\n    <div class=\"amdg-layout-container\">\n        @if (invalidRangeValue) {\n            <span class=\"amdg-invalid-range-error\">Invalid range entered</span>\n        }\n        @if (invalidValue) {\n            <span class=\"amdg-invalid-range-error\">Invalid value entered</span>\n        }\n    </div>\n  </div>\n</mat-menu>\n", styles: [".amdg-placeholder{opacity:.6}.amdg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.amdg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:#fff}.amdg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.amdg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}mat-form-field{width:calc(50% - 4px);margin:0}.amdg-invalid-range-error{font-size:12px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { initialFilter: [{
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

class DateFilterComponent {
    constructor() {
        this.resetFilters = null;
        this.filter = new EventEmitter();
        this.filterApplied = false;
        this.dateFilterTypes = [
            { value: 'betweendates', text: 'Is Between' },
            { value: 'blank', text: 'Is Empty' },
        ];
        this.range = new FormGroup({
            start: new FormControl(null),
            end: new FormControl(null)
        });
        this.selection = new FormControl('betweendates', Validators.required);
        this.value = new FormControl(null, [Validators.required]);
        this.invalidValue = false;
    }
    ngOnInit() {
        if (this.initialFilter && typeof this.initialFilter.value !== 'number') {
            this.value.setValue(this.initialFilter.value);
            const [start, end] = this.initialFilter.value.split('-');
            this.range.controls['start'].setValue(new Date(start));
            this.range.controls['end'].setValue(new Date(end));
            this.filterApplied = true;
        }
    }
    ngOnChanges(changes) {
        if (changes['resetFilters']?.currentValue) {
            this.reset(false);
        }
    }
    menuOpened() {
        setTimeout(() => {
            this.picker.open();
        }, 100);
    }
    changeSelection() {
        if (this.selection.value === 'blank') {
            this.value.disable();
        }
        else {
            this.value.enable();
        }
    }
    reset(emit) {
        this.invalidValue = false;
        this.value.setValue(null);
        this.selection.setValue('betweendates');
        this.range.controls['start'].setValue(null);
        this.range.controls['end'].setValue(null);
        this.close(null, emit);
    }
    validate() {
        if (this.range.valid && this.selection.value !== 'blank') {
            this.invalidValue = false;
            const { start, end } = this.range.value;
            if (start && end) {
                this.value.setValue(`${this.formatDate(start)}-${this.formatDate(end)}`);
                this.filter.emit({ operator: 'betweendates', value: this.value.value });
            }
            this.close(this.value.value);
        }
        else if (this.selection.value === 'blank') {
            this.value.setValue(`Is Empty`);
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
        this.menu.closeMenu();
    }
    formatDate(date) {
        try {
            if (date) {
                let month = (date.getMonth() + 1).toString();
                if (month.length === 1) {
                    month = '0' + month.toString();
                }
                let day = (date.getDate()).toString();
                if (day.length === 1) {
                    day = '0' + day.toString();
                }
                date = `${month}/${day}/${date.getFullYear()}`;
            }
            return date;
        }
        catch (e) {
            return date;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: DateFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.1", type: DateFilterComponent, isStandalone: false, selector: "amdg-date-filter", inputs: { initialFilter: "initialFilter", resetFilters: "resetFilters" }, outputs: { filter: "filter" }, viewQueries: [{ propertyName: "menu", first: true, predicate: ["menuTrigger"], descendants: true }, { propertyName: "fromElement", first: true, predicate: ["fromElement"], descendants: true }, { propertyName: "picker", first: true, predicate: ["picker"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<button class=\"amdg-filter-open-btn amdg-layout-container\" [color]=\"filterApplied ? 'accent': 'none'\" mat-stroked-button\n    type=\"button\" #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n    @if (!filterApplied) {\n        <span class=\"amdg-text-truncate amdg-placeholder amdg-font-weight-normal\">Unfiltered</span>\n    } @else if (filterApplied && value.value) {\n        <span class=\"amdg-text-truncate\" [matTooltip]=\"value.value\">{{ value.value }}</span>\n    }\n    <div class=\"amdg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"amdg-overflow-hidden\">\n    <div class=\"amdg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\"\n        (keydown.shift.tab)=\"$event.stopPropagation()\">\n        <div class=\"amdg-layout-container\">\n            <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\"\n                class=\"amdg-mr-2 amdg-small-stroked-button\">Filter\n            </button>\n            <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset(true)\"\n                class=\"amdg-small-stroked-button\">Reset\n            </button>\n        </div>\n        <div class=\"amdg-layout-container\">\n            <mat-form-field class=\"amdg-w-100 amdg-mt-3\">\n                <mat-select [formControl]=\"selection\" placeholder=\"Logic\" (selectionChange)=\"changeSelection()\">\n                    @for (item of dateFilterTypes; track item) {\n                        <mat-option class=\"amdg-mat-option\"\n                            [value]=\"item.value\">{{ item.text }}\n                        </mat-option>\n                    }\n                </mat-select>\n            </mat-form-field>\n        </div>\n\n        <div class=\"amdg-layout-container\">\n            <mat-form-field class=\"amdg-w-100\">\n                <mat-label>Enter a date range</mat-label>\n                <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\"\n                    [disabled]=\"selection.value === 'blank'\">\n                    <input readonly matStartDate formControlName=\"start\" placeholder=\"Start date\"\n                        (click)=\"picker.open()\">\n                    <input readonly matEndDate formControlName=\"end\" placeholder=\"End date\" (click)=\"picker.open()\">\n                </mat-date-range-input>\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-date-range-picker #picker></mat-date-range-picker>\n\n                @if (range.controls['start'].hasError('matStartDateInvalid')) {\n                    <mat-error>Invalid start date</mat-error>\n                }\n                @if (range.controls['end'].hasError('matEndDateInvalid')) {\n                    <mat-error>Invalid end date</mat-error>\n                }\n            </mat-form-field>\n        </div>\n        <div class=\"amdg-layout-container\">\n            @if (invalidValue) {\n                <span class=\"amdg-invalid-error\">Invalid value entered</span>\n            }\n        </div>\n    </div>\n</mat-menu>\n", styles: [".amdg-placeholder{opacity:.6}.amdg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.amdg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:#fff}.amdg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.amdg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.amdg-invalid-error{font-size:12px}\n"], dependencies: [{ kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i4.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "directive", type: i7.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "component", type: i6$1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i6$1.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i6$1.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i6$1.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i6$1.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i5.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "directive", type: i5.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: DateFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amdg-date-filter', standalone: false, template: "<button class=\"amdg-filter-open-btn amdg-layout-container\" [color]=\"filterApplied ? 'accent': 'none'\" mat-stroked-button\n    type=\"button\" #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n    @if (!filterApplied) {\n        <span class=\"amdg-text-truncate amdg-placeholder amdg-font-weight-normal\">Unfiltered</span>\n    } @else if (filterApplied && value.value) {\n        <span class=\"amdg-text-truncate\" [matTooltip]=\"value.value\">{{ value.value }}</span>\n    }\n    <div class=\"amdg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"amdg-overflow-hidden\">\n    <div class=\"amdg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\"\n        (keydown.shift.tab)=\"$event.stopPropagation()\">\n        <div class=\"amdg-layout-container\">\n            <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\"\n                class=\"amdg-mr-2 amdg-small-stroked-button\">Filter\n            </button>\n            <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset(true)\"\n                class=\"amdg-small-stroked-button\">Reset\n            </button>\n        </div>\n        <div class=\"amdg-layout-container\">\n            <mat-form-field class=\"amdg-w-100 amdg-mt-3\">\n                <mat-select [formControl]=\"selection\" placeholder=\"Logic\" (selectionChange)=\"changeSelection()\">\n                    @for (item of dateFilterTypes; track item) {\n                        <mat-option class=\"amdg-mat-option\"\n                            [value]=\"item.value\">{{ item.text }}\n                        </mat-option>\n                    }\n                </mat-select>\n            </mat-form-field>\n        </div>\n\n        <div class=\"amdg-layout-container\">\n            <mat-form-field class=\"amdg-w-100\">\n                <mat-label>Enter a date range</mat-label>\n                <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\"\n                    [disabled]=\"selection.value === 'blank'\">\n                    <input readonly matStartDate formControlName=\"start\" placeholder=\"Start date\"\n                        (click)=\"picker.open()\">\n                    <input readonly matEndDate formControlName=\"end\" placeholder=\"End date\" (click)=\"picker.open()\">\n                </mat-date-range-input>\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-date-range-picker #picker></mat-date-range-picker>\n\n                @if (range.controls['start'].hasError('matStartDateInvalid')) {\n                    <mat-error>Invalid start date</mat-error>\n                }\n                @if (range.controls['end'].hasError('matEndDateInvalid')) {\n                    <mat-error>Invalid end date</mat-error>\n                }\n            </mat-form-field>\n        </div>\n        <div class=\"amdg-layout-container\">\n            @if (invalidValue) {\n                <span class=\"amdg-invalid-error\">Invalid value entered</span>\n            }\n        </div>\n    </div>\n</mat-menu>\n", styles: [".amdg-placeholder{opacity:.6}.amdg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.amdg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:#fff}.amdg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.amdg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.amdg-invalid-error{font-size:12px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { initialFilter: [{
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
            }], picker: [{
                type: ViewChild,
                args: ['picker']
            }] } });

class StringFilterComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: StringFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.1", type: StringFilterComponent, isStandalone: false, selector: "amdg-string-filter", inputs: { initialFilter: "initialFilter", resetFilters: "resetFilters" }, outputs: { filter: "filter" }, viewQueries: [{ propertyName: "menu", first: true, predicate: ["menuTrigger"], descendants: true }, { propertyName: "fromElement", first: true, predicate: ["fromElement"], descendants: true }, { propertyName: "valueElement", first: true, predicate: ["valueElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<button class=\"amdg-filter-open-btn amdg-layout-container\" [color]=\"filterApplied ? 'accent': 'none'\" mat-stroked-button type=\"button\" #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n    @if (!filterApplied) {\n        <span class=\"amdg-placeholder amdg-font-weight-normal\">Unfiltered</span>\n    } @else {\n        <span class=\"amdg-text-truncate\">{{filterParam}}</span>\n    }\n    <div class=\"amdg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"amdg-overflow-hidden\">\n    <div class=\"amdg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\" (keydown.shift.tab)=\"$event.stopPropagation()\">\n        <div class=\"amdg-layout-container\">\n            <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\" class=\"amdg-mr-2 amdg-small-stroked-button\">Filter</button>\n            <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset(true)\" class=\"amdg-small-stroked-button\">Reset</button>\n        </div>\n        <div class=\"amdg-layout-container\">\n            <mat-form-field class=\"amdg-w-100 amdg-mt-3\">\n                <mat-select [formControl]=\"selection\" placeholder=\"Logic\" (selectionChange)=\"changeSelection()\">\n                    @for (item of stringFilterTypes; track item) {\n                        <mat-option class=\"amdg-mat-option\" [value]=\"item.value\">{{item.text}}</mat-option>\n                    }\n                </mat-select>\n            </mat-form-field>\n        </div>\n\n        <div class=\"amdg-layout-container\">\n            <mat-form-field class=\"amdg-w-100\">\n                <input matInput #valueElement type=\"text\" placeholder=\"Value\" [formControl]=\"value\" (keyup.enter)=\"validate()\">\n            </mat-form-field>\n        </div>\n        <div class=\"amdg-layout-container\">\n            @if (invalidValue) {\n                <span class=\"amdg-invalid-error\">Invalid value entered</span>\n            }\n        </div>\n    </div>\n</mat-menu>\n", styles: [".amdg-placeholder{opacity:.6}.amdg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.amdg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:#fff}.amdg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.amdg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.amdg-invalid-error{font-size:12px}\n"], dependencies: [{ kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "component", type: i4.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i5.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "directive", type: i5.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: StringFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amdg-string-filter', standalone: false, template: "<button class=\"amdg-filter-open-btn amdg-layout-container\" [color]=\"filterApplied ? 'accent': 'none'\" mat-stroked-button type=\"button\" #menuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n    @if (!filterApplied) {\n        <span class=\"amdg-placeholder amdg-font-weight-normal\">Unfiltered</span>\n    } @else {\n        <span class=\"amdg-text-truncate\">{{filterParam}}</span>\n    }\n    <div class=\"amdg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"amdg-overflow-hidden\">\n    <div class=\"amdg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\" (keydown.shift.tab)=\"$event.stopPropagation()\">\n        <div class=\"amdg-layout-container\">\n            <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\" class=\"amdg-mr-2 amdg-small-stroked-button\">Filter</button>\n            <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset(true)\" class=\"amdg-small-stroked-button\">Reset</button>\n        </div>\n        <div class=\"amdg-layout-container\">\n            <mat-form-field class=\"amdg-w-100 amdg-mt-3\">\n                <mat-select [formControl]=\"selection\" placeholder=\"Logic\" (selectionChange)=\"changeSelection()\">\n                    @for (item of stringFilterTypes; track item) {\n                        <mat-option class=\"amdg-mat-option\" [value]=\"item.value\">{{item.text}}</mat-option>\n                    }\n                </mat-select>\n            </mat-form-field>\n        </div>\n\n        <div class=\"amdg-layout-container\">\n            <mat-form-field class=\"amdg-w-100\">\n                <input matInput #valueElement type=\"text\" placeholder=\"Value\" [formControl]=\"value\" (keyup.enter)=\"validate()\">\n            </mat-form-field>\n        </div>\n        <div class=\"amdg-layout-container\">\n            @if (invalidValue) {\n                <span class=\"amdg-invalid-error\">Invalid value entered</span>\n            }\n        </div>\n    </div>\n</mat-menu>\n", styles: [".amdg-placeholder{opacity:.6}.amdg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.amdg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:#fff}.amdg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.amdg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.amdg-invalid-error{font-size:12px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { initialFilter: [{
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

class TagFilterComponent {
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
        if (this.initialFilter && typeof this.initialFilter.value !== "number") {
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
        stringList = stringList?.replace(/  /g, ',');
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: TagFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.1", type: TagFilterComponent, isStandalone: false, selector: "amdg-tag-filter", inputs: { initialFilter: "initialFilter", resetFilters: "resetFilters", numbersOnly: "numbersOnly" }, outputs: { filter: "filter" }, viewQueries: [{ propertyName: "menu", first: true, predicate: ["menuTrigger"], descendants: true }, { propertyName: "fromElement", first: true, predicate: ["fromElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<button class=\"amdg-filter-open-btn amdg-layout-container\"\n    mat-stroked-button [color]=\"filterApplied ? 'accent': 'none'\"\n    type=\"button\" #menuTrigger=\"matMenuTrigger\"\n    [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n    @if (!filterApplied) {\n        <span class=\"amdg-placeholder amdg-font-weight-normal\">Unfiltered</span>\n    } @else {\n        <span class=\"amdg-text-truncate\">{{tagValuesApplied ? tagValuesApplied[0] : null }}</span>\n        @if (tagValuesApplied.length > 1) {\n            <span class=\"amdg-additional-selection\">\n                (+{{tagValuesApplied.length - 1}} {{tagValuesApplied.length === 2 ? 'other' : 'others'}})\n            </span>\n        }\n    }\n  <div class=\"amdg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"amdg-overflow-hidden\">\n  <div class=\"amdg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\" (keydown.shift.tab)=\"$event.stopPropagation()\">\n    <div class=\"amdg-layout-container\">\n      <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\" class=\"amdg-mr-2 amdg-small-stroked-button\">Filter</button>\n      <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset()\" class=\"amdg-small-stroked-button\">Reset</button>\n    </div>\n    <div class=\"amdg-layout-container amdg-mt-2\">\n      <mat-form-field class=\"amdg-tag-input\">\n        <mat-label>Add Tag</mat-label>\n        <input matInput #fromElement type=\"text\" [formControl]=\"tagValue\" (keydown.enter)=\"addTagValue($event);\" (paste)=\"stringPaste($event)\" (keypress)=\"tagValueKeypress($event)\">\n        <mat-error>{{error}}</mat-error>\n      </mat-form-field>\n      <mat-icon class=\"amdg-cursor-pointer\" mat-ripple color=\"primary\" (click)=\"addTagValue($event);\">add</mat-icon>\n    </div>\n    <div class=\"amdg-layout-container\">\n      <mat-divider class=\"amdg-w-100 mt-1\"></mat-divider>\n    </div>\n    @if (tagValues.length === 0) {\n        <p class=\"amdg-text-center amdg-mt-2 amdg-text-muted\">No Tags entered</p>\n    } @else {\n        <div class=\"amdg-tags-container amdg-p-3\">\n          <mat-chip-set>\n            @for (tag of tagValues; track tag; let i = $index) {\n                <mat-chip [removable]=\"true\" (removed)=\"tagValues.splice(i, 1)\">\n                  {{tag}} <mat-icon matChipRemove>cancel</mat-icon>\n                </mat-chip>\n            }\n          </mat-chip-set>\n        </div>\n    }\n\n  </div>\n</mat-menu>\n", styles: [".amdg-placeholder{opacity:.6}.amdg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.amdg-filter-container .amdg-tags-container{max-height:300px;overflow-y:auto}.amdg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:#fff}.amdg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.amdg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.amdg-tag-input{width:calc(100% - 30px)}.amdg-additional-selection{opacity:.75;font-size:.75em;color:#000000de}\n"], dependencies: [{ kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i4.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "directive", type: i5.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i7$1.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i8.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["role", "id", "aria-label", "aria-description", "value", "color", "removable", "highlighted", "disableRipple", "disabled"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "directive", type: i8.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i8.MatChipSet, selector: "mat-chip-set", inputs: ["disabled", "role", "tabIndex"] }, { kind: "directive", type: i4$2.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: TagFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amdg-tag-filter', standalone: false, template: "<button class=\"amdg-filter-open-btn amdg-layout-container\"\n    mat-stroked-button [color]=\"filterApplied ? 'accent': 'none'\"\n    type=\"button\" #menuTrigger=\"matMenuTrigger\"\n    [matMenuTriggerFor]=\"numberFilterMenu\" (menuOpened)=\"menuOpened()\">\n    @if (!filterApplied) {\n        <span class=\"amdg-placeholder amdg-font-weight-normal\">Unfiltered</span>\n    } @else {\n        <span class=\"amdg-text-truncate\">{{tagValuesApplied ? tagValuesApplied[0] : null }}</span>\n        @if (tagValuesApplied.length > 1) {\n            <span class=\"amdg-additional-selection\">\n                (+{{tagValuesApplied.length - 1}} {{tagValuesApplied.length === 2 ? 'other' : 'others'}})\n            </span>\n        }\n    }\n  <div class=\"amdg-select-arrow\"></div>\n</button>\n\n<mat-menu #numberFilterMenu=\"matMenu\" class=\"amdg-overflow-hidden\">\n  <div class=\"amdg-filter-container\" (click)=\"$event.stopPropagation()\" (keydown.tab)=\"$event.stopPropagation()\" (keydown.shift.tab)=\"$event.stopPropagation()\">\n    <div class=\"amdg-layout-container\">\n      <button mat-stroked-button type=\"button\" color=\"primary\" (click)=\"validate()\" class=\"amdg-mr-2 amdg-small-stroked-button\">Filter</button>\n      <button mat-stroked-button type=\"button\" color=\"warn\" (click)=\"reset()\" class=\"amdg-small-stroked-button\">Reset</button>\n    </div>\n    <div class=\"amdg-layout-container amdg-mt-2\">\n      <mat-form-field class=\"amdg-tag-input\">\n        <mat-label>Add Tag</mat-label>\n        <input matInput #fromElement type=\"text\" [formControl]=\"tagValue\" (keydown.enter)=\"addTagValue($event);\" (paste)=\"stringPaste($event)\" (keypress)=\"tagValueKeypress($event)\">\n        <mat-error>{{error}}</mat-error>\n      </mat-form-field>\n      <mat-icon class=\"amdg-cursor-pointer\" mat-ripple color=\"primary\" (click)=\"addTagValue($event);\">add</mat-icon>\n    </div>\n    <div class=\"amdg-layout-container\">\n      <mat-divider class=\"amdg-w-100 mt-1\"></mat-divider>\n    </div>\n    @if (tagValues.length === 0) {\n        <p class=\"amdg-text-center amdg-mt-2 amdg-text-muted\">No Tags entered</p>\n    } @else {\n        <div class=\"amdg-tags-container amdg-p-3\">\n          <mat-chip-set>\n            @for (tag of tagValues; track tag; let i = $index) {\n                <mat-chip [removable]=\"true\" (removed)=\"tagValues.splice(i, 1)\">\n                  {{tag}} <mat-icon matChipRemove>cancel</mat-icon>\n                </mat-chip>\n            }\n          </mat-chip-set>\n        </div>\n    }\n\n  </div>\n</mat-menu>\n", styles: [".amdg-placeholder{opacity:.6}.amdg-filter-container{width:260px;min-height:60px;display:block;border-radius:4px;overflow:hidden;font-size:12px}.amdg-filter-container .amdg-tags-container{max-height:300px;overflow-y:auto}.amdg-filter-open-btn{line-height:26px!important;font-size:inherit;padding:0 4px;width:100%;background:#fff}.amdg-filter-open-btn ::ng-deep .mat-button-wrapper{display:flex!important;justify-content:space-between;align-items:center;width:100%}.amdg-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.amdg-tag-input{width:calc(100% - 30px)}.amdg-additional-selection{opacity:.75;font-size:.75em;color:#000000de}\n"] }]
        }], ctorParameters: () => [], propDecorators: { initialFilter: [{
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

class FilterHeaderComponent {
    constructor() {
        this.heading = {
            display: null,
            type: 'string',
            sort: '',
            filterType: null,
            disableSorting: false,
            disableFiltering: false,
            other: {}
        };
        this.initialFilters = [];
        this.resetFilters = null;
        this.filter = new EventEmitter();
    }
    ngOnInit() {
        const i = this.initialFilters.findIndex((filter) => filter.field === this.heading.fieldName);
        if (i !== -1) {
            this.initialFilter = this.initialFilters[i];
        }
    }
    filterObjCreated(ev) {
        this.filter.emit({ field: this.heading.fieldName, operator: ev.operator, value: ev.value });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: FilterHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.1", type: FilterHeaderComponent, isStandalone: false, selector: "amdg-filter-header", inputs: { heading: "heading", initialFilters: "initialFilters", resetFilters: "resetFilters" }, outputs: { filter: "filter" }, ngImport: i0, template: "<div class=\"amdg-filter-component\">\n    @if (heading.disableFiltering !== true) {\n        @if (heading.type == 'date') {\n            <amdg-date-filter\n                class=\"amdg-w-100\"\n                [initialFilter]=\"initialFilter\"\n                [resetFilters]=\"resetFilters\"\n                (filter)=\"filterObjCreated($event)\">\n            </amdg-date-filter>\n        } @else if (heading.type === 'string') {\n            @switch (heading.filterType) {\n                @case ('multi-select') {\n                    <amdg-multi-select\n                        class=\"amdg-w-100\"\n                        [initialFilter]=\"initialFilter\"\n                        [resetFilters]=\"resetFilters\"\n                        [filterConfig]=\"heading.other\"\n                        (filter)=\"filterObjCreated($event)\">\n                    </amdg-multi-select>\n                }\n                @case ('tag') {\n                    <amdg-tag-filter\n                        class=\"amdg-w-100\"\n                        [initialFilter]=\"initialFilter\"\n                        [resetFilters]=\"resetFilters\"\n                        (filter)=\"filterObjCreated($event)\">\n                    </amdg-tag-filter>\n                }\n                @default {\n                    <amdg-string-filter\n                        class=\"amdg-w-100\"\n                        [initialFilter]=\"initialFilter\"\n                        [resetFilters]=\"resetFilters\"\n                        (filter)=\"filterObjCreated($event)\">\n                    </amdg-string-filter>\n                }\n            }\n        } @else if (heading.type === 'number' || heading.type === 'currency') {\n            @switch (heading.filterType) {\n                @case ('tag') {\n                    <amdg-tag-filter\n                        class=\"amdg-w-100\"\n                        [initialFilter]=\"initialFilter\"\n                        [resetFilters]=\"resetFilters\"\n                        [numbersOnly]=\"true\"\n                        (filter)=\"filterObjCreated($event)\">\n                    </amdg-tag-filter>\n                }\n                @default {\n                    <amdg-number-filter\n                        class=\"amdg-w-100\"\n                        [initialFilter]=\"initialFilter\"\n                        [resetFilters]=\"resetFilters\"\n                        (filter)=\"filterObjCreated($event)\">\n                    </amdg-number-filter>\n                }\n            }\n        }\n    }\n</div>\n", styles: [".amdg-filter-component{padding:3px 0;display:inline-flex!important;white-space:nowrap!important;width:100%;position:relative;align-items:center}\n"], dependencies: [{ kind: "component", type: MultiSelectComponent, selector: "amdg-multi-select", inputs: ["initialFilter", "resetFilters", "filterConfig"], outputs: ["filter"] }, { kind: "component", type: NumberFilterComponent, selector: "amdg-number-filter", inputs: ["initialFilter", "resetFilters"], outputs: ["filter"] }, { kind: "component", type: DateFilterComponent, selector: "amdg-date-filter", inputs: ["initialFilter", "resetFilters"], outputs: ["filter"] }, { kind: "component", type: StringFilterComponent, selector: "amdg-string-filter", inputs: ["initialFilter", "resetFilters"], outputs: ["filter"] }, { kind: "component", type: TagFilterComponent, selector: "amdg-tag-filter", inputs: ["initialFilter", "resetFilters", "numbersOnly"], outputs: ["filter"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: FilterHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amdg-filter-header', standalone: false, template: "<div class=\"amdg-filter-component\">\n    @if (heading.disableFiltering !== true) {\n        @if (heading.type == 'date') {\n            <amdg-date-filter\n                class=\"amdg-w-100\"\n                [initialFilter]=\"initialFilter\"\n                [resetFilters]=\"resetFilters\"\n                (filter)=\"filterObjCreated($event)\">\n            </amdg-date-filter>\n        } @else if (heading.type === 'string') {\n            @switch (heading.filterType) {\n                @case ('multi-select') {\n                    <amdg-multi-select\n                        class=\"amdg-w-100\"\n                        [initialFilter]=\"initialFilter\"\n                        [resetFilters]=\"resetFilters\"\n                        [filterConfig]=\"heading.other\"\n                        (filter)=\"filterObjCreated($event)\">\n                    </amdg-multi-select>\n                }\n                @case ('tag') {\n                    <amdg-tag-filter\n                        class=\"amdg-w-100\"\n                        [initialFilter]=\"initialFilter\"\n                        [resetFilters]=\"resetFilters\"\n                        (filter)=\"filterObjCreated($event)\">\n                    </amdg-tag-filter>\n                }\n                @default {\n                    <amdg-string-filter\n                        class=\"amdg-w-100\"\n                        [initialFilter]=\"initialFilter\"\n                        [resetFilters]=\"resetFilters\"\n                        (filter)=\"filterObjCreated($event)\">\n                    </amdg-string-filter>\n                }\n            }\n        } @else if (heading.type === 'number' || heading.type === 'currency') {\n            @switch (heading.filterType) {\n                @case ('tag') {\n                    <amdg-tag-filter\n                        class=\"amdg-w-100\"\n                        [initialFilter]=\"initialFilter\"\n                        [resetFilters]=\"resetFilters\"\n                        [numbersOnly]=\"true\"\n                        (filter)=\"filterObjCreated($event)\">\n                    </amdg-tag-filter>\n                }\n                @default {\n                    <amdg-number-filter\n                        class=\"amdg-w-100\"\n                        [initialFilter]=\"initialFilter\"\n                        [resetFilters]=\"resetFilters\"\n                        (filter)=\"filterObjCreated($event)\">\n                    </amdg-number-filter>\n                }\n            }\n        }\n    }\n</div>\n", styles: [".amdg-filter-component{padding:3px 0;display:inline-flex!important;white-space:nowrap!important;width:100%;position:relative;align-items:center}\n"] }]
        }], ctorParameters: () => [], propDecorators: { heading: [{
                type: Input
            }], initialFilters: [{
                type: Input
            }], resetFilters: [{
                type: Input
            }], filter: [{
                type: Output
            }] } });

class ColumnFilterPipe {
    transform(value, ...args) {
        const headings = [];
        value.forEach(heading => {
            if (heading.show || heading.show === undefined) {
                headings.push(heading);
            }
        });
        return headings;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: ColumnFilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.2.1", ngImport: i0, type: ColumnFilterPipe, isStandalone: false, name: "columnFilter" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: ColumnFilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'columnFilter',
                    standalone: false
                }]
        }] });

class TemplatePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, args) {
        let modifiedTemplate = value;
        const splitOne = value.split('{{');
        splitOne.splice(0, 1); // remove first element
        splitOne.forEach((item) => {
            const [customVariable] = item.split('}}');
            modifiedTemplate = modifiedTemplate.replaceAll('{{' + customVariable + '}}', args[customVariable]);
        });
        return this.sanitizer.bypassSecurityTrustHtml(modifiedTemplate);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: TemplatePipe, deps: [{ token: i1$3.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.2.1", ngImport: i0, type: TemplatePipe, isStandalone: false, name: "template" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: TemplatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'template',
                    standalone: false
                }]
        }], ctorParameters: () => [{ type: i1$3.DomSanitizer }] });

class ChildGridComponent {
    constructor(changeDetectorRef, gridService, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.gridService = gridService;
        this.ngZone = ngZone;
        this.responseEmit = new EventEmitter();
        this.buttonClickEmit = new EventEmitter();
        this.filtersChangedEmit = new EventEmitter();
        this.headings = [];
        this.url = '';
        this.entity = null;
        this.loadingData = false;
        this.response = { gridData: [], totalCount: 0 };
        this.responseBackup = { gridData: [], totalCount: 0 };
        this.gridItems = [];
        this.recordsPerPage = 100;
        this.gridPostSubscription = new Subscription();
        this.currentPage = 1;
        this.serverSidePagination = false;
        this.filters = [];
        this.sortObj = {
            sort: null,
            sortField: null
        };
        this.selectedRows = [];
    }
    ngOnInit() {
        this.getData({ pageNo: 1, recordsPerPage: this.recordsPerPage });
    }
    sort(ev) {
        let index = 0;
        this.headings.forEach((heading, i) => {
            if (heading.fieldName === ev.fieldName) {
                index = i;
            }
            else {
                heading.sort = null;
            }
        });
        const sortObj = {
            sort: this.headings[index]?.sort,
            sortField: this.headings[index]?.sort ? this.headings[index]?.fieldName : null
        };
        this.sortObj = sortObj;
        if (this.serverSidePagination) {
            this.getData({ pageNo: 1, recordsPerPage: this.recordsPerPage });
        }
        else {
            this.pageChanged({ pageNo: 1, recordsPerPage: this.recordsPerPage });
        }
    }
    filter(ev) {
        let filterIndex = null;
        this.filters.forEach((filter, i) => {
            if (filter.field === ev.field) {
                filterIndex = i;
            }
        });
        if (filterIndex !== null) {
            if (ev.value) {
                this.filters[filterIndex] = ev;
            }
            else {
                this.filters.splice(filterIndex, 1);
            }
        }
        else {
            if (ev.value) {
                this.filters.push(ev);
            }
        }
        this.filtersChangedEmit.emit(this.filters);
        if (this.serverSidePagination === false) {
            this.ngZone.runOutsideAngular(() => {
                const operators = {
                    between: (field, range) => {
                        const [min, max] = range.split('-').map(Number);
                        return min <= parseInt(field, 10) && parseInt(field, 10) <= max;
                    },
                    betweendates: (field, range) => {
                        const [min, max] = range.split('-');
                        return new Date(min) <= new Date(field) && new Date(field) <= new Date(max);
                    },
                    eq: (field, value) => {
                        if (value.includes(',') || field.includes(',')) {
                            // return value.split(',').includes(field);
                            return value.split(',').some(item => field.split(',').includes(item));
                        }
                        else {
                            return field === value;
                        }
                    },
                    neq: (field, value) => field !== value,
                    greaterorequal: (field, value) => field >= value,
                    greaterthan: (field, value) => field > value,
                    lessthanorequal: (field, value) => field <= value,
                    lessthan: (field, value) => field < value,
                    contains: (field, value) => field.includes(value),
                    startswith: (field, value) => field.startsWith(value),
                    endswith: (field, value) => field.endsWith(value),
                    blank: (field) => !field,
                };
                const result = this.responseBackup.gridData.filter(o => this.filters.every(({ field, operator, value }) => {
                    return operators[operator](makeSearchFriendly(o[field]), makeSearchFriendly(value));
                }));
                function makeSearchFriendly(searchTerm) {
                    let searchableString = searchTerm ? searchTerm : '';
                    return searchableString.toString().toLowerCase().trim();
                }
                this.ngZone.run(() => {
                    this.response.gridData = result;
                });
            });
            this.pageChanged({ pageNo: 1, recordsPerPage: this.recordsPerPage });
        }
        else {
            this.getData({ pageNo: 1, recordsPerPage: this.recordsPerPage });
        }
    }
    openLinkInNewTab(link, params = {}) {
        let paramString = '?';
        // if (isEmpty(params)) {
        //   paramString = '';
        // }
        Object.keys(params).forEach(key => {
            paramString += key + '=' + params[key];
        });
        window.open(link + paramString);
    }
    openExternalLinkInNewTab(link, params) {
        if (params) {
            window.open(link + '?' + params);
        }
        else {
            window.open(link);
        }
    }
    goToLink(fieldName, item, click) {
        this.buttonClickEmit.emit({ fieldName, item, click });
    }
    // page change event
    getData({ pageNo, recordsPerPage }) {
        if (this.gridPostSubscription) {
            this.gridPostSubscription.unsubscribe();
            this.gridPostSubscription = new Subscription();
        }
        this.recordsPerPage = recordsPerPage;
        this.loadingData = true;
        this.currentPage = pageNo;
        this.changeDetectorRef.detectChanges();
        let body = null;
        if (this.serverSidePagination) {
            body = {
                entity: this.entity,
                page: this.currentPage,
                perPage: recordsPerPage,
                filters: this.filters,
                ...this.sortObj
            };
        }
        else {
            body = {
                entity: this.entity
            };
        }
        console.log(body);
        this.gridPostSubscription = this.gridService.getAnyPost(this.url, body).subscribe(data => {
            if (data.statusCode === 200 || data.success) {
                const gridData = this.linkCreationInterceptor(data.payload.gridData);
                this.selectedRows = [];
                this.response = { gridData, totalCount: data.payload.totalCount };
                this.responseBackup = { gridData, totalCount: data.payload.totalCount };
                this.gridItems = gridData;
                this.responseEmit.emit(this.response);
                if (this.serverSidePagination) {
                    this.loadingData = false;
                    this.changeDetectorRef.detectChanges();
                    // document.getElementById('amdgScrollViewport').scrollTop = 0;
                    // setTimeout(() => {
                    //   this.calculateGridWidth();
                    // }, 100);
                }
                else {
                    this.pageChanged({ pageNo: this.currentPage, recordsPerPage: this.recordsPerPage });
                }
            }
        });
    }
    linkCreationInterceptor(gridData) {
        const urlHeadings = [];
        this.headings.forEach(heading => {
            if (heading?.clickable === 'url') {
                urlHeadings.push({
                    type: heading.fieldName,
                    urlTemplate: heading.other?.urlTemplate,
                    queryParams: heading.other?.queryParams,
                    source: heading.other?.source,
                });
            }
        });
        const items = gridData.map(item => {
            const obj = {};
            urlHeadings.forEach(heading => {
                const splitUrl = heading.urlTemplate.split('/');
                const newUrl = [];
                splitUrl.forEach((urlItem) => {
                    if (urlItem.includes(':')) {
                        urlItem = item[urlItem.substring(1)];
                    }
                    newUrl.push(urlItem);
                });
                obj[heading.type + 'Link'] = newUrl.join('/');
                if (heading.queryParams) {
                    let objParams = null;
                    if (heading.source === 'external') {
                        objParams = '';
                        Object.keys(heading.queryParams).forEach(field => {
                            objParams += field + '=' + item[heading.queryParams[field]] + '&';
                        });
                        objParams = objParams.slice(0, -1);
                    }
                    else {
                        objParams = {};
                        Object.keys(heading.queryParams).forEach(field => {
                            objParams[field] = item[heading.queryParams[field]];
                        });
                    }
                    obj[heading.type + 'QueryParams'] = objParams;
                }
            });
            return { ...item, ...obj };
        });
        return items;
    }
    sortAscending(sortField) {
        let sortOrder = 1;
        if (sortField[0] === '-') {
            sortOrder = -1;
            sortField = sortField.substr(1);
        }
        return (a, b) => {
            const result = (a[sortField] < b[sortField]) ? -1 : (a[sortField] > b[sortField]) ? 1 : 0;
            return result * sortOrder;
        };
    }
    pageChanged({ pageNo, recordsPerPage }) {
        this.loadingData = true;
        this.selectedRows = [];
        this.changeDetectorRef.detectChanges();
        this.recordsPerPage = recordsPerPage;
        this.currentPage = pageNo;
        const { sort, sortField } = this.sortObj;
        const gridData = JSON.parse(JSON.stringify(this.response.gridData)); // get deep clone
        if (sort && sortField) {
            gridData.sort(this.sortAscending(sortField));
            if (sort === 'desc') {
                gridData.reverse(); // sort Descending
            }
        }
        const startingRecord = (this.recordsPerPage * this.currentPage) - this.recordsPerPage + 1;
        const endingRecord = this.recordsPerPage * this.currentPage;
        const gridItemsForDisplay = [];
        for (let i = startingRecord - 1; i < endingRecord; i++) {
            if (gridData[i]) {
                gridItemsForDisplay.push(gridData[i]);
            }
            else {
                break;
            }
        }
        this.gridItems = gridItemsForDisplay;
        this.loadingData = false;
        this.changeDetectorRef.detectChanges();
        // document.getElementById('amdgScrollViewport').scrollTop = 0;
        // setTimeout(() => {
        //   this.calculateGridWidth();
        // }, 100);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: ChildGridComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: GridService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.1", type: ChildGridComponent, isStandalone: false, selector: "amdg-child-grid", inputs: { headings: "headings", url: "url", entity: "entity", serverSidePagination: "serverSidePagination" }, outputs: { responseEmit: "responseEmit", buttonClickEmit: "buttonClickEmit", filtersChangedEmit: "filtersChangedEmit" }, ngImport: i0, template: "<mat-card id=\"grid\" style=\"display: table;\">\n  <table>\n    <thead>\n      @for (heading of headings | columnFilter; track heading.fieldName) {\n        <th [style.width]=\"heading.width\">\n          <amdg-sort-header [heading]=\"heading\" (filter)=\"sort($event)\"></amdg-sort-header>\n        </th>\n      }\n    </thead>\n    <thead>\n      @for (heading of headings | columnFilter; track heading.fieldName) {\n        <th [style.width]=\"heading.width\">\n          <amdg-filter-header [heading]=\"heading\" (filter)=\"filter($event)\"></amdg-filter-header>\n        </th>\n      }\n    </thead>\n    @if (loadingData) {\n      <mat-progress-bar mode=\"indeterminate\" class=\"amdg-position-absolute amdg-z-index-1\"></mat-progress-bar>\n    }\n    <tbody>\n    @for (item of gridItems; track item; let odd = $odd; let i = $index) {\n      <tr [ngClass]=\"{ odd: odd, rowSelected: item.gridItemSelected == true}\">\n        @for (heading of headings | columnFilter; track heading.fieldName) {\n          <td\n              [style.width]=\"heading.width\"\n              [style.textAlign]=\"heading.textAlign\"\n              [style.background]=\"heading.background\"\n              [style.color]=\"heading.color\"\n              [style.fontWeight]=\"heading.fontWeight\"\n              [style.fontStyle]=\"heading.fontStyle\">\n\n            @switch (heading.type) {\n\n              @case ('image-url') {\n                <div style=\"height: 48px\" >\n                  <img [src]=\"item[heading.fieldName]\" alt=\"grid image item\" width=\"40px\" height=\"40px\" class=\"amdg-mt-1 amdg-image-tag\"  [matMenuTriggerFor]=\"imageMenu\" #trigger=\"matMenuTrigger\" (mouseenter)=\"trigger.openMenu()\" (mouseleave)=\"trigger.closeMenu()\">\n                  <mat-menu #imageMenu=\"matMenu\" [hasBackdrop]=\"false\" class=\"amdg-image-menu-padding\">\n                    <img [src]=\"item[heading.fieldName]\" class=\"amdg-image-tag\" alt=\"grid image item\" width=\"150px\" height=\"150px\">\n                  </mat-menu>\n                </div>\n              }\n\n              @case ('button-group') {\n                <span>\n                  @if (heading.other && heading.other.buttons.length === 1) {\n                    <button [disabled]=\"item[heading.other.buttons[0].disableField]\" color=\"primary\" class=\"amdg-button-group-btn amdg-mr-2\" type=\"button\" mat-button (click)=\"goToLink(heading.fieldName, item, heading.other.buttons[0].display)\">\n                      <mat-icon class=\"amdg-mr-2\">{{heading.other.buttons[0].icon}}</mat-icon>\n                      {{heading.other.buttons[0].display}}\n                    </button>\n                  } @else if (heading.other && heading.other.buttons.length > 1) {\n                    <button class=\"amdg-button-group-btn\" mat-button color=\"primary\" [matMenuTriggerFor]=\"gridButtonListMenu\" [disabled]=\"item[heading.other.mainButton.disableField]\"> {{heading.other.mainButton.display}} <mat-icon>{{heading.other.mainButton.icon}}</mat-icon></button>\n                    <mat-menu #gridButtonListMenu=\"matMenu\" xPosition=\"before\">\n                      @for (btn of heading.other.buttons; track btn) {\n                        <button class=\"amdg-mat-menu-item\" [disabled]=\"item[btn.disableField]\" mat-menu-item (click)=\"goToLink(heading.fieldName, item, btn.display)\">\n                          <mat-icon class=\"amdg-mr-2 amdg-fs-20\">{{btn.icon}}</mat-icon>\n                          {{btn.display}}\n                        </button>\n                      }\n                    </mat-menu>\n                  }\n                </span>\n              }\n\n              @case ('currency') {\n                <span>\n                  {{item[heading.fieldName] | currency}}\n                </span>\n              }\n\n              @default {\n                <span [title]=\"item[heading.title] ? item[heading.title] : item[heading.fieldName]\">\n                  @if (heading?.clickable) {\n                    @if (heading.clickable === 'url') {\n                      @if (heading.other.source === 'external') {\n                        @if (heading.other && heading.other['urlTemplate']) {\n                          <a mat-button disableRipple color=\"primary\" class=\"amdg-link\" [ngClass]=\"{'amdg-link-disabled': loadingData}\" [href]=\"item[heading.fieldName + 'Link'] + (item[heading.fieldName + 'QueryParams'] ? '?' + item[heading.fieldName + 'QueryParams'] : '')\">{{item[heading.fieldName]}}</a>\n                        }\n                        @if (heading.other && heading.other.openTab && item[heading.fieldName]) {\n                          <mat-icon color=\"primary\" class=\"amdg-fs-12 amdg-icon-external-link\" [ngClass]=\"{'link-amdg-link-disabled': loadingData}\" (click)=\"openExternalLinkInNewTab(item[heading.fieldName + 'Link'], item[heading.fieldName + 'QueryParams'])\">launch</mat-icon>\n                        }\n                      } @else {\n                        @if (heading.other && heading.other['urlTemplate']) {\n                          <a mat-button disableRipple color=\"primary\" class=\"amdg-link\" [ngClass]=\"{'link-amdg-link-disabled': loadingData}\" [routerLink]=\"item[heading.fieldName + 'Link']\" [queryParams]=\"item[heading.fieldName + 'QueryParams']\">{{item[heading.fieldName]}}</a>\n                        }\n                        @if (heading.other && heading.other.openTab && item[heading.fieldName]) {\n                          <mat-icon color=\"primary\" class=\"amdg-fs-12 amdg-icon-external-link\" [ngClass]=\"{'link-amdg-link-disabled': loadingData}\" (click)=\"openLinkInNewTab(item[heading.fieldName + 'Link'], item[heading.fieldName + 'QueryParams'])\">launch</mat-icon>\n                        }\n                      }\n                    }\n                    @if (heading.clickable === 'button') {\n                       <a mat-button disableRipple color=\"primary\" class=\"amdg-link\" (click)=\"goToLink(heading.fieldName, item, item[heading.fieldName])\">\n                         @if (heading.prefix) {\n                           <span [innerHTML]=\"heading.prefix | template : item\"></span>\n                         }\n                         {{item[heading.fieldName]}}\n                         @if (heading.suffix) {\n                           <span [innerHTML]=\"heading.suffix | template : item\"></span>\n                         }\n                      </a>\n                    }\n                  } @else {\n                    @if (heading.prefix) {\n                      <span [innerHTML]=\"heading.prefix | template : item\"></span>\n                    }\n                    {{item[heading.fieldName]}}\n                    @if (heading.suffix) {\n                      <span [innerHTML]=\"heading.suffix | template : item\"></span>\n                    }\n                  }\n                </span>\n              }\n            }\n          </td>\n        }\n      </tr>\n    }\n    </tbody>\n  </table>\n\n  <amdg-pagination\n      [loadingData]=\"loadingData\"\n      [noOfTotalRecords]=\"serverSidePagination ? (response.totalCount ? response.totalCount : 0) : response.gridData.length\"\n      [noOfRecords]=\"response.gridData.length\"\n      [noOfSelectedRow]=\"selectedRows.length\"\n      [currentPage]=\"currentPage\"\n      [disableFullScreenToggle]=\"true\"\n      [showNoOfRecords]=\"false\"\n      (pageChanged)=\"serverSidePagination ? getData($event) : pageChanged($event)\">\n  </amdg-pagination>\n</mat-card>\n", styles: ["", ".mat-menu-panel.amdg-column-control-menu{width:320px;max-width:320px}.amdg-column-control-container{max-height:420px;overflow:hidden}.amdg-column-control-container .amdg-cdk-drop-list{padding:0 9px;min-height:60px;display:block;border-radius:4px;max-height:345px;overflow:auto}.amdg-column-control-container .amdg-cdk-drop-list div div mat-icon{font-size:18px;top:2px;position:relative;cursor:move}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;background:#fff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.amdg-cdk-drop-list:last-child{border:none}.amdg-cdk-drop-list.cdk-drop-list-dragging .column-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.amdg-top-button,#amdg-grid-container .amdg-top-right-button button,#amdg-grid-container #column-control-btn-card button{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0 10px;line-height:25px!important;height:25px;border:none!important;font-weight:400;font-size:12px;background:#7676761a}#amdg-grid-container #column-control-btn-card{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0 0 0 1px}#amdg-grid-container .amdg-top-right-button{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-left:8px;padding:0;display:inline-block}#amdg-grid-container #grid{overflow:hidden;font-size:12px;position:relative;padding:0}#amdg-grid-container #grid.grid-transparency{background:#ffffffe6}#amdg-grid-container #grid .grid-nav-btns,#amdg-grid-container #grid .navigate-right-btn,#amdg-grid-container #grid .navigate-left-btn{position:absolute;top:calc(50% - 25px);z-index:1;background-color:#00000080;color:#fff;font-size:18px;min-width:40px;padding:0;height:50px}#amdg-grid-container #grid .navigate-left-btn{left:0;border-top-left-radius:0;border-bottom-left-radius:0}#amdg-grid-container #grid .navigate-right-btn{right:0;border-top-right-radius:0;border-bottom-right-radius:0}#amdg-grid-container #grid .navigate-icons{line-height:40px;font-size:40px;height:40px;width:40px}#amdg-grid-container #grid .empty-records{position:absolute;top:calc(50% - 25px);z-index:1;background-color:#00000080;color:#fff;font-size:16px;min-width:40px;margin:0 auto;right:0;left:0;width:190px;padding:10px;border-radius:4px;text-align:center;box-sizing:border-box}#amdg-grid-container #grid .horizontal-scroll{width:100%}#amdg-grid-container #grid .horizontal-scroll cdk-virtual-scroll-viewport{min-height:300px}#amdg-grid-container #grid .vertical-scroll{overflow-y:auto;height:100%}#amdg-grid-container #grid table{border-collapse:collapse;table-layout:fixed;width:100%;position:relative}#amdg-grid-container #grid table thead{background:#7676761a}#amdg-grid-container #grid th{border-bottom:1px solid rgba(118,118,118,.3);height:34px}#amdg-grid-container #grid th,#amdg-grid-container #grid td{padding:0 8px;border-left:1px solid rgba(118,118,118,.3);width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start;font-weight:400;box-sizing:border-box;line-height:20px}#amdg-grid-container #grid tr{height:20px;transition:all 10ms ease-out}#amdg-grid-container #grid tr:hover{transition:all ease .1s;background-color:#7676764d}#amdg-grid-container #grid tr.empty:hover{background-color:inherit}#amdg-grid-container #grid tr.rowSelected{background:#0099ff4d!important}#amdg-grid-container #grid tr.expanded{height:40px;font-size:1.1em}#amdg-grid-container #grid .odd{background-color:#7676761a}#amdg-grid-container #grid.fullscreen{position:fixed;inset:0;z-index:1000}.amdg-sticky{position:sticky!important;left:0;z-index:1!important;background:#f1f1f1}.amdg-selection{width:34px!important}.amdg-selection-breakdown{width:33px!important;border-left:0!important}#amdgScrollViewport{scroll-behavior:smooth}.amdg-link{background-color:transparent;cursor:pointer!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;font-weight:500;font-size:inherit;text-decoration:none!important;padding:0!important;min-width:auto!important;line-height:normal!important;border-radius:0!important;display:inline!important}.amdg-link-disabled{pointer-events:none}.amdg-icon-external-link{position:relative;top:3px;cursor:pointer;margin-left:8px;height:auto!important}.amdg-icon-external-link:hover{text-decoration:none}.amdg-button-group-btn{line-height:19px!important;height:19px;font-size:inherit}.amdg-button-group-btn mat-icon{height:20px;width:20px;font-size:18px}.amdg-image-tag{object-fit:contain}.amdg-content-closed{height:0;overflow:hidden;transition:all .11s ease-out}.amdg-content-opened{transition:all .11s ease-out}.amdg-h-150px{max-height:150px;overflow-x:hidden;border-top:2px solid rgba(118,118,118,.3);border-bottom:2px solid rgba(118,118,118,.3)}.amdg-breakdown-table-border-top{border-top:2px solid rgba(118,118,118,.3)}.amdg-animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}mat-checkbox label{margin:0!important}@-webkit-keyframes amdg-pulse{0%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.2,1.2,1.2)}to{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes amdg-pulse{0%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.2,1.2,1.2)}to{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.amdg-pulse{-webkit-animation-name:amdg-pulse;animation-name:amdg-pulse}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i4.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: i5.MatMenuItem, selector: "[mat-menu-item]", inputs: ["role", "disabled", "disableRipple"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i5.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "component", type: i6$2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "component", type: i7$2.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "directive", type: i8$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: PaginationComponent, selector: "amdg-pagination", inputs: ["noOfTotalRecords", "loadingData", "noOfRecords", "noOfSelectedRow", "currentPage", "disableFullScreenToggle", "showNoOfRecords", "pageSizes", "newRecordsPerPage"], outputs: ["pageChanged", "toggleFullScreen"] }, { kind: "component", type: SortHeaderComponent, selector: "amdg-sort-header", inputs: ["heading"], outputs: ["filter"] }, { kind: "component", type: FilterHeaderComponent, selector: "amdg-filter-header", inputs: ["heading", "initialFilters", "resetFilters"], outputs: ["filter"] }, { kind: "pipe", type: i2$1.CurrencyPipe, name: "currency" }, { kind: "pipe", type: ColumnFilterPipe, name: "columnFilter" }, { kind: "pipe", type: TemplatePipe, name: "template" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: ChildGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amdg-child-grid', changeDetection: ChangeDetectionStrategy.OnPush, standalone: false, template: "<mat-card id=\"grid\" style=\"display: table;\">\n  <table>\n    <thead>\n      @for (heading of headings | columnFilter; track heading.fieldName) {\n        <th [style.width]=\"heading.width\">\n          <amdg-sort-header [heading]=\"heading\" (filter)=\"sort($event)\"></amdg-sort-header>\n        </th>\n      }\n    </thead>\n    <thead>\n      @for (heading of headings | columnFilter; track heading.fieldName) {\n        <th [style.width]=\"heading.width\">\n          <amdg-filter-header [heading]=\"heading\" (filter)=\"filter($event)\"></amdg-filter-header>\n        </th>\n      }\n    </thead>\n    @if (loadingData) {\n      <mat-progress-bar mode=\"indeterminate\" class=\"amdg-position-absolute amdg-z-index-1\"></mat-progress-bar>\n    }\n    <tbody>\n    @for (item of gridItems; track item; let odd = $odd; let i = $index) {\n      <tr [ngClass]=\"{ odd: odd, rowSelected: item.gridItemSelected == true}\">\n        @for (heading of headings | columnFilter; track heading.fieldName) {\n          <td\n              [style.width]=\"heading.width\"\n              [style.textAlign]=\"heading.textAlign\"\n              [style.background]=\"heading.background\"\n              [style.color]=\"heading.color\"\n              [style.fontWeight]=\"heading.fontWeight\"\n              [style.fontStyle]=\"heading.fontStyle\">\n\n            @switch (heading.type) {\n\n              @case ('image-url') {\n                <div style=\"height: 48px\" >\n                  <img [src]=\"item[heading.fieldName]\" alt=\"grid image item\" width=\"40px\" height=\"40px\" class=\"amdg-mt-1 amdg-image-tag\"  [matMenuTriggerFor]=\"imageMenu\" #trigger=\"matMenuTrigger\" (mouseenter)=\"trigger.openMenu()\" (mouseleave)=\"trigger.closeMenu()\">\n                  <mat-menu #imageMenu=\"matMenu\" [hasBackdrop]=\"false\" class=\"amdg-image-menu-padding\">\n                    <img [src]=\"item[heading.fieldName]\" class=\"amdg-image-tag\" alt=\"grid image item\" width=\"150px\" height=\"150px\">\n                  </mat-menu>\n                </div>\n              }\n\n              @case ('button-group') {\n                <span>\n                  @if (heading.other && heading.other.buttons.length === 1) {\n                    <button [disabled]=\"item[heading.other.buttons[0].disableField]\" color=\"primary\" class=\"amdg-button-group-btn amdg-mr-2\" type=\"button\" mat-button (click)=\"goToLink(heading.fieldName, item, heading.other.buttons[0].display)\">\n                      <mat-icon class=\"amdg-mr-2\">{{heading.other.buttons[0].icon}}</mat-icon>\n                      {{heading.other.buttons[0].display}}\n                    </button>\n                  } @else if (heading.other && heading.other.buttons.length > 1) {\n                    <button class=\"amdg-button-group-btn\" mat-button color=\"primary\" [matMenuTriggerFor]=\"gridButtonListMenu\" [disabled]=\"item[heading.other.mainButton.disableField]\"> {{heading.other.mainButton.display}} <mat-icon>{{heading.other.mainButton.icon}}</mat-icon></button>\n                    <mat-menu #gridButtonListMenu=\"matMenu\" xPosition=\"before\">\n                      @for (btn of heading.other.buttons; track btn) {\n                        <button class=\"amdg-mat-menu-item\" [disabled]=\"item[btn.disableField]\" mat-menu-item (click)=\"goToLink(heading.fieldName, item, btn.display)\">\n                          <mat-icon class=\"amdg-mr-2 amdg-fs-20\">{{btn.icon}}</mat-icon>\n                          {{btn.display}}\n                        </button>\n                      }\n                    </mat-menu>\n                  }\n                </span>\n              }\n\n              @case ('currency') {\n                <span>\n                  {{item[heading.fieldName] | currency}}\n                </span>\n              }\n\n              @default {\n                <span [title]=\"item[heading.title] ? item[heading.title] : item[heading.fieldName]\">\n                  @if (heading?.clickable) {\n                    @if (heading.clickable === 'url') {\n                      @if (heading.other.source === 'external') {\n                        @if (heading.other && heading.other['urlTemplate']) {\n                          <a mat-button disableRipple color=\"primary\" class=\"amdg-link\" [ngClass]=\"{'amdg-link-disabled': loadingData}\" [href]=\"item[heading.fieldName + 'Link'] + (item[heading.fieldName + 'QueryParams'] ? '?' + item[heading.fieldName + 'QueryParams'] : '')\">{{item[heading.fieldName]}}</a>\n                        }\n                        @if (heading.other && heading.other.openTab && item[heading.fieldName]) {\n                          <mat-icon color=\"primary\" class=\"amdg-fs-12 amdg-icon-external-link\" [ngClass]=\"{'link-amdg-link-disabled': loadingData}\" (click)=\"openExternalLinkInNewTab(item[heading.fieldName + 'Link'], item[heading.fieldName + 'QueryParams'])\">launch</mat-icon>\n                        }\n                      } @else {\n                        @if (heading.other && heading.other['urlTemplate']) {\n                          <a mat-button disableRipple color=\"primary\" class=\"amdg-link\" [ngClass]=\"{'link-amdg-link-disabled': loadingData}\" [routerLink]=\"item[heading.fieldName + 'Link']\" [queryParams]=\"item[heading.fieldName + 'QueryParams']\">{{item[heading.fieldName]}}</a>\n                        }\n                        @if (heading.other && heading.other.openTab && item[heading.fieldName]) {\n                          <mat-icon color=\"primary\" class=\"amdg-fs-12 amdg-icon-external-link\" [ngClass]=\"{'link-amdg-link-disabled': loadingData}\" (click)=\"openLinkInNewTab(item[heading.fieldName + 'Link'], item[heading.fieldName + 'QueryParams'])\">launch</mat-icon>\n                        }\n                      }\n                    }\n                    @if (heading.clickable === 'button') {\n                       <a mat-button disableRipple color=\"primary\" class=\"amdg-link\" (click)=\"goToLink(heading.fieldName, item, item[heading.fieldName])\">\n                         @if (heading.prefix) {\n                           <span [innerHTML]=\"heading.prefix | template : item\"></span>\n                         }\n                         {{item[heading.fieldName]}}\n                         @if (heading.suffix) {\n                           <span [innerHTML]=\"heading.suffix | template : item\"></span>\n                         }\n                      </a>\n                    }\n                  } @else {\n                    @if (heading.prefix) {\n                      <span [innerHTML]=\"heading.prefix | template : item\"></span>\n                    }\n                    {{item[heading.fieldName]}}\n                    @if (heading.suffix) {\n                      <span [innerHTML]=\"heading.suffix | template : item\"></span>\n                    }\n                  }\n                </span>\n              }\n            }\n          </td>\n        }\n      </tr>\n    }\n    </tbody>\n  </table>\n\n  <amdg-pagination\n      [loadingData]=\"loadingData\"\n      [noOfTotalRecords]=\"serverSidePagination ? (response.totalCount ? response.totalCount : 0) : response.gridData.length\"\n      [noOfRecords]=\"response.gridData.length\"\n      [noOfSelectedRow]=\"selectedRows.length\"\n      [currentPage]=\"currentPage\"\n      [disableFullScreenToggle]=\"true\"\n      [showNoOfRecords]=\"false\"\n      (pageChanged)=\"serverSidePagination ? getData($event) : pageChanged($event)\">\n  </amdg-pagination>\n</mat-card>\n", styles: [".mat-menu-panel.amdg-column-control-menu{width:320px;max-width:320px}.amdg-column-control-container{max-height:420px;overflow:hidden}.amdg-column-control-container .amdg-cdk-drop-list{padding:0 9px;min-height:60px;display:block;border-radius:4px;max-height:345px;overflow:auto}.amdg-column-control-container .amdg-cdk-drop-list div div mat-icon{font-size:18px;top:2px;position:relative;cursor:move}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;background:#fff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.amdg-cdk-drop-list:last-child{border:none}.amdg-cdk-drop-list.cdk-drop-list-dragging .column-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.amdg-top-button,#amdg-grid-container .amdg-top-right-button button,#amdg-grid-container #column-control-btn-card button{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0 10px;line-height:25px!important;height:25px;border:none!important;font-weight:400;font-size:12px;background:#7676761a}#amdg-grid-container #column-control-btn-card{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0 0 0 1px}#amdg-grid-container .amdg-top-right-button{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-left:8px;padding:0;display:inline-block}#amdg-grid-container #grid{overflow:hidden;font-size:12px;position:relative;padding:0}#amdg-grid-container #grid.grid-transparency{background:#ffffffe6}#amdg-grid-container #grid .grid-nav-btns,#amdg-grid-container #grid .navigate-right-btn,#amdg-grid-container #grid .navigate-left-btn{position:absolute;top:calc(50% - 25px);z-index:1;background-color:#00000080;color:#fff;font-size:18px;min-width:40px;padding:0;height:50px}#amdg-grid-container #grid .navigate-left-btn{left:0;border-top-left-radius:0;border-bottom-left-radius:0}#amdg-grid-container #grid .navigate-right-btn{right:0;border-top-right-radius:0;border-bottom-right-radius:0}#amdg-grid-container #grid .navigate-icons{line-height:40px;font-size:40px;height:40px;width:40px}#amdg-grid-container #grid .empty-records{position:absolute;top:calc(50% - 25px);z-index:1;background-color:#00000080;color:#fff;font-size:16px;min-width:40px;margin:0 auto;right:0;left:0;width:190px;padding:10px;border-radius:4px;text-align:center;box-sizing:border-box}#amdg-grid-container #grid .horizontal-scroll{width:100%}#amdg-grid-container #grid .horizontal-scroll cdk-virtual-scroll-viewport{min-height:300px}#amdg-grid-container #grid .vertical-scroll{overflow-y:auto;height:100%}#amdg-grid-container #grid table{border-collapse:collapse;table-layout:fixed;width:100%;position:relative}#amdg-grid-container #grid table thead{background:#7676761a}#amdg-grid-container #grid th{border-bottom:1px solid rgba(118,118,118,.3);height:34px}#amdg-grid-container #grid th,#amdg-grid-container #grid td{padding:0 8px;border-left:1px solid rgba(118,118,118,.3);width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start;font-weight:400;box-sizing:border-box;line-height:20px}#amdg-grid-container #grid tr{height:20px;transition:all 10ms ease-out}#amdg-grid-container #grid tr:hover{transition:all ease .1s;background-color:#7676764d}#amdg-grid-container #grid tr.empty:hover{background-color:inherit}#amdg-grid-container #grid tr.rowSelected{background:#0099ff4d!important}#amdg-grid-container #grid tr.expanded{height:40px;font-size:1.1em}#amdg-grid-container #grid .odd{background-color:#7676761a}#amdg-grid-container #grid.fullscreen{position:fixed;inset:0;z-index:1000}.amdg-sticky{position:sticky!important;left:0;z-index:1!important;background:#f1f1f1}.amdg-selection{width:34px!important}.amdg-selection-breakdown{width:33px!important;border-left:0!important}#amdgScrollViewport{scroll-behavior:smooth}.amdg-link{background-color:transparent;cursor:pointer!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;font-weight:500;font-size:inherit;text-decoration:none!important;padding:0!important;min-width:auto!important;line-height:normal!important;border-radius:0!important;display:inline!important}.amdg-link-disabled{pointer-events:none}.amdg-icon-external-link{position:relative;top:3px;cursor:pointer;margin-left:8px;height:auto!important}.amdg-icon-external-link:hover{text-decoration:none}.amdg-button-group-btn{line-height:19px!important;height:19px;font-size:inherit}.amdg-button-group-btn mat-icon{height:20px;width:20px;font-size:18px}.amdg-image-tag{object-fit:contain}.amdg-content-closed{height:0;overflow:hidden;transition:all .11s ease-out}.amdg-content-opened{transition:all .11s ease-out}.amdg-h-150px{max-height:150px;overflow-x:hidden;border-top:2px solid rgba(118,118,118,.3);border-bottom:2px solid rgba(118,118,118,.3)}.amdg-breakdown-table-border-top{border-top:2px solid rgba(118,118,118,.3)}.amdg-animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}mat-checkbox label{margin:0!important}@-webkit-keyframes amdg-pulse{0%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.2,1.2,1.2)}to{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes amdg-pulse{0%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.2,1.2,1.2)}to{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.amdg-pulse{-webkit-animation-name:amdg-pulse;animation-name:amdg-pulse}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: GridService }, { type: i0.NgZone }], propDecorators: { responseEmit: [{
                type: Output
            }], buttonClickEmit: [{
                type: Output
            }], filtersChangedEmit: [{
                type: Output
            }], headings: [{
                type: Input
            }], url: [{
                type: Input
            }], entity: [{
                type: Input
            }], serverSidePagination: [{
                type: Input
            }] } });

class ColumnSearchFilterPipe {
    transform(values, args) {
        if (args === undefined) {
            return values;
        }
        return values.filter(value => {
            return value.display.toLowerCase().includes(args.toLowerCase());
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: ColumnSearchFilterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.2.1", ngImport: i0, type: ColumnSearchFilterPipe, isStandalone: false, name: "columnSearchFilter" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: ColumnSearchFilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'columnSearchFilter',
                    standalone: false
                }]
        }] });

class TemplateObjectPipe {
    constructor() {
    }
    transform(value, args) {
        let modifiedTemplate = JSON.stringify(value);
        const splitOne = modifiedTemplate.split('{{');
        splitOne.splice(0, 1); // remove first element
        splitOne.forEach((item) => {
            const [customVariable] = item.split('}}');
            modifiedTemplate = modifiedTemplate.replaceAll('{{' + customVariable + '}}', args[customVariable]);
        });
        return JSON.parse(modifiedTemplate);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: TemplateObjectPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.2.1", ngImport: i0, type: TemplateObjectPipe, isStandalone: false, name: "template_object" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: TemplateObjectPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'template_object',
                    standalone: false
                }]
        }], ctorParameters: () => [] });

class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor() {
        super(20, 400, 400);
    }
}
class ServerBindGridComponent {
    // Window resize listener
    onResize() {
        this.calculateGridWidth();
    }
    constructor(changeDetectorRef, renderer, dialog, ngZone, gridService) {
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.dialog = dialog;
        this.ngZone = ngZone;
        this.gridService = gridService;
        this.requestBodyEmit = new EventEmitter();
        this.responseEmit = new EventEmitter();
        this.selectionEmit = new EventEmitter();
        this.filtersChangedEmit = new EventEmitter();
        this.sortChangedEmit = new EventEmitter();
        this.buttonClickEmit = new EventEmitter();
        this.columnPreferencesChangedEmit = new EventEmitter();
        this.columnPreferencesChangeEndedEmit = new EventEmitter();
        this.columnPreferencesResetEmit = new EventEmitter();
        this.dataErrorEmit = new EventEmitter();
        this.headings = [];
        this.url = '';
        this.selection = false;
        this.columnControl = false;
        this.entity = null;
        this.transparency = false;
        this.elevation = 2;
        this.serverSidePagination = false;
        this.initialFilters = [];
        this.resetFilters = null;
        this.expandable = false;
        this.expandableConfig = {
            type: 'html',
            multipleExpansion: false,
            template: '<p>Pass the expandableConfig object into the grid</p>',
            childGrid: {
                headings: [],
                url: '',
                entity: {},
                serverSidePagination: false
            }
        };
        this.disableFullScreenToggle = false;
        this.pageSizes = [50, 100, 250, 500, 1000];
        this.pageSize = 100;
        this.headingsCopy = [];
        this.columnSearchParam = '';
        this.allGridItemsSelected = false;
        this.loadingData = false;
        this.response = { gridData: [], totalCount: 0 };
        this.responseBackup = { gridData: [], totalCount: 0 };
        this.gridItems = [];
        this.selectionStarted = false;
        this.allCheckBoxesSelected = false;
        this.selectedRows = [];
        this.gridWidth = 0;
        this.offsetTop = 0;
        this.scrollRemainingDistanceToLeft = 0;
        this.scrollRemainingDistanceToRight = 0;
        this.horizontalScrollBarWidth = 0;
        this.currentPage = 1;
        this.sortObj = {
            sort: null,
            sortField: null
        };
        this.filters = [];
        this.gridPostSubscription = new Subscription();
        this.fullscreen = false;
        this.allRowsExpanded = false;
    }
    ngOnInit() {
        this.headingsCopy = JSON.parse(JSON.stringify(this.headings));
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.calculateGridWidth();
        });
    }
    ngOnChanges(changes) {
        if (changes['entity']?.currentValue || changes['headings']?.currentValue) {
            if (changes['initialFilters']?.firstChange) {
                this.filters = this.initialFilters;
            }
            this.getData({ pageNo: 1, recordsPerPage: this.pageSize });
        }
        if (changes['headings']?.currentValue) {
            this.updateColumns();
        }
        if (changes['resetFilters']?.currentValue) {
            this.filters = [];
            if (this.serverSidePagination) {
                this.getData({ pageNo: 1, recordsPerPage: this.pageSize });
            }
            else {
                this.response = JSON.parse(JSON.stringify(this.responseBackup));
                this.pageChanged({ pageNo: 1, recordsPerPage: this.pageSize });
            }
        }
        if (changes['pageSizes']?.currentValue || changes['pageSize']?.currentValue) {
            if (this.pageSizes.length === 0) {
                console.error('@Input() pageSizes array should have at least one page size');
                this.pageSizes = [100];
            }
            if (!this.pageSizes.includes(this.pageSize)) {
                this.pageSize = this.pageSizes[0];
                console.error('@Input() pageSize does not exist on the @Input() pagesSizes array');
            }
        }
    }
    calculateGridWidth() {
        const gridContainer = this.gridContainer.nativeElement;
        const { offsetWidth, clientWidth } = this.cdkVirtualScrollViewport.elementRef.nativeElement;
        this.horizontalScrollBarWidth = offsetWidth - clientWidth;
        this.gridWidth = offsetWidth;
        const heightOfHeaderAndFooter = 114;
        const heightToTop = this.fullscreen ? 0 : gridContainer.getBoundingClientRect().top;
        const otherOffset = this.fullscreen ? 0 : 24;
        const totalOffset = heightOfHeaderAndFooter + heightToTop + otherOffset;
        // if (this.columnControl && !this.fullscreen) {
        // totalOffset += 24; // heightOfColumnControlBtn
        // }
        this.offsetTop = totalOffset;
        this.scrollChanged();
        this.changeDetectorRef.detectChanges();
    }
    scrollLeft() {
        const scrollLeft = this.cdkVirtualScrollViewport.elementRef.nativeElement.scrollLeft;
        this.cdkVirtualScrollViewport.elementRef.nativeElement.scrollLeft = scrollLeft - this.gridWidth * 80 / 100;
    }
    scrollRight() {
        const scrollLeft = this.cdkVirtualScrollViewport.elementRef.nativeElement.scrollLeft;
        this.cdkVirtualScrollViewport.elementRef.nativeElement.scrollLeft = this.gridWidth * 80 / 100 + scrollLeft;
    }
    scrollChanged(ev) {
        let elem = null;
        if (ev) {
            elem = ev.target;
        }
        else {
            elem = this.cdkVirtualScrollViewport.elementRef.nativeElement;
        }
        this.scrollRemainingDistanceToLeft = elem.scrollLeft;
        this.scrollRemainingDistanceToRight = Math.trunc(elem.scrollWidth - elem.scrollLeft - this.gridWidth + this.horizontalScrollBarWidth);
    }
    updateColumns(columnPreferenceChangeEnded = false) {
        this.headings = [...this.headings]; // to run change detection in the virtual scroll need to reassign a fresh copy
        setTimeout(() => {
            this.scrollChanged(); // this is done to recalculate scrollRemainingDistanceToLeft & scrollRemainingDistanceToRight
            // values which helps to show the auto scroll navigate buttons
            this.changeDetectorRef.detectChanges();
            if (columnPreferenceChangeEnded) {
                // only emit if there is an actual change to the headings array
                if (JSON.stringify(this.headings) !== JSON.stringify(this.headingsCopy)) {
                    this.columnPreferencesChangeEndedEmit.emit(this.headings);
                    this.headingsCopy = JSON.parse(JSON.stringify(this.headings));
                }
            }
            else {
                this.columnPreferencesChangedEmit.emit(this.headings);
            }
        }, 100);
    }
    columnDrop(ev) {
        moveItemInArray(this.headings, ev.previousIndex, ev.currentIndex);
        this.updateColumns();
    }
    sort(ev) {
        let index = 0;
        this.headings.forEach((heading, i) => {
            if (heading.fieldName === ev.fieldName) {
                index = i;
            }
            else {
                heading.sort = null;
            }
        });
        const sortObj = {
            sort: this.headings[index]?.sort,
            sortField: this.headings[index]?.sort ? this.headings[index]?.fieldName : null
        };
        this.sortObj = sortObj;
        this.sortChangedEmit.emit(sortObj);
        if (this.serverSidePagination) {
            this.getData({ pageNo: 1, recordsPerPage: this.pageSize });
        }
        else {
            this.pageChanged({ pageNo: 1, recordsPerPage: this.pageSize });
        }
    }
    filter(ev) {
        let filterIndex = null;
        this.filters.forEach((filter, i) => {
            if (filter.field === ev.field) {
                filterIndex = i;
            }
        });
        if (filterIndex !== null) {
            if (ev.value || ev.value === '') {
                this.filters[filterIndex] = ev;
            }
            else {
                this.filters.splice(filterIndex, 1);
            }
        }
        else {
            if (ev.value || ev.value === '') {
                this.filters.push(ev);
            }
        }
        this.filtersChangedEmit.emit(this.filters);
        if (this.serverSidePagination === false) {
            this.ngZone.runOutsideAngular(() => {
                const operators = {
                    between: (field, range) => {
                        const [min, max] = range.split('-').map(Number);
                        return min <= parseInt(field, 10) && parseInt(field, 10) <= max;
                    },
                    betweendates: (field, range) => {
                        const [min, max] = range.split('-');
                        return new Date(min) <= new Date(field) && new Date(field) <= new Date(max);
                    },
                    eq: (field, value) => {
                        if (value.includes(',') || field.includes(',')) {
                            // return value.split(',').includes(field);
                            return value.split(',').some(item => field.split(',').includes(item));
                        }
                        else {
                            return field === value;
                        }
                    },
                    neq: (field, value) => field !== value,
                    greaterorequal: (field, value) => field >= value,
                    greaterthan: (field, value) => field > value,
                    lessthanorequal: (field, value) => field <= value,
                    lessthan: (field, value) => field < value,
                    contains: (field, value) => field.includes(value),
                    startswith: (field, value) => field.startsWith(value),
                    endswith: (field, value) => field.endsWith(value),
                    blank: (field) => !field,
                };
                const result = this.responseBackup.gridData.filter(o => this.filters.every(({ field, operator, value }) => {
                    return operators[operator](makeSearchFriendly(o[field]), makeSearchFriendly(value));
                }));
                function makeSearchFriendly(searchTerm) {
                    let searchableString = searchTerm ? searchTerm : '';
                    return searchableString.toString().toLowerCase().trim();
                }
                this.ngZone.run(() => {
                    this.response.gridData = result;
                });
            });
            this.pageChanged({ pageNo: 1, recordsPerPage: this.pageSize });
        }
        else {
            this.getData({ pageNo: 1, recordsPerPage: this.pageSize });
        }
    }
    gridItemSelectionChanged(all = false) {
        this.selectedRows = [];
        this.gridItems.forEach((item) => {
            if (all) {
                item.gridItemSelected = this.allGridItemsSelected;
            }
            if (item.gridItemSelected) {
                this.selectedRows.push(item);
            }
        });
        this.allGridItemsSelected = this.selectedRows.length === this.gridItems.length;
        this.selectionEmit.emit(this.selectedRows);
    }
    // Multiple Selection logic
    startSelect(item, element) {
        this.selectionTimeoutHandler = setTimeout(() => {
            this.renderer.addClass(element, 'amdg-pulse');
            this.selectionStarted = true;
            item.gridItemSelected = true;
            this.selectionTimeoutHandler = null;
            setTimeout(() => {
                this.renderer.removeClass(element, 'amdg-pulse');
            }, 1000);
        }, 350);
    }
    endSelect() {
        clearInterval(this.selectionTimeoutHandler);
        if (this.selectionStarted) {
            this.selectionStarted = false;
            window.document.getSelection().removeAllRanges();
        }
    }
    overSelect($event, item) {
        if (this.selectionStarted) {
            item.gridItemSelected = true;
            this.getSelection();
        }
    }
    toggleAllRowsExpansion() {
        if (this.loadingData === false) { // do not allow to toggle when data is loading
            this.allRowsExpanded = !this.allRowsExpanded;
            this.gridItems.forEach(item => {
                if (item.gridItemExpanded === undefined) {
                    item.gridItemExpanded = true;
                }
                else {
                    item.gridItemExpanded = !item.gridItemExpanded;
                }
            });
        }
    }
    clickRow($event, item, index) {
        if (this.expandableConfig.multipleExpansion === false) {
            this.gridItems.forEach((eachItem, itemIndex) => {
                if (itemIndex !== index) {
                    eachItem.gridItemExpanded = false;
                }
            });
        }
        if (item.gridItemExpanded === undefined) {
            item.gridItemExpanded = true;
        }
        else {
            item.gridItemExpanded = !item.gridItemExpanded;
        }
    }
    getSelection() {
        this.selectedRows = [];
        this.allCheckBoxesSelected = true;
        for (let i = 0, len = this.gridItems.length; i < len; i++) {
            if (this.gridItems[i].gridItemSelected === true) {
                this.selectedRows.push(this.gridItems[i]);
            }
            else {
                this.allCheckBoxesSelected = false;
            }
        }
        this.allGridItemsSelected = this.selectedRows.length === this.gridItems.length;
        this.selectionEmit.emit(this.selectedRows);
    }
    // page change event
    getData({ pageNo, recordsPerPage }) {
        if (this.gridPostSubscription) {
            this.gridPostSubscription.unsubscribe();
            this.gridPostSubscription = new Subscription();
        }
        this.pageSize = recordsPerPage;
        this.loadingData = true;
        this.currentPage = pageNo;
        this.changeDetectorRef.detectChanges();
        let body;
        if (this.serverSidePagination) {
            body = {
                entity: this.entity,
                page: this.currentPage,
                perPage: recordsPerPage,
                filters: this.filters,
                ...this.sortObj
            };
        }
        else {
            body = {
                entity: this.entity
            };
        }
        this.requestBodyEmit.emit(body);
        this.gridPostSubscription = this.gridService.getAnyPost(this.url, body).subscribe(data => {
            if (data.statusCode === 200 || data.success) {
                const gridData = this.linkCreationInterceptor(data.payload.gridData);
                const { totalCount, other } = data.payload;
                this.allGridItemsSelected = false;
                this.selectedRows = [];
                this.response = { gridData, totalCount, other };
                this.responseBackup = { gridData, totalCount, other };
                this.gridItems = gridData;
                this.responseEmit.emit(this.response);
                this.selectionEmit.emit(this.selectedRows);
                if (this.serverSidePagination) {
                    this.loadingData = false;
                    this.changeDetectorRef.detectChanges();
                    this.cdkVirtualScrollViewport.elementRef.nativeElement.scrollTop = 0;
                    setTimeout(() => {
                        this.calculateGridWidth();
                    }, 100);
                }
                else {
                    this.pageChanged({ pageNo: this.currentPage, recordsPerPage: this.pageSize });
                    this.initialFilters.forEach(filter => {
                        this.filter(filter);
                    });
                }
            }
            else {
                this.dataErrorEmit.emit(data);
            }
        }, error => {
            this.dataErrorEmit.emit(error);
        });
    }
    sortAscending(sortField) {
        let sortOrder = 1;
        if (sortField[0] === '-') {
            sortOrder = -1;
            sortField = sortField.substr(1);
        }
        return (a, b) => {
            const result = (a[sortField] < b[sortField]) ? -1 : (a[sortField] > b[sortField]) ? 1 : 0;
            return result * sortOrder;
        };
    }
    pageChanged({ pageNo, recordsPerPage }) {
        this.loadingData = true;
        this.allGridItemsSelected = false;
        this.selectedRows = [];
        this.selectionEmit.emit(this.selectedRows);
        this.changeDetectorRef.detectChanges();
        this.pageSize = recordsPerPage;
        this.currentPage = pageNo;
        const { sort, sortField } = this.sortObj;
        const gridData = JSON.parse(JSON.stringify(this.response.gridData)); // get deep clone
        if (sort && sortField) {
            gridData.sort(this.sortAscending(sortField));
            if (sort === 'desc') {
                gridData.reverse(); // sort Descending
            }
        }
        const startingRecord = (this.pageSize * this.currentPage) - this.pageSize + 1;
        const endingRecord = this.pageSize * this.currentPage;
        const gridItemsForDisplay = [];
        for (let i = startingRecord - 1; i < endingRecord; i++) {
            if (gridData[i]) {
                gridItemsForDisplay.push(gridData[i]);
            }
            else {
                break;
            }
        }
        this.gridItems = gridItemsForDisplay;
        this.loadingData = false;
        this.changeDetectorRef.detectChanges();
        this.cdkVirtualScrollViewport.elementRef.nativeElement.scrollTop = 0;
        setTimeout(() => {
            this.calculateGridWidth();
        }, 100);
    }
    linkCreationInterceptor(gridData) {
        const urlHeadings = [];
        this.headings.forEach(heading => {
            if (heading?.clickable === 'url') {
                urlHeadings.push({
                    type: heading.fieldName,
                    urlTemplate: heading.other?.urlTemplate,
                    queryParams: heading.other?.queryParams,
                    source: heading.other?.source,
                });
            }
        });
        const items = gridData.map(item => {
            const obj = {};
            urlHeadings.forEach(heading => {
                const splitUrl = heading.urlTemplate.split('/');
                const newUrl = [];
                splitUrl.forEach((urlItem) => {
                    if (urlItem.includes(':')) {
                        urlItem = item[urlItem.substring(1)];
                    }
                    newUrl.push(urlItem);
                });
                obj[heading.type + 'Link'] = newUrl.join('/');
                if (heading.queryParams) {
                    let objParams = null;
                    if (heading.source === 'external') {
                        objParams = '';
                        Object.keys(heading.queryParams).forEach(field => {
                            objParams += field + '=' + item[heading.queryParams[field]] + '&';
                        });
                        objParams = objParams.slice(0, -1);
                    }
                    else {
                        objParams = {};
                        Object.keys(heading.queryParams).forEach(field => {
                            objParams[field] = item[heading.queryParams[field]];
                        });
                    }
                    obj[heading.type + 'QueryParams'] = objParams;
                }
            });
            return { ...item, ...obj };
        });
        return items;
    }
    toggleFullScreen(ev) {
        this.fullscreen = ev;
        setTimeout(() => {
            this.calculateGridWidth();
        });
    }
    openLinkInNewTab(link, params = {}) {
        let paramString = '?';
        // if (isEmpty(params)) {
        //   paramString = '';
        // }
        Object.keys(params).forEach(key => {
            paramString += key + '=' + params[key];
        });
        window.open(link + paramString);
    }
    openExternalLinkInNewTab(link, params) {
        if (params) {
            window.open(link + '?' + params);
        }
        else {
            window.open(link);
        }
    }
    goToLink(fieldName, item, click) {
        this.buttonClickEmit.emit({ fieldName, item, click });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: ServerBindGridComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i1$1.MatDialog }, { token: i0.NgZone }, { token: GridService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.1", type: ServerBindGridComponent, isStandalone: false, selector: "amdg-grid", inputs: { headings: "headings", url: "url", selection: "selection", columnControl: "columnControl", entity: "entity", transparency: "transparency", elevation: "elevation", serverSidePagination: "serverSidePagination", initialFilters: "initialFilters", resetFilters: "resetFilters", expandable: "expandable", expandableConfig: "expandableConfig", disableFullScreenToggle: "disableFullScreenToggle", pageSizes: "pageSizes", pageSize: "pageSize" }, outputs: { requestBodyEmit: "requestBodyEmit", responseEmit: "responseEmit", selectionEmit: "selectionEmit", filtersChangedEmit: "filtersChangedEmit", sortChangedEmit: "sortChangedEmit", buttonClickEmit: "buttonClickEmit", columnPreferencesChangedEmit: "columnPreferencesChangedEmit", columnPreferencesChangeEndedEmit: "columnPreferencesChangeEndedEmit", columnPreferencesResetEmit: "columnPreferencesResetEmit", dataErrorEmit: "dataErrorEmit" }, host: { listeners: { "window:resize": "onResize($event)" } }, providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }], viewQueries: [{ propertyName: "gridContainer", first: true, predicate: ["gridContainer"], descendants: true }, { propertyName: "cdkVirtualScrollViewport", first: true, predicate: ["cdkVirtualScrollViewport"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div id=\"amdg-grid-container\">\n    <div class=\"amdg-layout-container amdg-p-0\">\n        <div>\n            @if (columnControl) {\n                <mat-card id=\"column-control-btn-card\">\n                    <button mat-raised-button [matMenuTriggerFor]=\"columnControlMenu\">Column Preferences\n                        <mat-icon>expand_more</mat-icon>\n                    </button>\n                </mat-card>\n            }\n            <mat-menu #columnControlMenu=\"matMenu\" class=\"amdg-column-control-menu\" (closed)=\"updateColumns(true)\">\n                <div class=\"amdg-column-control-container\" (click)=\"$event.stopPropagation()\">\n                    <div class=\"amdg-layout-container amdg-p-3\" style=\"align-items: start\">\n                        <mat-form-field class=\"amdg-w-100 amdg-fs-12\">\n                            <mat-label>Search Columns</mat-label>\n                            <mat-icon matPrefix class=\"amdg-mr-2\">search</mat-icon>\n                            <input matInput type=\"text\" [(ngModel)]=\"columnSearchParam\">\n                            @if (columnSearchParam) {\n                                <button mat-button matSuffix mat-icon-button aria-label=\"Clear\"\n                                    (click)=\"columnSearchParam=''\">\n                                    <mat-icon>close</mat-icon>\n                                </button>\n                            }\n                        </mat-form-field>\n                        <button mat-stroked-button aria-label=\"Reset\" color=\"warn\" class=\"amdg-ml-2\"\n                            (click)=\"columnPreferencesResetEmit.emit();columnSearchParam=''\">\n                            Reset\n                        </button>\n                    </div>\n\n                    <div class=\"amdg-cdk-drop-list\" cdkDropList (cdkDropListDropped)=\"columnDrop($event)\"\n                        [cdkDropListDisabled]=\"columnSearchParam.length === 0 ? false: true\">\n                        @for (heading of headings | columnSearchFilter: columnSearchParam; track heading.fieldName) {\n                            <div class=\"column-item\" cdkDrag>\n                                <div class=\"amdg-d-inline-flex\">\n                                    <mat-icon [ngStyle]=\"{'opacity': columnSearchParam.length === 0 ? 1: 0}\">\n                                        drag_indicator\n                                    </mat-icon>\n                                    @if (heading.show === undefined) {\n                                        <mat-checkbox disabled [checked]=\"true\"><span\n                                            class=\"amdg-ml-3\">{{ heading.display }}@if (!heading.display) {\n                                            <span style=\"font-style: italic\">Unnamed</span>\n                                        }</span></mat-checkbox>\n                                    } @else {\n                                        <mat-checkbox [(ngModel)]=\"heading.show\" (ngModelChange)=\"updateColumns()\"><span\n                                            class=\"amdg-ml-3\">{{ heading.display }} @if (!heading.display) {\n                                            <span style=\"font-style: italic\">Unnamed</span>\n                                        }</span></mat-checkbox>\n                                    }\n                                </div>\n                            </div>\n                        }\n                        @if ((headings | columnSearchFilter: columnSearchParam)?.length == 0) {\n                            <div class=\"amdg-text-muted amdg-text-center\">\n                                <b>No such column</b>\n                            </div>\n                        }\n                    </div>\n                </div>\n            </mat-menu>\n        </div>\n        <div>\n            <ng-content></ng-content>\n        </div>\n    </div>\n    <mat-card id=\"grid\" class=\"mat-elevation-z{{elevation}}\"\n        [ngClass]=\"{'fullscreen': fullscreen, 'grid-transparency': transparency}\"\n        [style.border-top-left-radius]=\"columnControl ? '0px' : '5px'\">\n        @if (scrollRemainingDistanceToLeft !== 0) {\n            <button mat-button (click)=\"scrollLeft()\" aria-label=\"navigate left\" class=\"navigate-left-btn\">\n                <mat-icon class=\"amdg-fs-40 navigate-icons\">chevron_left</mat-icon>\n            </button>\n        }\n        @if (scrollRemainingDistanceToRight !== 0 && gridItems.length !== 0) {\n            <button mat-button (click)=\"scrollRight()\" aria-label=\"navigate right\" class=\"navigate-right-btn\"\n                [ngStyle]=\"{'margin-right': horizontalScrollBarWidth + 'px'}\">\n                <mat-icon class=\"amdg-fs-40 navigate-icons\">chevron_right</mat-icon>\n            </button>\n        }\n        @if (gridItems.length === 0 && !loadingData) {\n            <div class=\"empty-records\">\n                No Records Available\n            </div>\n        }\n        <div class=\"horizontal-scroll\" #gridContainer>\n            <table\n                [ngStyle]=\"{'left': '-' + scrollRemainingDistanceToLeft + 'px', 'width': 'calc(100% - ' + horizontalScrollBarWidth + 'px)' }\">\n                <thead>\n                    @if (selection) {\n                        <th class=\"amdg-selection\">\n                            <mat-checkbox [(ngModel)]=\"allGridItemsSelected\" [disabled]=\"loadingData\"\n                                (ngModelChange)=\"gridItemSelectionChanged(true)\"></mat-checkbox>\n                        </th>\n                    }\n                    @if (expandable && (expandableConfig.multipleExpansion === false || expandableConfig.type === 'table')) {\n                        <th class=\"amdg-selection\"></th>\n                    }\n                    @if (expandable && (expandableConfig.multipleExpansion && expandableConfig.type !== 'table')) {\n                        <th class=\"amdg-selection amdg-fs-20 amdg-text-center amdg-cursor-pointer\"\n                            (click)=\"toggleAllRowsExpansion()\">\n                            @if (allRowsExpanded === false) {\n                                <span>+</span>\n                            } @else {\n                                <span>\u2212</span>\n                            }\n                        </th>\n                    }\n                    @for (heading of headings | columnFilter; track heading.fieldName) {\n                        <th [style.width]=\"heading.width\">\n                            <amdg-sort-header [heading]=\"heading\" (filter)=\"sort($event)\"></amdg-sort-header>\n                        </th>\n                    }\n                </thead>\n                <thead>\n                    @if (selection) {\n                        <th class=\"amdg-selection\"></th>\n                    }\n                    @if (expandable) {\n                        <th class=\"amdg-selection\"></th>\n                    }\n                    @for (heading of headings | columnFilter; track heading.fieldName) {\n                        <th [style.width]=\"heading.width\">\n                            <amdg-filter-header [initialFilters]=\"initialFilters\" [resetFilters]=\"resetFilters\"\n                                [heading]=\"heading\" (filter)=\"filter($event)\"></amdg-filter-header>\n                        </th>\n                    }\n                </thead>\n            </table>\n            @if (loadingData) {\n                <mat-progress-bar mode=\"indeterminate\" class=\"amdg-position-absolute amdg-z-index-1\"></mat-progress-bar>\n            }\n            <cdk-virtual-scroll-viewport #cdkVirtualScrollViewport id=\"amdgScrollViewport\"\n                [ngStyle]=\"{'height': 'calc(100vh - ' +offsetTop+ 'px)' }\" (scroll)=\"scrollChanged($event)\">\n                <div class=\"vertical-scroll\">\n                    <table>\n                        <tbody (window:mouseup)=\"endSelect()\">\n                        <ng-container\n                            *cdkVirtualFor=\"let item of gridItems; let odd=odd; let i = index;templateCacheSize: 400\">\n                            <tr (mouseover)=\"overSelect($event, item)\"\n                                [ngClass]=\"{ odd: odd, rowSelected: item.gridItemSelected == true, expanded: item.gridItemExpanded}\"\n                                [style.background]=\"item?.amdgGridRowBackground\">\n                                @if (selection) {\n                                    <td class=\"amdg-selection amdg-animated\" #selectionElem\n                                        (mousedown)=\"startSelect(item, selectionElem)\">\n                                        <mat-checkbox [(ngModel)]=\"item['gridItemSelected']\"\n                                            (ngModelChange)=\"gridItemSelectionChanged()\"></mat-checkbox>\n                                    </td>\n                                }\n                                @if (expandable) {\n                                    <td mat-ripple\n                                        class=\"amdg-selection amdg-animated amdg-fs-20 amdg-text-center amdg-cursor-pointer\"\n                                        (click)=\"clickRow($event, item, i)\">\n                                        @if (item.gridItemExpanded !== true) {\n                                            <span>+</span>\n                                        } @else {\n                                            <span>\u2212</span>\n                                        }\n                                    </td>\n                                }\n                                @for (heading of headings | columnFilter; track heading.fieldName) {\n                                    <td\n                                        [style.width]=\"heading.width\"\n                                        [style.textAlign]=\"heading.textAlign\"\n                                        [style.background]=\"heading.background\"\n                                        [style.color]=\"heading.color\"\n                                        [style.fontWeight]=\"heading.fontWeight\"\n                                        [style.fontStyle]=\"heading.fontStyle\">\n\n                                        @switch (heading.type) {\n\n                                            @case ('image-url') {\n                                                <div style=\"height: 48px\">\n                                                    <img [src]=\"item[heading.fieldName]\" alt=\"grid image item\"\n                                                        width=\"40px\" height=\"40px\" class=\"amdg-mt-1 amdg-image-tag\"\n                                                        [matMenuTriggerFor]=\"imageMenu\" #trigger=\"matMenuTrigger\"\n                                                        (mouseenter)=\"trigger.openMenu()\"\n                                                        (mouseleave)=\"trigger.closeMenu()\">\n                                                    <mat-menu #imageMenu=\"matMenu\" [hasBackdrop]=\"false\"\n                                                        class=\"amdg-image-menu-padding\">\n                                                        <img [src]=\"item[heading.fieldName]\" class=\"amdg-image-tag\"\n                                                            alt=\"grid image item\" width=\"150px\" height=\"150px\">\n                                                    </mat-menu>\n                                                </div>\n                                            }\n                                            @case ('button-group') {\n                                                <span>\n                                                    @if (heading.other && heading.other.buttons.length === 1) {\n                                                        <button [disabled]=\"item[heading.other.buttons[0].disableField]\" color=\"primary\"\n                                                            class=\"amdg-button-group-btn amdg-mr-2\" type=\"button\" mat-button\n                                                            (click)=\"goToLink(heading.fieldName, item, heading.other.buttons[0].display)\">\n                                                        <mat-icon class=\"amdg-mr-2\">{{ heading.other.buttons[0].icon }}</mat-icon>\n                                                            {{ heading.other.buttons[0].display }}\n                                                      </button>\n                                                    } @else if (heading.other && heading.other.buttons.length > 1) {\n                                                        <button class=\"amdg-button-group-btn\" mat-button color=\"primary\"\n                                                            [matMenuTriggerFor]=\"gridButtonListMenu\"\n                                                            [disabled]=\"item[heading.other.mainButton.disableField]\"> {{ heading.other.mainButton.display }}\n                                                            <mat-icon>{{ heading.other.mainButton.icon }}</mat-icon></button>\n                                                        <mat-menu #gridButtonListMenu=\"matMenu\" xPosition=\"before\">\n                                                        @for (btn of heading.other.buttons; track btn) {\n                                                            <button class=\"amdg-mat-menu-item\" [disabled]=\"item[btn.disableField]\" mat-menu-item\n                                                                (click)=\"goToLink(heading.fieldName, item, btn.display)\">\n                                                            <mat-icon class=\"amdg-mr-2 amdg-fs-20\">{{ btn.icon }}</mat-icon>\n                                                                {{ btn.display }}\n                                                          </button>\n                                                        }\n                                                      </mat-menu>\n                                                    }\n                                                </span>\n                                            }\n                                            @case ('currency') {\n                                                <span>\n                                                    {{ item[heading.fieldName] | currency: heading.prefix }}\n                                                </span>\n                                            }\n                                            @default {\n                                                <span\n                                                    [title]=\"item[heading.title] ? item[heading.title] : item[heading.fieldName]\">\n                                                    @if (heading?.clickable) {\n                                                        @if (heading.clickable === 'url') {\n                                                            @if (heading.other.source === 'external') {\n                                                                @if (heading.other && heading.other['urlTemplate']) {\n                                                                    <a mat-button disableRipple color=\"primary\" class=\"amdg-link\"\n                                                                        [ngClass]=\"{'amdg-link-disabled': loadingData}\"\n                                                                        [href]=\"item[heading.fieldName + 'Link'] + (item[heading.fieldName + 'QueryParams'] ? '?' + item[heading.fieldName + 'QueryParams'] : '')\">{{ item[heading.fieldName] }}</a>\n                                                                }\n                                                                @if (heading.other && heading.other.openTab && item[heading.fieldName]) {\n                                                                    <mat-icon color=\"primary\" class=\"amdg-fs-12 amdg-icon-external-link\"\n                                                                        [ngClass]=\"{'link-amdg-link-disabled': loadingData}\"\n                                                                        (click)=\"openExternalLinkInNewTab(item[heading.fieldName + 'Link'], item[heading.fieldName + 'QueryParams'])\">launch</mat-icon>\n                                                                }\n                                                            } @else {\n                                                                @if (heading.other && heading.other['urlTemplate']) {\n                                                                    <a mat-button disableRipple color=\"primary\" class=\"amdg-link\"\n                                                                        [ngClass]=\"{'link-amdg-link-disabled': loadingData}\"\n                                                                        [routerLink]=\"item[heading.fieldName + 'Link']\"\n                                                                        [queryParams]=\"item[heading.fieldName + 'QueryParams']\">{{ item[heading.fieldName] }}</a>\n                                                                }\n                                                                @if (heading.other && heading.other.openTab && item[heading.fieldName]) {\n                                                                    <mat-icon color=\"primary\" class=\"amdg-fs-12 amdg-icon-external-link\"\n                                                                        [ngClass]=\"{'link-amdg-link-disabled': loadingData}\"\n                                                                        (click)=\"openLinkInNewTab(item[heading.fieldName + 'Link'], item[heading.fieldName + 'QueryParams'])\">launch</mat-icon>\n                                                                }\n                                                            }\n                                                        }\n                                                        @if (heading.clickable === 'button') {\n                                                            <a mat-button disableRipple color=\"primary\" class=\"amdg-link\"\n                                                                (click)=\"goToLink(heading.fieldName, item, item[heading.fieldName])\">\n                                                           @if (heading.prefix) {\n                                                               <span [innerHTML]=\"heading.prefix | template : item\"></span>\n                                                           }\n                                                                {{ item[heading.fieldName] }}\n                                                                @if (heading.suffix) {\n                                                                    <span [innerHTML]=\"heading.suffix | template : item\"></span>\n                                                                }\n                                                        </a>\n                                                        }\n                                                    } @else {\n                                                        @if (heading.prefix) {\n                                                            <span [innerHTML]=\"heading.prefix | template : item\"></span>\n                                                        }\n                                                        {{ item[heading.fieldName] }}\n                                                        @if (heading.suffix) {\n                                                            <span [innerHTML]=\"heading.suffix | template : item\"></span>\n                                                        }\n                                                    }\n                                                </span>\n                                            }\n                                        }\n                                    </td>\n                                }\n                            </tr>\n                            @if (expandable && item.gridItemExpanded) {\n                                <tr [style.height]=\"'auto'\" [ngClass]=\"{ odd: odd, rowSelected: item.gridItemSelected}\">\n                                    <td class=\"amdg-p-0\" [attr.colspan]=\"headings.length + 1 + (selection ? 1 : 0)\">\n                                        <div\n                                            [ngClass]=\"[item.gridItemExpanded ? 'amdg-content-opened' : 'amdg-content-closed']\">\n                                            @switch (expandableConfig.type) {\n                                                @case ('html') {\n                                                    <div [innerHTML]=\"expandableConfig.template | template : item\"\n                                                        [ngStyle]=\"{\n                                              width: (gridWidth - 16) + 'px',\n                                              position: 'relative',\n                                              left: scrollRemainingDistanceToLeft + 'px',\n                                              borderTop: '1px solid rgba(118, 118, 118, 0.3)'\n                                            }\">\n                                                    </div>\n                                                }\n                                                @case ('table') {\n                                                    @if (item.gridItemExpanded) {\n                                                        <div class=\"amdg-p-2\" style=\"height: 320px;overflow: auto\"\n                                                            [ngStyle]=\"{\n                                                width: (gridWidth - 30) + 'px',\n                                                position: 'relative',\n                                                left: scrollRemainingDistanceToLeft + 'px',\n                                                borderTop: '1px solid rgba(118, 118, 118, 0.3)'\n                                              }\">\n                                                            <amdg-child-grid\n                                                                [headings]=\"expandableConfig.childGrid!.headings\"\n                                                                [url]=\"expandableConfig.childGrid!.url\"\n                                                                [entity]=\"expandableConfig.childGrid!.entity | template_object: item\"\n                                                                [serverSidePagination]=\"true\">\n                                                            </amdg-child-grid>\n                                                        </div>\n                                                    }\n                                                }\n                                                @case ('breakdown') {\n                                                    <div class=\"amdg-h-150px\">\n                                                        <div [innerHTML]=\"expandableConfig.template | template : item\"\n                                                            [ngStyle]=\"{\n                                              width: (gridWidth - 16) + 'px',\n                                              position: 'relative',\n                                              left: scrollRemainingDistanceToLeft + 'px',\n                                              borderTop: '1px solid rgba(118, 118, 118, 0.3)'\n                                            }\">\n                                                        </div>\n                                                        <table class=\"amdg-w-100\"\n                                                            [ngClass]=\"{'amdg-breakdown-table-border-top': expandableConfig.template}\">\n                                                            @for (item of item.amdgBreakdownGridRecords; track item; let\n                                                                odd = $odd; let even = $even; ) {\n                                                                <tr [ngClass]=\"{'amdg-cursor-pointer': expandable,odd: odd, even: even}\">\n                                                                    @if (selection) {\n                                                                        <td class=\"amdg-selection-breakdown\"></td>\n                                                                    }\n                                                                    @if (expandable) {\n                                                                        <td class=\"amdg-selection\"></td>\n                                                                    }\n                                                                    @for (\n                                                                        heading of headings | columnFilter; track heading.fieldName) {\n                                                                        <td\n                                                                            [style.width]=\"heading.width\"\n                                                                            [style.textAlign]=\"heading.textAlign\"\n                                                                            [style.background]=\"heading.background\"\n                                                                            [style.color]=\"heading.color\"\n                                                                            [style.fontWeight]=\"heading.fontWeight\"\n                                                                            [style.fontStyle]=\"heading.fontStyle\"\n                                                                            class=\"amdg-text-truncate\">\n                                                                            @switch (heading.type) {\n                                                                                @case ('image-url') {\n                                                                                    <span>\n                                              <img [src]=\"item[heading.fieldName]\" alt=\"grid image item\" width=\"80px\"\n                                                  height=\"80px\" class=\"amdg-mt-2 amdg-mb-2\">\n                                            </span>\n                                                                                }\n                                                                                @case ('button-group') {\n                                                                                    <span>\n                                            </span>\n                                                                                }\n                                                                                @case ('currency') {\n                                                                                    <span>\n                                              {{ item[heading.fieldName] | currency: heading.prefix }}\n                                            </span>\n                                                                                }\n                                                                                @default {\n                                                                                    <span\n                                                                                        [title]=\"item[heading.fieldName]\"> {{ item[heading.fieldName] }}</span>\n                                                                                }\n                                                                            }\n                                                                        </td>\n                                                                    }\n                                                                </tr>\n                                                            }\n                                                        </table>\n                                                    </div>\n                                                }\n                                            }\n                                        </div>\n                                    </td>\n                                </tr>\n                            }\n                        </ng-container>\n                            @if (gridItems.length === 0) {\n                                <tr class=\"empty\" [ngStyle]=\"{'height': 'calc(100vh - ' +offsetTop+ 'px)' }\">\n                                    @if (selection) {\n                                        <td class=\"amdg-selection amdg-animated\"></td>\n                                    }\n                                    @if (expandable) {\n                                        <td class=\"amdg-selection amdg-animated\"></td>\n                                    }\n                                    @for (heading of headings | columnFilter; track heading.fieldName) {\n                                        <td [style.width]=\"heading.width\"></td>\n                                    }\n                                </tr>\n                            }\n                        </tbody>\n                    </table>\n                </div>\n            </cdk-virtual-scroll-viewport>\n        </div>\n        <amdg-pagination\n            [loadingData]=\"loadingData\"\n            [noOfTotalRecords]=\"serverSidePagination ? (response.totalCount ? response.totalCount : 0) : response.gridData.length\"\n            [noOfRecords]=\"response.gridData.length\"\n            [noOfSelectedRow]=\"selectedRows.length\"\n            [currentPage]=\"currentPage\"\n            [disableFullScreenToggle]=\"disableFullScreenToggle\"\n            [pageSizes]=\"pageSizes\"\n            [newRecordsPerPage]=\"pageSize\"\n            (pageChanged)=\"serverSidePagination ? getData($event) : pageChanged($event)\"\n            (toggleFullScreen)=\"toggleFullScreen($event)\">\n        </amdg-pagination>\n    </mat-card>\n</div>\n", styles: [".mat-menu-panel.amdg-column-control-menu{width:320px;max-width:320px}.amdg-column-control-container{max-height:420px;overflow:hidden}.amdg-column-control-container .amdg-cdk-drop-list{padding:0 9px;min-height:60px;display:block;border-radius:4px;max-height:345px;overflow:auto}.amdg-column-control-container .amdg-cdk-drop-list div div mat-icon{font-size:18px;top:2px;position:relative;cursor:move}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;background:#fff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.amdg-cdk-drop-list:last-child{border:none}.amdg-cdk-drop-list.cdk-drop-list-dragging .column-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.amdg-top-button,#amdg-grid-container .amdg-top-right-button button,#amdg-grid-container #column-control-btn-card button{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0 10px;line-height:25px!important;height:25px;border:none!important;font-weight:400;font-size:12px;background:#7676761a}#amdg-grid-container #column-control-btn-card{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0 0 0 1px}#amdg-grid-container .amdg-top-right-button{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-left:8px;padding:0;display:inline-block}#amdg-grid-container #grid{overflow:hidden;font-size:12px;position:relative;padding:0}#amdg-grid-container #grid.grid-transparency{background:#ffffffe6}#amdg-grid-container #grid .grid-nav-btns,#amdg-grid-container #grid .navigate-right-btn,#amdg-grid-container #grid .navigate-left-btn{position:absolute;top:calc(50% - 25px);z-index:1;background-color:#00000080;color:#fff;font-size:18px;min-width:40px;padding:0;height:50px}#amdg-grid-container #grid .navigate-left-btn{left:0;border-top-left-radius:0;border-bottom-left-radius:0}#amdg-grid-container #grid .navigate-right-btn{right:0;border-top-right-radius:0;border-bottom-right-radius:0}#amdg-grid-container #grid .navigate-icons{line-height:40px;font-size:40px;height:40px;width:40px}#amdg-grid-container #grid .empty-records{position:absolute;top:calc(50% - 25px);z-index:1;background-color:#00000080;color:#fff;font-size:16px;min-width:40px;margin:0 auto;right:0;left:0;width:190px;padding:10px;border-radius:4px;text-align:center;box-sizing:border-box}#amdg-grid-container #grid .horizontal-scroll{width:100%}#amdg-grid-container #grid .horizontal-scroll cdk-virtual-scroll-viewport{min-height:300px}#amdg-grid-container #grid .vertical-scroll{overflow-y:auto;height:100%}#amdg-grid-container #grid table{border-collapse:collapse;table-layout:fixed;width:100%;position:relative}#amdg-grid-container #grid table thead{background:#7676761a}#amdg-grid-container #grid th{border-bottom:1px solid rgba(118,118,118,.3);height:34px}#amdg-grid-container #grid th,#amdg-grid-container #grid td{padding:0 8px;border-left:1px solid rgba(118,118,118,.3);width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start;font-weight:400;box-sizing:border-box;line-height:20px}#amdg-grid-container #grid tr{height:20px;transition:all 10ms ease-out}#amdg-grid-container #grid tr:hover{transition:all ease .1s;background-color:#7676764d}#amdg-grid-container #grid tr.empty:hover{background-color:inherit}#amdg-grid-container #grid tr.rowSelected{background:#0099ff4d!important}#amdg-grid-container #grid tr.expanded{height:40px;font-size:1.1em}#amdg-grid-container #grid .odd{background-color:#7676761a}#amdg-grid-container #grid.fullscreen{position:fixed;inset:0;z-index:1000}.amdg-sticky{position:sticky!important;left:0;z-index:1!important;background:#f1f1f1}.amdg-selection{width:34px!important}.amdg-selection-breakdown{width:33px!important;border-left:0!important}#amdgScrollViewport{scroll-behavior:smooth}.amdg-link{background-color:transparent;cursor:pointer!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;font-weight:500;font-size:inherit;text-decoration:none!important;padding:0!important;min-width:auto!important;line-height:normal!important;border-radius:0!important;display:inline!important}.amdg-link-disabled{pointer-events:none}.amdg-icon-external-link{position:relative;top:3px;cursor:pointer;margin-left:8px;height:auto!important}.amdg-icon-external-link:hover{text-decoration:none}.amdg-button-group-btn{line-height:19px!important;height:19px;font-size:inherit}.amdg-button-group-btn mat-icon{height:20px;width:20px;font-size:18px}.amdg-image-tag{object-fit:contain}.amdg-content-closed{height:0;overflow:hidden;transition:all .11s ease-out}.amdg-content-opened{transition:all .11s ease-out}.amdg-h-150px{max-height:150px;overflow-x:hidden;border-top:2px solid rgba(118,118,118,.3);border-bottom:2px solid rgba(118,118,118,.3)}.amdg-breakdown-table-border-top{border-top:2px solid rgba(118,118,118,.3)}.amdg-animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}mat-checkbox label{margin:0!important}@-webkit-keyframes amdg-pulse{0%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.2,1.2,1.2)}to{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes amdg-pulse{0%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.2,1.2,1.2)}to{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.amdg-pulse{-webkit-animation-name:amdg-pulse;animation-name:amdg-pulse}\n", ".amdg-small-stroked-button{line-height:26px!important;height:26px!important;font-size:12px!important}.amdg-layout-container{display:flex!important;justify-content:space-between!important;align-items:center!important;padding:0 8px!important}.amdg-m-0{margin:0!important}.amdg-mt-1{margin-top:.25rem!important}.amdg-mt-2{margin-top:.5rem!important}.amdg-mt-3{margin-top:.75rem!important}.amdg-ml-1{margin-left:.25rem!important}.amdg-ml-2{margin-left:.5rem!important}.amdg-ml-3{margin-left:.75rem!important}.amdg-mr-1{margin-right:.25rem!important}.amdg-mr-2{margin-right:.5rem!important}.amdg-mr-4{margin-right:1rem!important}.amdg-mb-1{margin-bottom:.25rem!important}.amdg-mb-2{margin-bottom:.5rem!important}.amdg-p-2{padding:.5rem!important}.amdg-p-0{padding:0!important}.amdg-p-3{padding:.75rem!important}.amdg-position-absolute{position:absolute!important}.amdg-d-inline-flex{display:inline-flex!important}.amdg-d-inline{display:inline!important}.amdg-d-inline-block{display:inline-block!important}.amdg-z-index-1{z-index:1!important}.amdg-d-none{display:none!important}.amdg-overflow-hidden{overflow:hidden!important}.amdg-fs-12{font-size:12px}.amdg-fs-20{font-size:20px}.amdg-text-muted{opacity:.6}.amdg-text-center{text-align:center!important}.amdg-fs-40{font-size:40px}.amdg-w-100{width:100%!important}.amdg-cursor-pointer{cursor:pointer}.amdg-font-weight-normal{font-weight:400!important}.amdg-font-weight-bold{font-weight:700!important}.amdg-text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.amdg-mat-menu-item{height:26px!important;line-height:26px!important;font-size:12px!important}.amdg-cell-color-circle{width:12px;height:12px;border-radius:12px;position:relative;top:2px;display:inline-block}.amdg-mat-option{height:26px!important;padding:0 10px!important}.mat-select-value{text-align:left}.amdg-custom-select-position{margin:25px 0}.amdg-checkbox .mdc-form-field .mdc-checkbox{padding:0!important}.amdg-checkbox .mdc-form-field .mdc-checkbox .mat-mdc-checkbox-touch-target,.amdg-checkbox .mdc-form-field .mdc-checkbox .mdc-checkbox__native-control{top:0;right:0;left:0;width:18px;height:18px;transform:none}.amdg-checkbox .mdc-form-field .mdc-checkbox .mdc-checkbox__background{left:0;top:0}.amdg-link .mat-button-wrapper:hover{text-decoration:underline}body.darkMode .amdg-modified-mat-select,body.darkMode .amdg-filter-open-btn{background:#424242;color:#fff}body.darkMode .cdk-drag-preview,body.darkMode .mat-menu-panel{color:#fff;background:#424242}body.darkMode #amdg-multi-select-search,body.darkMode #amdg-multi-select-search-close,body.darkMode .amdg-additional-selection{color:#fff}body.darkMode #grid.grid-transparency{background:#424242e6!important}.amdg-image-menu-padding .mat-menu-content{padding:8px!important;height:150px!important;box-sizing:content-box!important}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i4$3.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i4$3.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i2.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i4.MatButton, selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ", inputs: ["matButton"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i4.MatIconButton, selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]", exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: i5.MatMenuItem, selector: "[mat-menu-item]", inputs: ["role", "disabled", "disableRipple"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i5.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }, { kind: "component", type: i6$2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "component", type: i12.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "component", type: i7$2.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }, { kind: "directive", type: i4$2.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "directive", type: i15.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep", "cdkDropListElementContainer", "cdkDropListHasAnchor"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i15.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer", "cdkDragScale"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: i8$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: PaginationComponent, selector: "amdg-pagination", inputs: ["noOfTotalRecords", "loadingData", "noOfRecords", "noOfSelectedRow", "currentPage", "disableFullScreenToggle", "showNoOfRecords", "pageSizes", "newRecordsPerPage"], outputs: ["pageChanged", "toggleFullScreen"] }, { kind: "component", type: SortHeaderComponent, selector: "amdg-sort-header", inputs: ["heading"], outputs: ["filter"] }, { kind: "component", type: FilterHeaderComponent, selector: "amdg-filter-header", inputs: ["heading", "initialFilters", "resetFilters"], outputs: ["filter"] }, { kind: "component", type: ChildGridComponent, selector: "amdg-child-grid", inputs: ["headings", "url", "entity", "serverSidePagination"], outputs: ["responseEmit", "buttonClickEmit", "filtersChangedEmit"] }, { kind: "pipe", type: i2$1.CurrencyPipe, name: "currency" }, { kind: "pipe", type: ColumnFilterPipe, name: "columnFilter" }, { kind: "pipe", type: ColumnSearchFilterPipe, name: "columnSearchFilter" }, { kind: "pipe", type: TemplatePipe, name: "template" }, { kind: "pipe", type: TemplateObjectPipe, name: "template_object" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: ServerBindGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'amdg-grid', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }], standalone: false, template: "<div id=\"amdg-grid-container\">\n    <div class=\"amdg-layout-container amdg-p-0\">\n        <div>\n            @if (columnControl) {\n                <mat-card id=\"column-control-btn-card\">\n                    <button mat-raised-button [matMenuTriggerFor]=\"columnControlMenu\">Column Preferences\n                        <mat-icon>expand_more</mat-icon>\n                    </button>\n                </mat-card>\n            }\n            <mat-menu #columnControlMenu=\"matMenu\" class=\"amdg-column-control-menu\" (closed)=\"updateColumns(true)\">\n                <div class=\"amdg-column-control-container\" (click)=\"$event.stopPropagation()\">\n                    <div class=\"amdg-layout-container amdg-p-3\" style=\"align-items: start\">\n                        <mat-form-field class=\"amdg-w-100 amdg-fs-12\">\n                            <mat-label>Search Columns</mat-label>\n                            <mat-icon matPrefix class=\"amdg-mr-2\">search</mat-icon>\n                            <input matInput type=\"text\" [(ngModel)]=\"columnSearchParam\">\n                            @if (columnSearchParam) {\n                                <button mat-button matSuffix mat-icon-button aria-label=\"Clear\"\n                                    (click)=\"columnSearchParam=''\">\n                                    <mat-icon>close</mat-icon>\n                                </button>\n                            }\n                        </mat-form-field>\n                        <button mat-stroked-button aria-label=\"Reset\" color=\"warn\" class=\"amdg-ml-2\"\n                            (click)=\"columnPreferencesResetEmit.emit();columnSearchParam=''\">\n                            Reset\n                        </button>\n                    </div>\n\n                    <div class=\"amdg-cdk-drop-list\" cdkDropList (cdkDropListDropped)=\"columnDrop($event)\"\n                        [cdkDropListDisabled]=\"columnSearchParam.length === 0 ? false: true\">\n                        @for (heading of headings | columnSearchFilter: columnSearchParam; track heading.fieldName) {\n                            <div class=\"column-item\" cdkDrag>\n                                <div class=\"amdg-d-inline-flex\">\n                                    <mat-icon [ngStyle]=\"{'opacity': columnSearchParam.length === 0 ? 1: 0}\">\n                                        drag_indicator\n                                    </mat-icon>\n                                    @if (heading.show === undefined) {\n                                        <mat-checkbox disabled [checked]=\"true\"><span\n                                            class=\"amdg-ml-3\">{{ heading.display }}@if (!heading.display) {\n                                            <span style=\"font-style: italic\">Unnamed</span>\n                                        }</span></mat-checkbox>\n                                    } @else {\n                                        <mat-checkbox [(ngModel)]=\"heading.show\" (ngModelChange)=\"updateColumns()\"><span\n                                            class=\"amdg-ml-3\">{{ heading.display }} @if (!heading.display) {\n                                            <span style=\"font-style: italic\">Unnamed</span>\n                                        }</span></mat-checkbox>\n                                    }\n                                </div>\n                            </div>\n                        }\n                        @if ((headings | columnSearchFilter: columnSearchParam)?.length == 0) {\n                            <div class=\"amdg-text-muted amdg-text-center\">\n                                <b>No such column</b>\n                            </div>\n                        }\n                    </div>\n                </div>\n            </mat-menu>\n        </div>\n        <div>\n            <ng-content></ng-content>\n        </div>\n    </div>\n    <mat-card id=\"grid\" class=\"mat-elevation-z{{elevation}}\"\n        [ngClass]=\"{'fullscreen': fullscreen, 'grid-transparency': transparency}\"\n        [style.border-top-left-radius]=\"columnControl ? '0px' : '5px'\">\n        @if (scrollRemainingDistanceToLeft !== 0) {\n            <button mat-button (click)=\"scrollLeft()\" aria-label=\"navigate left\" class=\"navigate-left-btn\">\n                <mat-icon class=\"amdg-fs-40 navigate-icons\">chevron_left</mat-icon>\n            </button>\n        }\n        @if (scrollRemainingDistanceToRight !== 0 && gridItems.length !== 0) {\n            <button mat-button (click)=\"scrollRight()\" aria-label=\"navigate right\" class=\"navigate-right-btn\"\n                [ngStyle]=\"{'margin-right': horizontalScrollBarWidth + 'px'}\">\n                <mat-icon class=\"amdg-fs-40 navigate-icons\">chevron_right</mat-icon>\n            </button>\n        }\n        @if (gridItems.length === 0 && !loadingData) {\n            <div class=\"empty-records\">\n                No Records Available\n            </div>\n        }\n        <div class=\"horizontal-scroll\" #gridContainer>\n            <table\n                [ngStyle]=\"{'left': '-' + scrollRemainingDistanceToLeft + 'px', 'width': 'calc(100% - ' + horizontalScrollBarWidth + 'px)' }\">\n                <thead>\n                    @if (selection) {\n                        <th class=\"amdg-selection\">\n                            <mat-checkbox [(ngModel)]=\"allGridItemsSelected\" [disabled]=\"loadingData\"\n                                (ngModelChange)=\"gridItemSelectionChanged(true)\"></mat-checkbox>\n                        </th>\n                    }\n                    @if (expandable && (expandableConfig.multipleExpansion === false || expandableConfig.type === 'table')) {\n                        <th class=\"amdg-selection\"></th>\n                    }\n                    @if (expandable && (expandableConfig.multipleExpansion && expandableConfig.type !== 'table')) {\n                        <th class=\"amdg-selection amdg-fs-20 amdg-text-center amdg-cursor-pointer\"\n                            (click)=\"toggleAllRowsExpansion()\">\n                            @if (allRowsExpanded === false) {\n                                <span>+</span>\n                            } @else {\n                                <span>\u2212</span>\n                            }\n                        </th>\n                    }\n                    @for (heading of headings | columnFilter; track heading.fieldName) {\n                        <th [style.width]=\"heading.width\">\n                            <amdg-sort-header [heading]=\"heading\" (filter)=\"sort($event)\"></amdg-sort-header>\n                        </th>\n                    }\n                </thead>\n                <thead>\n                    @if (selection) {\n                        <th class=\"amdg-selection\"></th>\n                    }\n                    @if (expandable) {\n                        <th class=\"amdg-selection\"></th>\n                    }\n                    @for (heading of headings | columnFilter; track heading.fieldName) {\n                        <th [style.width]=\"heading.width\">\n                            <amdg-filter-header [initialFilters]=\"initialFilters\" [resetFilters]=\"resetFilters\"\n                                [heading]=\"heading\" (filter)=\"filter($event)\"></amdg-filter-header>\n                        </th>\n                    }\n                </thead>\n            </table>\n            @if (loadingData) {\n                <mat-progress-bar mode=\"indeterminate\" class=\"amdg-position-absolute amdg-z-index-1\"></mat-progress-bar>\n            }\n            <cdk-virtual-scroll-viewport #cdkVirtualScrollViewport id=\"amdgScrollViewport\"\n                [ngStyle]=\"{'height': 'calc(100vh - ' +offsetTop+ 'px)' }\" (scroll)=\"scrollChanged($event)\">\n                <div class=\"vertical-scroll\">\n                    <table>\n                        <tbody (window:mouseup)=\"endSelect()\">\n                        <ng-container\n                            *cdkVirtualFor=\"let item of gridItems; let odd=odd; let i = index;templateCacheSize: 400\">\n                            <tr (mouseover)=\"overSelect($event, item)\"\n                                [ngClass]=\"{ odd: odd, rowSelected: item.gridItemSelected == true, expanded: item.gridItemExpanded}\"\n                                [style.background]=\"item?.amdgGridRowBackground\">\n                                @if (selection) {\n                                    <td class=\"amdg-selection amdg-animated\" #selectionElem\n                                        (mousedown)=\"startSelect(item, selectionElem)\">\n                                        <mat-checkbox [(ngModel)]=\"item['gridItemSelected']\"\n                                            (ngModelChange)=\"gridItemSelectionChanged()\"></mat-checkbox>\n                                    </td>\n                                }\n                                @if (expandable) {\n                                    <td mat-ripple\n                                        class=\"amdg-selection amdg-animated amdg-fs-20 amdg-text-center amdg-cursor-pointer\"\n                                        (click)=\"clickRow($event, item, i)\">\n                                        @if (item.gridItemExpanded !== true) {\n                                            <span>+</span>\n                                        } @else {\n                                            <span>\u2212</span>\n                                        }\n                                    </td>\n                                }\n                                @for (heading of headings | columnFilter; track heading.fieldName) {\n                                    <td\n                                        [style.width]=\"heading.width\"\n                                        [style.textAlign]=\"heading.textAlign\"\n                                        [style.background]=\"heading.background\"\n                                        [style.color]=\"heading.color\"\n                                        [style.fontWeight]=\"heading.fontWeight\"\n                                        [style.fontStyle]=\"heading.fontStyle\">\n\n                                        @switch (heading.type) {\n\n                                            @case ('image-url') {\n                                                <div style=\"height: 48px\">\n                                                    <img [src]=\"item[heading.fieldName]\" alt=\"grid image item\"\n                                                        width=\"40px\" height=\"40px\" class=\"amdg-mt-1 amdg-image-tag\"\n                                                        [matMenuTriggerFor]=\"imageMenu\" #trigger=\"matMenuTrigger\"\n                                                        (mouseenter)=\"trigger.openMenu()\"\n                                                        (mouseleave)=\"trigger.closeMenu()\">\n                                                    <mat-menu #imageMenu=\"matMenu\" [hasBackdrop]=\"false\"\n                                                        class=\"amdg-image-menu-padding\">\n                                                        <img [src]=\"item[heading.fieldName]\" class=\"amdg-image-tag\"\n                                                            alt=\"grid image item\" width=\"150px\" height=\"150px\">\n                                                    </mat-menu>\n                                                </div>\n                                            }\n                                            @case ('button-group') {\n                                                <span>\n                                                    @if (heading.other && heading.other.buttons.length === 1) {\n                                                        <button [disabled]=\"item[heading.other.buttons[0].disableField]\" color=\"primary\"\n                                                            class=\"amdg-button-group-btn amdg-mr-2\" type=\"button\" mat-button\n                                                            (click)=\"goToLink(heading.fieldName, item, heading.other.buttons[0].display)\">\n                                                        <mat-icon class=\"amdg-mr-2\">{{ heading.other.buttons[0].icon }}</mat-icon>\n                                                            {{ heading.other.buttons[0].display }}\n                                                      </button>\n                                                    } @else if (heading.other && heading.other.buttons.length > 1) {\n                                                        <button class=\"amdg-button-group-btn\" mat-button color=\"primary\"\n                                                            [matMenuTriggerFor]=\"gridButtonListMenu\"\n                                                            [disabled]=\"item[heading.other.mainButton.disableField]\"> {{ heading.other.mainButton.display }}\n                                                            <mat-icon>{{ heading.other.mainButton.icon }}</mat-icon></button>\n                                                        <mat-menu #gridButtonListMenu=\"matMenu\" xPosition=\"before\">\n                                                        @for (btn of heading.other.buttons; track btn) {\n                                                            <button class=\"amdg-mat-menu-item\" [disabled]=\"item[btn.disableField]\" mat-menu-item\n                                                                (click)=\"goToLink(heading.fieldName, item, btn.display)\">\n                                                            <mat-icon class=\"amdg-mr-2 amdg-fs-20\">{{ btn.icon }}</mat-icon>\n                                                                {{ btn.display }}\n                                                          </button>\n                                                        }\n                                                      </mat-menu>\n                                                    }\n                                                </span>\n                                            }\n                                            @case ('currency') {\n                                                <span>\n                                                    {{ item[heading.fieldName] | currency: heading.prefix }}\n                                                </span>\n                                            }\n                                            @default {\n                                                <span\n                                                    [title]=\"item[heading.title] ? item[heading.title] : item[heading.fieldName]\">\n                                                    @if (heading?.clickable) {\n                                                        @if (heading.clickable === 'url') {\n                                                            @if (heading.other.source === 'external') {\n                                                                @if (heading.other && heading.other['urlTemplate']) {\n                                                                    <a mat-button disableRipple color=\"primary\" class=\"amdg-link\"\n                                                                        [ngClass]=\"{'amdg-link-disabled': loadingData}\"\n                                                                        [href]=\"item[heading.fieldName + 'Link'] + (item[heading.fieldName + 'QueryParams'] ? '?' + item[heading.fieldName + 'QueryParams'] : '')\">{{ item[heading.fieldName] }}</a>\n                                                                }\n                                                                @if (heading.other && heading.other.openTab && item[heading.fieldName]) {\n                                                                    <mat-icon color=\"primary\" class=\"amdg-fs-12 amdg-icon-external-link\"\n                                                                        [ngClass]=\"{'link-amdg-link-disabled': loadingData}\"\n                                                                        (click)=\"openExternalLinkInNewTab(item[heading.fieldName + 'Link'], item[heading.fieldName + 'QueryParams'])\">launch</mat-icon>\n                                                                }\n                                                            } @else {\n                                                                @if (heading.other && heading.other['urlTemplate']) {\n                                                                    <a mat-button disableRipple color=\"primary\" class=\"amdg-link\"\n                                                                        [ngClass]=\"{'link-amdg-link-disabled': loadingData}\"\n                                                                        [routerLink]=\"item[heading.fieldName + 'Link']\"\n                                                                        [queryParams]=\"item[heading.fieldName + 'QueryParams']\">{{ item[heading.fieldName] }}</a>\n                                                                }\n                                                                @if (heading.other && heading.other.openTab && item[heading.fieldName]) {\n                                                                    <mat-icon color=\"primary\" class=\"amdg-fs-12 amdg-icon-external-link\"\n                                                                        [ngClass]=\"{'link-amdg-link-disabled': loadingData}\"\n                                                                        (click)=\"openLinkInNewTab(item[heading.fieldName + 'Link'], item[heading.fieldName + 'QueryParams'])\">launch</mat-icon>\n                                                                }\n                                                            }\n                                                        }\n                                                        @if (heading.clickable === 'button') {\n                                                            <a mat-button disableRipple color=\"primary\" class=\"amdg-link\"\n                                                                (click)=\"goToLink(heading.fieldName, item, item[heading.fieldName])\">\n                                                           @if (heading.prefix) {\n                                                               <span [innerHTML]=\"heading.prefix | template : item\"></span>\n                                                           }\n                                                                {{ item[heading.fieldName] }}\n                                                                @if (heading.suffix) {\n                                                                    <span [innerHTML]=\"heading.suffix | template : item\"></span>\n                                                                }\n                                                        </a>\n                                                        }\n                                                    } @else {\n                                                        @if (heading.prefix) {\n                                                            <span [innerHTML]=\"heading.prefix | template : item\"></span>\n                                                        }\n                                                        {{ item[heading.fieldName] }}\n                                                        @if (heading.suffix) {\n                                                            <span [innerHTML]=\"heading.suffix | template : item\"></span>\n                                                        }\n                                                    }\n                                                </span>\n                                            }\n                                        }\n                                    </td>\n                                }\n                            </tr>\n                            @if (expandable && item.gridItemExpanded) {\n                                <tr [style.height]=\"'auto'\" [ngClass]=\"{ odd: odd, rowSelected: item.gridItemSelected}\">\n                                    <td class=\"amdg-p-0\" [attr.colspan]=\"headings.length + 1 + (selection ? 1 : 0)\">\n                                        <div\n                                            [ngClass]=\"[item.gridItemExpanded ? 'amdg-content-opened' : 'amdg-content-closed']\">\n                                            @switch (expandableConfig.type) {\n                                                @case ('html') {\n                                                    <div [innerHTML]=\"expandableConfig.template | template : item\"\n                                                        [ngStyle]=\"{\n                                              width: (gridWidth - 16) + 'px',\n                                              position: 'relative',\n                                              left: scrollRemainingDistanceToLeft + 'px',\n                                              borderTop: '1px solid rgba(118, 118, 118, 0.3)'\n                                            }\">\n                                                    </div>\n                                                }\n                                                @case ('table') {\n                                                    @if (item.gridItemExpanded) {\n                                                        <div class=\"amdg-p-2\" style=\"height: 320px;overflow: auto\"\n                                                            [ngStyle]=\"{\n                                                width: (gridWidth - 30) + 'px',\n                                                position: 'relative',\n                                                left: scrollRemainingDistanceToLeft + 'px',\n                                                borderTop: '1px solid rgba(118, 118, 118, 0.3)'\n                                              }\">\n                                                            <amdg-child-grid\n                                                                [headings]=\"expandableConfig.childGrid!.headings\"\n                                                                [url]=\"expandableConfig.childGrid!.url\"\n                                                                [entity]=\"expandableConfig.childGrid!.entity | template_object: item\"\n                                                                [serverSidePagination]=\"true\">\n                                                            </amdg-child-grid>\n                                                        </div>\n                                                    }\n                                                }\n                                                @case ('breakdown') {\n                                                    <div class=\"amdg-h-150px\">\n                                                        <div [innerHTML]=\"expandableConfig.template | template : item\"\n                                                            [ngStyle]=\"{\n                                              width: (gridWidth - 16) + 'px',\n                                              position: 'relative',\n                                              left: scrollRemainingDistanceToLeft + 'px',\n                                              borderTop: '1px solid rgba(118, 118, 118, 0.3)'\n                                            }\">\n                                                        </div>\n                                                        <table class=\"amdg-w-100\"\n                                                            [ngClass]=\"{'amdg-breakdown-table-border-top': expandableConfig.template}\">\n                                                            @for (item of item.amdgBreakdownGridRecords; track item; let\n                                                                odd = $odd; let even = $even; ) {\n                                                                <tr [ngClass]=\"{'amdg-cursor-pointer': expandable,odd: odd, even: even}\">\n                                                                    @if (selection) {\n                                                                        <td class=\"amdg-selection-breakdown\"></td>\n                                                                    }\n                                                                    @if (expandable) {\n                                                                        <td class=\"amdg-selection\"></td>\n                                                                    }\n                                                                    @for (\n                                                                        heading of headings | columnFilter; track heading.fieldName) {\n                                                                        <td\n                                                                            [style.width]=\"heading.width\"\n                                                                            [style.textAlign]=\"heading.textAlign\"\n                                                                            [style.background]=\"heading.background\"\n                                                                            [style.color]=\"heading.color\"\n                                                                            [style.fontWeight]=\"heading.fontWeight\"\n                                                                            [style.fontStyle]=\"heading.fontStyle\"\n                                                                            class=\"amdg-text-truncate\">\n                                                                            @switch (heading.type) {\n                                                                                @case ('image-url') {\n                                                                                    <span>\n                                              <img [src]=\"item[heading.fieldName]\" alt=\"grid image item\" width=\"80px\"\n                                                  height=\"80px\" class=\"amdg-mt-2 amdg-mb-2\">\n                                            </span>\n                                                                                }\n                                                                                @case ('button-group') {\n                                                                                    <span>\n                                            </span>\n                                                                                }\n                                                                                @case ('currency') {\n                                                                                    <span>\n                                              {{ item[heading.fieldName] | currency: heading.prefix }}\n                                            </span>\n                                                                                }\n                                                                                @default {\n                                                                                    <span\n                                                                                        [title]=\"item[heading.fieldName]\"> {{ item[heading.fieldName] }}</span>\n                                                                                }\n                                                                            }\n                                                                        </td>\n                                                                    }\n                                                                </tr>\n                                                            }\n                                                        </table>\n                                                    </div>\n                                                }\n                                            }\n                                        </div>\n                                    </td>\n                                </tr>\n                            }\n                        </ng-container>\n                            @if (gridItems.length === 0) {\n                                <tr class=\"empty\" [ngStyle]=\"{'height': 'calc(100vh - ' +offsetTop+ 'px)' }\">\n                                    @if (selection) {\n                                        <td class=\"amdg-selection amdg-animated\"></td>\n                                    }\n                                    @if (expandable) {\n                                        <td class=\"amdg-selection amdg-animated\"></td>\n                                    }\n                                    @for (heading of headings | columnFilter; track heading.fieldName) {\n                                        <td [style.width]=\"heading.width\"></td>\n                                    }\n                                </tr>\n                            }\n                        </tbody>\n                    </table>\n                </div>\n            </cdk-virtual-scroll-viewport>\n        </div>\n        <amdg-pagination\n            [loadingData]=\"loadingData\"\n            [noOfTotalRecords]=\"serverSidePagination ? (response.totalCount ? response.totalCount : 0) : response.gridData.length\"\n            [noOfRecords]=\"response.gridData.length\"\n            [noOfSelectedRow]=\"selectedRows.length\"\n            [currentPage]=\"currentPage\"\n            [disableFullScreenToggle]=\"disableFullScreenToggle\"\n            [pageSizes]=\"pageSizes\"\n            [newRecordsPerPage]=\"pageSize\"\n            (pageChanged)=\"serverSidePagination ? getData($event) : pageChanged($event)\"\n            (toggleFullScreen)=\"toggleFullScreen($event)\">\n        </amdg-pagination>\n    </mat-card>\n</div>\n", styles: [".mat-menu-panel.amdg-column-control-menu{width:320px;max-width:320px}.amdg-column-control-container{max-height:420px;overflow:hidden}.amdg-column-control-container .amdg-cdk-drop-list{padding:0 9px;min-height:60px;display:block;border-radius:4px;max-height:345px;overflow:auto}.amdg-column-control-container .amdg-cdk-drop-list div div mat-icon{font-size:18px;top:2px;position:relative;cursor:move}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;background:#fff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.amdg-cdk-drop-list:last-child{border:none}.amdg-cdk-drop-list.cdk-drop-list-dragging .column-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.amdg-top-button,#amdg-grid-container .amdg-top-right-button button,#amdg-grid-container #column-control-btn-card button{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0 10px;line-height:25px!important;height:25px;border:none!important;font-weight:400;font-size:12px;background:#7676761a}#amdg-grid-container #column-control-btn-card{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0 0 0 1px}#amdg-grid-container .amdg-top-right-button{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-left:8px;padding:0;display:inline-block}#amdg-grid-container #grid{overflow:hidden;font-size:12px;position:relative;padding:0}#amdg-grid-container #grid.grid-transparency{background:#ffffffe6}#amdg-grid-container #grid .grid-nav-btns,#amdg-grid-container #grid .navigate-right-btn,#amdg-grid-container #grid .navigate-left-btn{position:absolute;top:calc(50% - 25px);z-index:1;background-color:#00000080;color:#fff;font-size:18px;min-width:40px;padding:0;height:50px}#amdg-grid-container #grid .navigate-left-btn{left:0;border-top-left-radius:0;border-bottom-left-radius:0}#amdg-grid-container #grid .navigate-right-btn{right:0;border-top-right-radius:0;border-bottom-right-radius:0}#amdg-grid-container #grid .navigate-icons{line-height:40px;font-size:40px;height:40px;width:40px}#amdg-grid-container #grid .empty-records{position:absolute;top:calc(50% - 25px);z-index:1;background-color:#00000080;color:#fff;font-size:16px;min-width:40px;margin:0 auto;right:0;left:0;width:190px;padding:10px;border-radius:4px;text-align:center;box-sizing:border-box}#amdg-grid-container #grid .horizontal-scroll{width:100%}#amdg-grid-container #grid .horizontal-scroll cdk-virtual-scroll-viewport{min-height:300px}#amdg-grid-container #grid .vertical-scroll{overflow-y:auto;height:100%}#amdg-grid-container #grid table{border-collapse:collapse;table-layout:fixed;width:100%;position:relative}#amdg-grid-container #grid table thead{background:#7676761a}#amdg-grid-container #grid th{border-bottom:1px solid rgba(118,118,118,.3);height:34px}#amdg-grid-container #grid th,#amdg-grid-container #grid td{padding:0 8px;border-left:1px solid rgba(118,118,118,.3);width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start;font-weight:400;box-sizing:border-box;line-height:20px}#amdg-grid-container #grid tr{height:20px;transition:all 10ms ease-out}#amdg-grid-container #grid tr:hover{transition:all ease .1s;background-color:#7676764d}#amdg-grid-container #grid tr.empty:hover{background-color:inherit}#amdg-grid-container #grid tr.rowSelected{background:#0099ff4d!important}#amdg-grid-container #grid tr.expanded{height:40px;font-size:1.1em}#amdg-grid-container #grid .odd{background-color:#7676761a}#amdg-grid-container #grid.fullscreen{position:fixed;inset:0;z-index:1000}.amdg-sticky{position:sticky!important;left:0;z-index:1!important;background:#f1f1f1}.amdg-selection{width:34px!important}.amdg-selection-breakdown{width:33px!important;border-left:0!important}#amdgScrollViewport{scroll-behavior:smooth}.amdg-link{background-color:transparent;cursor:pointer!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important;font-weight:500;font-size:inherit;text-decoration:none!important;padding:0!important;min-width:auto!important;line-height:normal!important;border-radius:0!important;display:inline!important}.amdg-link-disabled{pointer-events:none}.amdg-icon-external-link{position:relative;top:3px;cursor:pointer;margin-left:8px;height:auto!important}.amdg-icon-external-link:hover{text-decoration:none}.amdg-button-group-btn{line-height:19px!important;height:19px;font-size:inherit}.amdg-button-group-btn mat-icon{height:20px;width:20px;font-size:18px}.amdg-image-tag{object-fit:contain}.amdg-content-closed{height:0;overflow:hidden;transition:all .11s ease-out}.amdg-content-opened{transition:all .11s ease-out}.amdg-h-150px{max-height:150px;overflow-x:hidden;border-top:2px solid rgba(118,118,118,.3);border-bottom:2px solid rgba(118,118,118,.3)}.amdg-breakdown-table-border-top{border-top:2px solid rgba(118,118,118,.3)}.amdg-animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}mat-checkbox label{margin:0!important}@-webkit-keyframes amdg-pulse{0%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.2,1.2,1.2)}to{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes amdg-pulse{0%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.2,1.2,1.2)}to{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.amdg-pulse{-webkit-animation-name:amdg-pulse;animation-name:amdg-pulse}\n", ".amdg-small-stroked-button{line-height:26px!important;height:26px!important;font-size:12px!important}.amdg-layout-container{display:flex!important;justify-content:space-between!important;align-items:center!important;padding:0 8px!important}.amdg-m-0{margin:0!important}.amdg-mt-1{margin-top:.25rem!important}.amdg-mt-2{margin-top:.5rem!important}.amdg-mt-3{margin-top:.75rem!important}.amdg-ml-1{margin-left:.25rem!important}.amdg-ml-2{margin-left:.5rem!important}.amdg-ml-3{margin-left:.75rem!important}.amdg-mr-1{margin-right:.25rem!important}.amdg-mr-2{margin-right:.5rem!important}.amdg-mr-4{margin-right:1rem!important}.amdg-mb-1{margin-bottom:.25rem!important}.amdg-mb-2{margin-bottom:.5rem!important}.amdg-p-2{padding:.5rem!important}.amdg-p-0{padding:0!important}.amdg-p-3{padding:.75rem!important}.amdg-position-absolute{position:absolute!important}.amdg-d-inline-flex{display:inline-flex!important}.amdg-d-inline{display:inline!important}.amdg-d-inline-block{display:inline-block!important}.amdg-z-index-1{z-index:1!important}.amdg-d-none{display:none!important}.amdg-overflow-hidden{overflow:hidden!important}.amdg-fs-12{font-size:12px}.amdg-fs-20{font-size:20px}.amdg-text-muted{opacity:.6}.amdg-text-center{text-align:center!important}.amdg-fs-40{font-size:40px}.amdg-w-100{width:100%!important}.amdg-cursor-pointer{cursor:pointer}.amdg-font-weight-normal{font-weight:400!important}.amdg-font-weight-bold{font-weight:700!important}.amdg-text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.amdg-mat-menu-item{height:26px!important;line-height:26px!important;font-size:12px!important}.amdg-cell-color-circle{width:12px;height:12px;border-radius:12px;position:relative;top:2px;display:inline-block}.amdg-mat-option{height:26px!important;padding:0 10px!important}.mat-select-value{text-align:left}.amdg-custom-select-position{margin:25px 0}.amdg-checkbox .mdc-form-field .mdc-checkbox{padding:0!important}.amdg-checkbox .mdc-form-field .mdc-checkbox .mat-mdc-checkbox-touch-target,.amdg-checkbox .mdc-form-field .mdc-checkbox .mdc-checkbox__native-control{top:0;right:0;left:0;width:18px;height:18px;transform:none}.amdg-checkbox .mdc-form-field .mdc-checkbox .mdc-checkbox__background{left:0;top:0}.amdg-link .mat-button-wrapper:hover{text-decoration:underline}body.darkMode .amdg-modified-mat-select,body.darkMode .amdg-filter-open-btn{background:#424242;color:#fff}body.darkMode .cdk-drag-preview,body.darkMode .mat-menu-panel{color:#fff;background:#424242}body.darkMode #amdg-multi-select-search,body.darkMode #amdg-multi-select-search-close,body.darkMode .amdg-additional-selection{color:#fff}body.darkMode #grid.grid-transparency{background:#424242e6!important}.amdg-image-menu-padding .mat-menu-content{padding:8px!important;height:150px!important;box-sizing:content-box!important}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1$1.MatDialog }, { type: i0.NgZone }, { type: GridService }], propDecorators: { requestBodyEmit: [{
                type: Output
            }], responseEmit: [{
                type: Output
            }], selectionEmit: [{
                type: Output
            }], filtersChangedEmit: [{
                type: Output
            }], sortChangedEmit: [{
                type: Output
            }], buttonClickEmit: [{
                type: Output
            }], columnPreferencesChangedEmit: [{
                type: Output
            }], columnPreferencesChangeEndedEmit: [{
                type: Output
            }], columnPreferencesResetEmit: [{
                type: Output
            }], dataErrorEmit: [{
                type: Output
            }], headings: [{
                type: Input
            }], url: [{
                type: Input
            }], selection: [{
                type: Input
            }], columnControl: [{
                type: Input
            }], entity: [{
                type: Input
            }], transparency: [{
                type: Input
            }], elevation: [{
                type: Input
            }], serverSidePagination: [{
                type: Input
            }], initialFilters: [{
                type: Input
            }], resetFilters: [{
                type: Input
            }], expandable: [{
                type: Input
            }], expandableConfig: [{
                type: Input
            }], disableFullScreenToggle: [{
                type: Input
            }], pageSizes: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], gridContainer: [{
                type: ViewChild,
                args: ['gridContainer']
            }], cdkVirtualScrollViewport: [{
                type: ViewChild,
                args: ['cdkVirtualScrollViewport']
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }] } });

class SearchPipe {
    transform(values, args) {
        if (args === undefined) {
            return values;
        }
        return values.filter((value) => {
            return value.text.toLowerCase().includes(args.toLowerCase());
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: SearchPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "20.2.1", ngImport: i0, type: SearchPipe, isStandalone: false, name: "search" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: SearchPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'search',
                    standalone: false
                }]
        }] });

class AngularMaterialDataGridModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: AngularMaterialDataGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.1", ngImport: i0, type: AngularMaterialDataGridModule, declarations: [PaginationComponent,
            ConfirmationComponent,
            ColumnFilterPipe,
            SearchPipe,
            ColumnSearchFilterPipe,
            SortHeaderComponent,
            FilterHeaderComponent,
            MultiSelectComponent,
            NumberFilterComponent,
            DateFilterComponent,
            StringFilterComponent,
            TagFilterComponent,
            ServerBindGridComponent,
            TemplatePipe,
            TemplateObjectPipe,
            ChildGridComponent], imports: [CommonModule,
            HttpClientModule,
            ScrollingModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatButtonModule,
            MatIconModule,
            MatTooltipModule,
            MatDatepickerModule,
            MatMenuModule,
            MatInputModule,
            MatDividerModule,
            MatChipsModule,
            MatCardModule,
            MatCheckboxModule,
            MatProgressBarModule,
            MatRippleModule,
            DragDropModule,
            RouterModule], exports: [ServerBindGridComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: AngularMaterialDataGridModule, imports: [CommonModule,
            HttpClientModule,
            ScrollingModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatButtonModule,
            MatIconModule,
            MatTooltipModule,
            MatDatepickerModule,
            MatMenuModule,
            MatInputModule,
            MatDividerModule,
            MatChipsModule,
            MatCardModule,
            MatCheckboxModule,
            MatProgressBarModule,
            MatRippleModule,
            DragDropModule,
            RouterModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.1", ngImport: i0, type: AngularMaterialDataGridModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        PaginationComponent,
                        ConfirmationComponent,
                        ColumnFilterPipe,
                        SearchPipe,
                        ColumnSearchFilterPipe,
                        SortHeaderComponent,
                        FilterHeaderComponent,
                        MultiSelectComponent,
                        NumberFilterComponent,
                        DateFilterComponent,
                        StringFilterComponent,
                        TagFilterComponent,
                        ServerBindGridComponent,
                        TemplatePipe,
                        TemplateObjectPipe,
                        ChildGridComponent
                    ],
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        ScrollingModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatButtonModule,
                        MatIconModule,
                        MatTooltipModule,
                        MatDatepickerModule,
                        MatMenuModule,
                        MatInputModule,
                        MatDividerModule,
                        MatChipsModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatProgressBarModule,
                        MatRippleModule,
                        DragDropModule,
                        RouterModule
                    ],
                    exports: [ServerBindGridComponent]
                }]
        }] });

/*
 * Public API Surface of angular-material-data-grid
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularMaterialDataGridModule, AngularMaterialDataGridService, CustomVirtualScrollStrategy, ServerBindGridComponent };
//# sourceMappingURL=angular-material-data-grid.mjs.map
