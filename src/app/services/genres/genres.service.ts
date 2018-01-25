import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GenresResponse } from '../../models/genres';

@Injectable()
export class GenresService {
    private baseUrl = 'https://api.themoviedb.org/3/genre/';

    constructor(private http: HttpClient) { }
    
    getMovieList(): Observable<GenresResponse> {
        return this.http.get<GenresResponse>(this.baseUrl + 'movie/list');
    }

    getTvList(): Observable<GenresResponse> {
        return this.http.get<GenresResponse>(this.baseUrl + 'tv/list');
    }
}