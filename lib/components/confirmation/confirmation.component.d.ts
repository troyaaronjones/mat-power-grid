import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class ConfirmationComponent implements OnInit {
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
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmationComponent, "amdg-confirmation", never, {}, {}, never, never, false>;
}
