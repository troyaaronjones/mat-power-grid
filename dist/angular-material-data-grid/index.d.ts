import * as i0 from '@angular/core';
import { OnInit, AfterViewInit, OnChanges, ElementRef, ChangeDetectorRef, Renderer2, NgZone, SimpleChanges, PipeTransform, EventEmitter, OnDestroy } from '@angular/core';
import * as i35 from '@angular/cdk/drag-drop';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i19 from '@angular/cdk/scrolling';
import { FixedSizeVirtualScrollStrategy, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import * as i18 from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import * as i20 from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import * as i22 from '@angular/material/select';
import { MatSelect } from '@angular/material/select';
import * as i27 from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';
import * as i26 from '@angular/material/datepicker';
import { MatDatepicker } from '@angular/material/datepicker';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i17 from '@angular/common';
import * as i21 from '@angular/material/form-field';
import * as i23 from '@angular/material/button';
import * as i24 from '@angular/material/icon';
import * as i25 from '@angular/material/tooltip';
import * as i28 from '@angular/material/input';
import * as i29 from '@angular/material/divider';
import * as i30 from '@angular/material/chips';
import * as i31 from '@angular/material/card';
import * as i32 from '@angular/material/checkbox';
import * as i33 from '@angular/material/progress-bar';
import * as i34 from '@angular/material/core';
import * as i36 from '@angular/router';

declare class AngularMaterialDataGridService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularMaterialDataGridService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AngularMaterialDataGridService>;
}

interface ButtonConfigType {
    /**
     * display - Button Text
     */
    display: string;
    /**
     * icon - Button icon from the material icons list
     *        https://material.io/resources/icons
     */
    icon: string;
    /**
     * disableField - If there is a reason to disable a given button based on a certain calculation or a certain logic, a row's
     *                field can be given which will contain a boolean value. If it is true this button will get disabled.
     *                Eg: a user object may have a field called 'archived' which if true this button can be disabled.
     */
    disableField?: string;
}

interface MultiSelectOptionsType {
    text: string;
    value: string;
}

interface OtherConfigType {
    /**
     * URL BUILDER
     * urlTemplate - This refers to the internal route (url) of the angular application. Eg: '/detail/:id'. If the character ':' is
     *               used within the url provided the word next to it will be treated as a variable which will be replaced by the
     *               data retrieved. For example '/detail/:id' will be replaced with '/detail/1' or '/detail/2' depending on the
     *               id value
     */
    urlTemplate?: string;
    /**
     * URL BUILDER
     * queryParams - This is an optional object that can be provided to build query params. Eg: {userEmail: 'email'}
     *               The url may end like this '?userEmail=fzute0@reverbnation.com'
     */
    queryParams?: object;
    /**
     * URL BUILDER
     * openTab - An optional feature which determines if there is an open tab icon next to the url which will open the url in a
     *           separate tab in the browser (if clicked)
     */
    openTab?: boolean;
    /**
     * MULTI-SELECT CONFIGURATION
     * selectionMode - Multi-select can be configured to have a single selection or multiple selection of filter values
     */
    selectionMode?: 'single' | 'multiple';
    /**
     * MULTI-SELECT CONFIGURATION
     * source - Multi-select source can either be internal or external. If the source is internal;
     *          url, key and value fields are not needed. However, optionsObject is essential when the source is internal
     *          IMPORTANT - source can also be used for url builder - if external is given external links can be opened
     */
    source?: 'internal' | 'external';
    /**
     * MULTI-SELECT CONFIGURATION
     * optionsObject - This contains the filter values and their display names which is essential when source is internal
     */
    optionsObject?: MultiSelectOptionsType[];
    /**
     * MULTI-SELECT CONFIGURATION
     * url - The url of a GET request needed if the source is external which should return an array of objects.
     */
    url?: string;
    /**
     * MULTI-SELECT CONFIGURATION
     * key - The key is needed if the source is external, this refers to the display name of the filter value
     */
    key?: string;
    /**
     * MULTI-SELECT CONFIGURATION
     * value - The value is needed if the source is external, this refers to the actual filter value
     */
    value?: string;
    /**
     * GRID ACTION BUTTONS CONFIGURATION
     * mainButton - if buttons array has more than one object (button) this is essential, This refers to the menu button which will
     *              contain the buttons if there are more than one button. It uses MatMenu for this purpose
     */
    mainButton?: ButtonConfigType;
    /**
     * GRID ACTION BUTTONS CONFIGURATION
     * buttons - This array contains the button elements. If one button is there it will be displayed in the column, if multiple are
     *           there it will be inside the mat menu.
     */
    buttons?: ButtonConfigType[];
}

