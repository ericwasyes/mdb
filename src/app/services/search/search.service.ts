import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { MovieSearch } from "../../components/movieSearch/movie-search";

@Injectable()
export class SearchService {

    private baseUrl = 'https://api.themoviedb.org/3/';
    private apiKey = 'd624997cbe9ca39eb651bce6b61232e3';

    constructor(
        private http: HttpClient
    ) { }

    searchMovies(searchParams): Observable<MovieSearch> {
        let myParams = new HttpParams();


        if (searchParams) {
            myParams = myParams.append('api_key', this.apiKey);
            myParams = this.stringIsEmpty(searchParams.search) ? myParams : myParams.append('query', searchParams.search);
            myParams = this.stringIsEmpty(searchParams.year) ? myParams : myParams.append('year', searchParams.year);
            myParams = this.stringIsEmpty(searchParams.page) ? myParams : myParams.append('page', searchParams.page);
        }           
        return this.http.get<MovieSearch>(this.baseUrl + 'search/movie', {
            params: myParams
        });
    }

    stringIsEmpty(value): boolean {
        if (value == null || value === '') {
            return true;
        } else {
            return false;
        }
    }
}