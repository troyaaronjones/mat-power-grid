import { EventEmitter, OnInit } from '@angular/core';
import GridFilterItemInterface from '../../interfaces/grid-filter-item';
import * as i0 from "@angular/core";
export declare class FilterHeaderComponent implements OnInit {
    heading: any;
    initialFilters: GridFilterItemInterface[];
    resetFilters: null;
    filter: EventEmitter<any>;
    initialFilter?: GridFilterItemInterface;
    constructor();
    ngOnInit(): void;
    filterObjCreated(ev: GridFilterItemInterface): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterHeaderComponent, "amdg-filter-header", never, { "heading": "heading"; "initialFilters": "initialFilters"; "resetFilters": "resetFilters"; }, { "filter": "filter"; }, never, never, false>;
}