interface GridHeadingInterface {
    /**
     * fieldName - This refers to field name mapping which gets returned from the server.
     *             The column value will be bound with this mapping
     */
    fieldName: string;
    /**
     * display - This refers to the column header name which is displayed to the user
     */
    display: string;
    /**
     * type - A column consists of multiple data types. Based on the value given here the column filtration and the way the data
     *        is displayed may vary
     */
    type: 'string' | 'number' | 'currency' | 'date' | 'button-group' | 'image-url';
    /**
     * width - This refers to the column's width which can be given as a px value or a percentage. Eg: '150px' or '25%'
     */
    width?: string;
    /**
     * clickable - This boolean value determines if the values in this columns are clickable which will
     *             trigger a click event. It is applicable to data types of 'string' | 'number' | 'currency' | 'date'
     */
    clickable?: 'url' | 'button';
    /**
     * disableFiltering - This boolean value determines if the filter is shown or hidden.
     *                    By default filtering is enabled which means it goes as false
     */
    disableFiltering?: boolean;
    /**
     * disableSorting - This boolean value determines if sorting is enabled/disabled.
     *                  By default sorting is enabled which means it goes as false
     */
    disableSorting?: boolean;
    /**
     * textAlign - This value can be used to align column items to left, right or center. By default, it is left-aligned.
     */
    textAlign?: 'left' | 'right' | 'center';
    /**
     * background - This value can be used to change the background color of a column.
     */
    background?: string;
    /**
     * color - This value can be used to change the font color of a column.
     */
    color?: string;
    /**
     * fontWeight - This value can be used to change the fontWeight of a column.
     */
    fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'bold' | 'normal';
    /**
     * fontStyle - This value can be used to change the fontStyle of a column.
     */
    fontStyle?: 'italic' | 'normal';
    /**
     * prefix - Add a custom prefix to the displayed data. For example # in front of a number - #1.
     */
    prefix?: string;
    /**
     * suffix - Add a custom suffix to the displayed data. For example % at the end of a number - 20%.
     */
    suffix?: string;
    /**
     * filterType - This is a feature to enable an optional filter type that can be given for types url or string.
     *              A multi-select filter type is an advanced filter which can either have one or more filter values given to a single
     *              column. A tag filter is a similar filter but is used if there are a very large number of possible values which
     *              cannot be displayed in a multi-filter's list of options. Eg: Social Security Numbers
     */
    filterType?: 'multi-select' | 'tag';
    /**
     * show - This identifies if a column is shown to the user or not. If this value is not given, the column is treated as a required
     *        column which is always shown and cannot be hidden by the user through column control. If true is given the column will
     *        be shown and the user can also hide it. If false is given the user cannot see the column but can enable it back through
     *        column control
     */
    show?: boolean;
    /**
     * headerTooltip - This can be used to pass a small explanation for the column header which will be shown when the
     *                 user hovers over
     */
    headerTooltip?: string;
    /**
     * other - This refers to additional configurations that can be given to a column to control the behaviour of urls, multi-selects
     *         and action buttons in the grid
     */
    other?: OtherConfigType;
    /**
     * sort - This field is autofilled by the grid system, do not set values manually
     */
    sort?: null | '' | undefined | 'desc' | 'asc';
}

