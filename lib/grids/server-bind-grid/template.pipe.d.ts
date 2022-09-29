import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class TemplatePipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(value: any, args: any): SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TemplatePipe, "template", false>;
}
