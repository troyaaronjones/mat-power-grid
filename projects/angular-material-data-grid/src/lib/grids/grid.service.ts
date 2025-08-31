import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../api-response.model';

@Injectable({
    providedIn: 'root'
})
export class GridService {
    
    constructor(private http: HttpClient) {
    }
    
    getAny(url: string): Observable<any> {
        return this.http.get<ApiResponseModel>(url);
    }
    
    getAnyPost(url: string, body: any): Observable<any> {
        return this.http.post<ApiResponseModel>(url, body);
    }
}
