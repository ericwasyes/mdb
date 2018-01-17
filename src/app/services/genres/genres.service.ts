import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GenresResponse } from '../../models/genres';

@Injectable()
export class GenresService {

    private baseUrl = 'https://api.themoviedb.org/3/genre/';
    private apiKey = 'd624997cbe9ca39eb651bce6b61232e3';

    constructor(private http: HttpClient) { }
    
    getMovieList(): Observable<GenresResponse> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<GenresResponse>(this.baseUrl + 'movie/list', {
            params: localParams
        })
    }

    getTvList(): Observable<GenresResponse> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<GenresResponse>(this.baseUrl + 'tv/list', {
            params: localParams
        })
    }
}