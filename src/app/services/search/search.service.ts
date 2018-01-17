import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { SearchList } from "../../shared/search/search-list";

@Injectable()
export class SearchService {
    searchParamsUpdated = new EventEmitter();

    private baseUrl = 'https://api.themoviedb.org/3/';
    private apiKey = 'd624997cbe9ca39eb651bce6b61232e3';
    searchParams: any;

    constructor(private http: HttpClient) { 
        this.searchParams
    }

    saveSearchParams(searchParams): void {
        this.searchParams = searchParams;
        this.searchParamsUpdated.emit(this.searchParams);
    }

    searchMovies(searchParams): Observable<SearchList> {
        this.searchParams = searchParams;
        let myParams = new HttpParams();

        if (searchParams) {
            myParams = myParams.append('api_key', this.apiKey);
            myParams = this.stringIsEmpty(searchParams.search) ? myParams : myParams.append('query', searchParams.search);
            myParams = this.stringIsEmpty(searchParams.year) ? myParams : myParams.append('year', searchParams.year);
            myParams = this.stringIsEmpty(searchParams.page) ? myParams : myParams.append('page', searchParams.page);
        }           
        return this.http.get<SearchList>(this.baseUrl + 'search/movie', {
            params: myParams
        });
    }

    searchTvShows(searchParams): Observable<SearchList> {
        this.searchParams = searchParams;
        let myParams = new HttpParams();

        if (searchParams) {
            myParams = myParams.append('api_key', this.apiKey);
            myParams = this.stringIsEmpty(searchParams.search) ? myParams : myParams.append('query', searchParams.search);
            myParams = this.stringIsEmpty(searchParams.year) ? myParams : myParams.append('year', searchParams.year);
            myParams = this.stringIsEmpty(searchParams.page) ? myParams : myParams.append('page', searchParams.page);
        }           
        return this.http.get<SearchList>(this.baseUrl + 'search/tv', {
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