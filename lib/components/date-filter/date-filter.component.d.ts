import { ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDatepicker } from '@angular/material/datepicker';
import GridFilterItemInterface from '../../interfaces/grid-filter-item';
import * as i0 from "@angular/core";
export declare class DateFilterComponent implements OnInit, OnChanges {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<DateFilterComponent, "mpg-date-filter", never, { "initialFilter": "initialFilter"; "resetFilters": "resetFilters"; }, { "filter": "filter"; }, never, never, false>;
}