interface GridFilterItemInterface {
    field: string;
    operator: string;
    value: string;
}

interface GridSortItemInterface {
    sort: null | '' | undefined | 'desc' | 'asc';
    sortField: null | '' | undefined | string;
}

interface GridRequestInterface {
    entity?: any;
    page?: number;
    perPage?: number;
    filters?: GridFilterItemInterface[];
    sort?: null | '' | undefined | 'desc' | 'asc';
    sortField?: null | '' | undefined | string;
}

interface GridResponseInterface {
    gridData: any[];
    totalCount?: number;
    other?: any;
}

interface GridButtonClickInterface {
    fieldName: string;
    click: string;
    item: any;
}

interface ChildGridConfigType {
    headings: GridHeadingInterface[];
    url: string;
    entity: any;
    serverSidePagination: boolean;
}

interface GridMasterDetailConfigInterface {
    /**
     * type - Master detail grid type determines if the row is expanded the container will
     *        contain a custom template or a child grid.
     */
    type: 'table' | 'html' | 'breakdown';
    /**
     * multipleExpansion - This allows multiple rows to be expanded at a given time or not
     */
    multipleExpansion: boolean;
    /**
     * template - If the Master detail grid type is 'html' pass the template through here
     */
    template?: string;
    /**
     * template - If the Master detail grid type is 'table' pass the child table configuration through here
     */
    childGrid?: ChildGridConfigType;
}

declare class GridService {
    private http;
    constructor(http: HttpClient);
    getAny(url: string): Observable<any>;
    getAnyPost(url: string, body: any): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GridService>;
}

