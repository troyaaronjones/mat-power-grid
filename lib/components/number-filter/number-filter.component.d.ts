import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatMenuTrigger } from '@angular/material/menu';
import GridFilterItemInterface from '../../interfaces/grid-filter-item';
import * as i0 from "@angular/core";
export declare class NumberFilterComponent implements OnInit, OnChanges, OnDestroy {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<NumberFilterComponent, "mpg-number-filter", never, { "initialFilter": "initialFilter"; "resetFilters": "resetFilters"; }, { "filter": "filter"; }, never, never, false>;
}
