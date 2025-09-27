import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class PaginationComponent implements OnInit, OnChanges {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "mpg-pagination", never, { "noOfTotalRecords": "noOfTotalRecords"; "loadingData": "loadingData"; "noOfRecords": "noOfRecords"; "noOfSelectedRow": "noOfSelectedRow"; "currentPage": "currentPage"; "disableFullScreenToggle": "disableFullScreenToggle"; "showNoOfRecords": "showNoOfRecords"; "pageSizes": "pageSizes"; "newRecordsPerPage": "newRecordsPerPage"; }, { "pageChanged": "pageChanged"; "toggleFullScreen": "toggleFullScreen"; }, never, never, false>;
}