declare class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
    constructor();
}
declare class ServerBindGridComponent implements OnInit, AfterViewInit, OnChanges {
    private changeDetectorRef;
    private renderer;
    dialog: MatDialog;
    private ngZone;
    private gridService;
    requestBodyEmit: any;
    responseEmit: any;
    selectionEmit: any;
    filtersChangedEmit: any;
    sortChangedEmit: any;
    buttonClickEmit: any;
    columnPreferencesChangedEmit: any;
    columnPreferencesChangeEndedEmit: any;
    columnPreferencesResetEmit: any;
    dataErrorEmit: any;
    headings: GridHeadingInterface[];
    url: string;
    selection: boolean;
    columnControl: boolean;
    entity: null;
    transparency: boolean;
    elevation: 0 | 1 | 2 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
    serverSidePagination: boolean;
    initialFilters: GridFilterItemInterface[];
    resetFilters: null;
    expandable: boolean;
    expandableConfig: GridMasterDetailConfigInterface;
    disableFullScreenToggle: boolean;
    pageSizes: number[];
    pageSize: number;
    headingsCopy: never[];
    columnSearchParam: string;
    allGridItemsSelected: boolean;
    loadingData: boolean;
    response: GridResponseInterface;
    responseBackup: GridResponseInterface;
    gridItems: any[];
    selectionStarted: boolean;
    selectionTimeoutHandler: any;
    allCheckBoxesSelected: boolean;
    selectedRows: any[];
    gridWidth: number;
    offsetTop: number;
    scrollRemainingDistanceToLeft: number;
    scrollRemainingDistanceToRight: number;
    horizontalScrollBarWidth: number;
    currentPage: number;
    sortObj: GridSortItemInterface;
    filters: GridFilterItemInterface[];
    gridPostSubscription: Subscription;
    fullscreen: boolean;
    allRowsExpanded: boolean;
    gridContainer: ElementRef;
    cdkVirtualScrollViewport: CdkVirtualScrollViewport;
    onResize(): void;
    constructor(changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, dialog: MatDialog, ngZone: NgZone, gridService: GridService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private calculateGridWidth;
    scrollLeft(): void;
    scrollRight(): void;
    scrollChanged(ev?: Event): void;
    updateColumns(columnPreferenceChangeEnded?: boolean): void;
    columnDrop(ev: CdkDragDrop<any>): void;
    sort(ev: GridHeadingInterface): void;
    filter(ev: GridFilterItemInterface): void;
    gridItemSelectionChanged(all?: boolean): void;
    startSelect(item: any, element: HTMLElement): void;
    endSelect(): void;
    overSelect($event: MouseEvent, item: any): void;
    toggleAllRowsExpansion(): void;
    clickRow($event: any, item: any, index: number): void;
    getSelection(): void;
    getData({ pageNo, recordsPerPage }: any): void;
    private sortAscending;
    pageChanged({ pageNo, recordsPerPage }: any): void;
    private linkCreationInterceptor;
    toggleFullScreen(ev: boolean): void;
    openLinkInNewTab(link: string, params?: any): void;
    openExternalLinkInNewTab(link: string, params: any): void;
    goToLink(fieldName: string, item: string, click?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ServerBindGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ServerBindGridComponent, "amdg-grid", never, { "headings": { "alias": "headings"; "required": false; }; "url": { "alias": "url"; "required": false; }; "selection": { "alias": "selection"; "required": false; }; "columnControl": { "alias": "columnControl"; "required": false; }; "entity": { "alias": "entity"; "required": false; }; "transparency": { "alias": "transparency"; "required": false; }; "elevation": { "alias": "elevation"; "required": false; }; "serverSidePagination": { "alias": "serverSidePagination"; "required": false; }; "initialFilters": { "alias": "initialFilters"; "required": false; }; "resetFilters": { "alias": "resetFilters"; "required": false; }; "expandable": { "alias": "expandable"; "required": false; }; "expandableConfig": { "alias": "expandableConfig"; "required": false; }; "disableFullScreenToggle": { "alias": "disableFullScreenToggle"; "required": false; }; "pageSizes": { "alias": "pageSizes"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; }, { "requestBodyEmit": "requestBodyEmit"; "responseEmit": "responseEmit"; "selectionEmit": "selectionEmit"; "filtersChangedEmit": "filtersChangedEmit"; "sortChangedEmit": "sortChangedEmit"; "buttonClickEmit": "buttonClickEmit"; "columnPreferencesChangedEmit": "columnPreferencesChangedEmit"; "columnPreferencesChangeEndedEmit": "columnPreferencesChangeEndedEmit"; "columnPreferencesResetEmit": "columnPreferencesResetEmit"; "dataErrorEmit": "dataErrorEmit"; }, never, ["*"], false, never>;
}

declare class PaginationComponent implements OnInit, OnChanges {
    dialog: MatDialog;
    pageChanged: any;
    toggleFullScreen: any;
    noOfTotalRecords: number;
    loadingData: boolean;
    noOfRecords: number;
    noOfSelectedRow: number;
    currentPage: number;
    disableFullScreenToggle: boolean;
    showNoOfRecords: boolean;
    pageSizes: number[];
    newRecordsPerPage: number;
    recordsPerPage: number;
    pages: number;
    pagesOnDisplay: number[];
    pageInfoDisplayText: string;
    discardSelectionConfirmationObj: {
        readonly width: "300px";
        readonly data: {
            readonly title: "Discard Selection?";
            readonly content: "If you leave this page your selection will get discarded, do you want to proceed anyway?";
            readonly ok_text: "PROCEED";
            readonly cancel_text: "CANCEL";
        };
    };
    fullscreen: boolean;
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    pageChange(pageNo: number, notify?: boolean): void;
    continuePageChange(pageNo: number, notify?: boolean): void;
    recordsPerPageChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "amdg-pagination", never, { "noOfTotalRecords": { "alias": "noOfTotalRecords"; "required": false; }; "loadingData": { "alias": "loadingData"; "required": false; }; "noOfRecords": { "alias": "noOfRecords"; "required": false; }; "noOfSelectedRow": { "alias": "noOfSelectedRow"; "required": false; }; "currentPage": { "alias": "currentPage"; "required": false; }; "disableFullScreenToggle": { "alias": "disableFullScreenToggle"; "required": false; }; "showNoOfRecords": { "alias": "showNoOfRecords"; "required": false; }; "pageSizes": { "alias": "pageSizes"; "required": false; }; "newRecordsPerPage": { "alias": "newRecordsPerPage"; "required": false; }; }, { "pageChanged": "pageChanged"; "toggleFullScreen": "toggleFullScreen"; }, never, never, false, never>;
}

declare class ConfirmationComponent implements OnInit {
    dialogRef: MatDialogRef<ConfirmationComponent>;
    data: any;
    content: {
        title: null;
        content: null;
        cancel_text: null;
        ok_text: null;
    };
    constructor(dialogRef: MatDialogRef<ConfirmationComponent>, data: any);
    ngOnInit(): void;
    close(): void;
    ok(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmationComponent, "amdg-confirmation", never, {}, {}, never, never, false, never>;
}

declare class ColumnFilterPipe implements PipeTransform {
    transform(value: any[], ...args: unknown[]): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnFilterPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ColumnFilterPipe, "columnFilter", false>;
}

declare class SearchPipe implements PipeTransform {
    transform(values: any, args?: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SearchPipe, "search", false>;
}

declare class ColumnSearchFilterPipe implements PipeTransform {
    transform(values: any[], args: any): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnSearchFilterPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ColumnSearchFilterPipe, "columnSearchFilter", false>;
}

declare class SortHeaderComponent {
    heading: any;
    filter: EventEmitter<any>;
    constructor();
    sort(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SortHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SortHeaderComponent, "amdg-sort-header", never, { "heading": { "alias": "heading"; "required": false; }; }, { "filter": "filter"; }, never, never, false, never>;
}

declare class FilterHeaderComponent implements OnInit {
    heading: any;
    initialFilters: GridFilterItemInterface[];
    resetFilters: null;
    filter: EventEmitter<any>;
    initialFilter?: GridFilterItemInterface;
    constructor();
    ngOnInit(): void;
    filterObjCreated(ev: GridFilterItemInterface): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterHeaderComponent, "amdg-filter-header", never, { "heading": { "alias": "heading"; "required": false; }; "initialFilters": { "alias": "initialFilters"; "required": false; }; "resetFilters": { "alias": "resetFilters"; "required": false; }; }, { "filter": "filter"; }, never, never, false, never>;
}

declare class MultiSelectComponent implements OnInit, OnChanges {
    private gridService;
    filter: any;
    initialFilter?: GridFilterItemInterface;
    resetFilters: null;
    filterConfig: any;
    mySelect: MatSelect;
    fromElement: ElementRef;
    selection: FormControl<any>;
    selectionValuesApplied: any[];
    selectionList: any[];
    allSelected: boolean;
    searchFilter: string;
    multiple: boolean;
    filterApplied: boolean;
    constructor(gridService: GridService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private setInitialFilters;
    menuOpened(): void;
    selectionChange(): void;
    close(): void;
    toggle(): void;
    reset(emit?: boolean): void;
    changeSearch(): void;
    searchFilterKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiSelectComponent, "amdg-multi-select", never, { "initialFilter": { "alias": "initialFilter"; "required": false; }; "resetFilters": { "alias": "resetFilters"; "required": false; }; "filterConfig": { "alias": "filterConfig"; "required": false; }; }, { "filter": "filter"; }, never, never, false, never>;
}

declare class NumberFilterComponent implements OnInit, OnChanges, OnDestroy {
    initialFilter?: GridFilterItemInterface;
    resetFilters: null;
    filter: any;
    filterApplied: boolean;
    numericFilterTypes: {
        value: string;
        text: string;
    }[];
    selection: FormControl<string | null>;
    selectionSubscription: Subscription;
    NUMBER_PATTERN: "^(\\+|-)?[0-9]+(.[0-9]{1,2})?$";
    range: FormGroup<{
        from: FormControl<string | null>;
        to: FormControl<string | null>;
    }>;
    value: FormControl<string | null>;
    filterParam: string | number;
    invalidRangeValue: boolean;
    invalidValue: boolean;
    menu: MatMenuTrigger;
    fromElement: ElementRef;
    valueElement: ElementRef;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    menuOpened(): void;
    reset(emit?: boolean): void;
    validate(): void;
    private close;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NumberFilterComponent, "amdg-number-filter", never, { "initialFilter": { "alias": "initialFilter"; "required": false; }; "resetFilters": { "alias": "resetFilters"; "required": false; }; }, { "filter": "filter"; }, never, never, false, never>;
}

declare class DateFilterComponent implements OnInit, OnChanges {
    initialFilter?: GridFilterItemInterface;
    resetFilters: null;
    filter: any;
    filterApplied: boolean;
    dateFilterTypes: {
        value: string;
        text: string;
    }[];
    range: FormGroup<{
        start: FormControl<Date | null>;
        end: FormControl<Date | null>;
    }>;
    selection: FormControl<string | null>;
    value: FormControl<string | null>;
    invalidValue: boolean;
    menu: MatMenuTrigger;
    fromElement: ElementRef;
    picker: MatDatepicker<any>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    menuOpened(): void;
    changeSelection(): void;
    reset(emit?: any): void;
    validate(): void;
    private close;
    private formatDate;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateFilterComponent, "amdg-date-filter", never, { "initialFilter": { "alias": "initialFilter"; "required": false; }; "resetFilters": { "alias": "resetFilters"; "required": false; }; }, { "filter": "filter"; }, never, never, false, never>;
}

declare class StringFilterComponent implements OnInit, OnChanges {
    initialFilter?: GridFilterItemInterface;
    resetFilters: null;
    filter: any;
    filterApplied: boolean;
    stringFilterTypes: {
        value: string;
        text: string;
    }[];
    selection: FormControl<string | null>;
    value: FormControl<string | null>;
    filterParam: string | null;
    invalidValue: boolean;
    menu: MatMenuTrigger;
    fromElement: ElementRef;
    valueElement: ElementRef;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    menuOpened(): void;
    changeSelection(): void;
    reset(emit?: boolean): void;
    validate(): void;
    private close;
    static ɵfac: i0.ɵɵFactoryDeclaration<StringFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StringFilterComponent, "amdg-string-filter", never, { "initialFilter": { "alias": "initialFilter"; "required": false; }; "resetFilters": { "alias": "resetFilters"; "required": false; }; }, { "filter": "filter"; }, never, never, false, never>;
}

declare class TagFilterComponent implements OnInit, OnChanges {
    initialFilter?: GridFilterItemInterface;
    resetFilters: null;
    numbersOnly: boolean;
    filter: any;
    menu: MatMenuTrigger;
    fromElement: ElementRef;
    filterApplied: boolean;
    tagValue: FormControl<string | null>;
    tagValues: string[];
    tagValuesApplied: never[];
    error: string;
    maximumTagLimit: 5000;
    stringMaxLength: 30;
    numberMaxLength: 9;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    menuOpened(): void;
    validate(): void;
    reset(emit?: boolean): void;
    addTagValue(event: Event): void;
    tagValueKeypress(event: any): void;
    stringPaste(event: ClipboardEvent): void;
    private ifNumber;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagFilterComponent, "amdg-tag-filter", never, { "initialFilter": { "alias": "initialFilter"; "required": false; }; "resetFilters": { "alias": "resetFilters"; "required": false; }; "numbersOnly": { "alias": "numbersOnly"; "required": false; }; }, { "filter": "filter"; }, never, never, false, never>;
}

declare class TemplatePipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(value: any, args: any): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TemplatePipe, "template", false>;
}

declare class TemplateObjectPipe implements PipeTransform {
    constructor();
    transform(value: any, args: any): JSON;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateObjectPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TemplateObjectPipe, "template_object", false>;
}

declare class ChildGridComponent implements OnInit {
    private changeDetectorRef;
    private gridService;
    private ngZone;
    responseEmit: any;
    buttonClickEmit: any;
    filtersChangedEmit: any;
    headings: GridHeadingInterface[];
    url: string;
    entity: any;
    loadingData: boolean;
    response: GridResponseInterface;
    responseBackup: GridResponseInterface;
    gridItems: any[];
    recordsPerPage: number;
    gridPostSubscription: Subscription;
    currentPage: number;
    serverSidePagination: boolean;
    filters: GridFilterItemInterface[];
    sortObj: GridSortItemInterface;
    selectedRows: never[];
    constructor(changeDetectorRef: ChangeDetectorRef, gridService: GridService, ngZone: NgZone);
    ngOnInit(): void;
    sort(ev: GridHeadingInterface): void;
    filter(ev: GridFilterItemInterface): void;
    openLinkInNewTab(link: string, params?: any): void;
    openExternalLinkInNewTab(link: string, params: any): void;
    goToLink(fieldName: string, item: string, click?: string): void;
    getData({ pageNo, recordsPerPage }: any): void;
    private linkCreationInterceptor;
    private sortAscending;
    pageChanged({ pageNo, recordsPerPage }: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChildGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChildGridComponent, "amdg-child-grid", never, { "headings": { "alias": "headings"; "required": false; }; "url": { "alias": "url"; "required": false; }; "entity": { "alias": "entity"; "required": false; }; "serverSidePagination": { "alias": "serverSidePagination"; "required": false; }; }, { "responseEmit": "responseEmit"; "buttonClickEmit": "buttonClickEmit"; "filtersChangedEmit": "filtersChangedEmit"; }, never, never, false, never>;
}

declare class AngularMaterialDataGridModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AngularMaterialDataGridModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AngularMaterialDataGridModule, [typeof PaginationComponent, typeof ConfirmationComponent, typeof ColumnFilterPipe, typeof SearchPipe, typeof ColumnSearchFilterPipe, typeof SortHeaderComponent, typeof FilterHeaderComponent, typeof MultiSelectComponent, typeof NumberFilterComponent, typeof DateFilterComponent, typeof StringFilterComponent, typeof TagFilterComponent, typeof ServerBindGridComponent, typeof TemplatePipe, typeof TemplateObjectPipe, typeof ChildGridComponent], [typeof i17.CommonModule, typeof i18.HttpClientModule, typeof i19.ScrollingModule, typeof i20.FormsModule, typeof i20.ReactiveFormsModule, typeof i21.MatFormFieldModule, typeof i22.MatSelectModule, typeof i23.MatButtonModule, typeof i24.MatIconModule, typeof i25.MatTooltipModule, typeof i26.MatDatepickerModule, typeof i27.MatMenuModule, typeof i28.MatInputModule, typeof i29.MatDividerModule, typeof i30.MatChipsModule, typeof i31.MatCardModule, typeof i32.MatCheckboxModule, typeof i33.MatProgressBarModule, typeof i34.MatRippleModule, typeof i35.DragDropModule, typeof i36.RouterModule], [typeof ServerBindGridComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AngularMaterialDataGridModule>;
}

export { AngularMaterialDataGridModule, AngularMaterialDataGridService, CustomVirtualScrollStrategy, ServerBindGridComponent };
export type { GridButtonClickInterface as GridButtonClick, GridFilterItemInterface as GridFilterItem, GridHeadingInterface as GridHeading, GridMasterDetailConfigInterface as GridMasterDetailConfig, GridRequestInterface as GridRequest, GridResponseInterface as GridResponse, GridSortItemInterface as GridSortItem };
