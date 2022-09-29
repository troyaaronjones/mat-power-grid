import { ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import GridFilterItemInterface from '../../interfaces/grid-filter-item';
import * as i0 from "@angular/core";
export declare class StringFilterComponent implements OnInit, OnChanges {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StringFilterComponent, "amdg-string-filter", never, { "initialFilter": "initialFilter"; "resetFilters": "resetFilters"; }, { "filter": "filter"; }, never, never, false>;
}
