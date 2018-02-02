import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PeopleDetails } from '../../models/people/PeopleDetails';

@Injectable()
export class PeopleService {
    constructor(private http: HttpClient) { }
    
    private baseUrl = 'https://api.themoviedb.org/3/person/';

    getDetails(id: number): Observable<PeopleDetails> {
        return this.http.get<PeopleDetails>(this.baseUrl + id);
    }

    getMovieCredits(id: number): Observable<any> {
        return this.http.get<any>(this.baseUrl + id + '/movie_credits');
    }

    getTvCredits(id: number): Observable<any> {
        return this.http.get<any>(this.baseUrl + id + '/tv_credits');
    }

    getImages(id: number): Observable<any> {
        return this.http.get<any>(this.baseUrl + id + '/images');
    }
}