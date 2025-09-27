import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
export class ConfirmationComponent {
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
}
ConfirmationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConfirmationComponent, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
ConfirmationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.3", type: ConfirmationComponent, selector: "mpg-confirmation", ngImport: i0, template: "<h2 id=\"mpg-dialog-confirmation-title\">{{content.title}}</h2>\n<p  id=\"mpg-dialog-confirmation-paragraph\">{{content.content}}</p>\n\n<div class=\"mpg-text-right\">\n  <button mat-button color=\"primary\" class=\"mpg-mr-2\" type=\"button\" (click)=\"close()\">{{content.cancel_text}}</button>\n  <button mat-stroked-button color=\"primary\" tabindex=\"1\" class=\"button\" type=\"button\" (click)=\"ok()\">{{content.ok_text}}</button>\n</div>\n", styles: ["#mpg-dialog-confirmation-title{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;margin-bottom:.75rem}#mpg-dialog-confirmation-paragraph{margin-bottom:.75rem}.mpg-text-right{text-align:right}\n"], dependencies: [{ kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: ConfirmationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mpg-confirmation', template: "<h2 id=\"mpg-dialog-confirmation-title\">{{content.title}}</h2>\n<p  id=\"mpg-dialog-confirmation-paragraph\">{{content.content}}</p>\n\n<div class=\"mpg-text-right\">\n  <button mat-button color=\"primary\" class=\"mpg-mr-2\" type=\"button\" (click)=\"close()\">{{content.cancel_text}}</button>\n  <button mat-stroked-button color=\"primary\" tabindex=\"1\" class=\"button\" type=\"button\" (click)=\"ok()\">{{content.ok_text}}</button>\n</div>\n", styles: ["#mpg-dialog-confirmation-title{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;margin-bottom:.75rem}#mpg-dialog-confirmation-paragraph{margin-bottom:.75rem}.mpg-text-right{text-align:right}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZGF0YS1ncmlkL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZGF0YS1ncmlkL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFPekUsTUFBTSxPQUFPLHFCQUFxQjtJQVNoQyxZQUFtQixTQUE4QyxFQUNyQixJQUFTO1FBRGxDLGNBQVMsR0FBVCxTQUFTLENBQXFDO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQUs7UUFSckQsWUFBTyxHQUFHO1lBQ1IsS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsSUFBSTtZQUNiLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztJQUd1RCxDQUFDO0lBRTFELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxFQUFFO1FBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7a0hBdEJVLHFCQUFxQiw4Q0FVWixlQUFlO3NHQVZ4QixxQkFBcUIseURDUmxDLHFjQU9BOzJGRENhLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxtQkFBbUI7OzBCQWNoQixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FtZGctY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29udGVudCA9IHtcbiAgICB0aXRsZTogbnVsbCxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGNhbmNlbF90ZXh0OiBudWxsLFxuICAgIG9rX3RleHQ6IG51bGxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q29uZmlybWF0aW9uQ29tcG9uZW50PixcbiAgICAgICAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMuZGF0YTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxuICBvaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0cnVlKTtcbiAgfVxuXG59XG4iLCI8aDIgaWQ9XCJhbWRnLWRpYWxvZy1jb25maXJtYXRpb24tdGl0bGVcIj57e2NvbnRlbnQudGl0bGV9fTwvaDI+XG48cCAgaWQ9XCJhbWRnLWRpYWxvZy1jb25maXJtYXRpb24tcGFyYWdyYXBoXCI+e3tjb250ZW50LmNvbnRlbnR9fTwvcD5cblxuPGRpdiBjbGFzcz1cImFtZGctdGV4dC1yaWdodFwiPlxuICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJhbWRnLW1yLTJcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlKClcIj57e2NvbnRlbnQuY2FuY2VsX3RleHR9fTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0YWJpbmRleD1cIjFcIiBjbGFzcz1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib2soKVwiPnt7Y29udGVudC5va190ZXh0fX08L2J1dHRvbj5cbjwvZGl2PlxuIl19
