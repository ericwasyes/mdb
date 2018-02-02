import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollectionsService {

    private baseUrl = 'https://api.themoviedb.org/3/collection/';

    constructor(private http: HttpClient) { }

    getDetails(id: number): Observable<any> {
        return this.http.get<any>(this.baseUrl + id);
    }
}