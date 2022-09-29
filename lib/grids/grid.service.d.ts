import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class GridService {
    private http;
    constructor(http: HttpClient);
    getAny(url: string): Observable<any>;
    getAnyPost(url: string, body: any): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GridService>;
}
