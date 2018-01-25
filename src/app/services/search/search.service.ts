import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { SearchList } from "../../shared/search/search-list";
import { PeopleSearch } from "../../models/search/people-search";

@Injectable()
export class SearchService {
    searchParamsUpdated = new EventEmitter();

    private baseUrl = 'https://api.themoviedb.org/3/';
    searchParams: any;

    constructor(private http: HttpClient) { 
        this.searchParams
    }

    saveSearchParams(searchParams): void {
        this.searchParams = searchParams;
        this.searchParamsUpdated.emit(this.searchParams);
    }

    setSearchParams(searchParams: any): HttpParams{
        let myParams = new HttpParams();

        if (searchParams) {
            myParams = this.stringIsEmpty(searchParams.search) ? myParams : myParams.append('query', searchParams.search);
            myParams = this.stringIsEmpty(searchParams.page) ? myParams : myParams.append('page', searchParams.page);
        }    

        return myParams;
    }

    searchMovies(searchParams): Observable<SearchList> {
        this.searchParams = searchParams;
        let myParams = this.setSearchParams(searchParams);
               
        return this.http.get<SearchList>(this.baseUrl + 'search/movie', {
            params: myParams
        });
    }

    searchTvShows(searchParams): Observable<SearchList> {
        this.searchParams = searchParams;
        let myParams = this.setSearchParams(searchParams);
        
        return this.http.get<SearchList>(this.baseUrl + 'search/tv', {
            params: myParams
        });
    }

    searchPeople(searchParams): Observable<PeopleSearch> {
        this.searchParams = searchParams;
        let myParams = this.setSearchParams(searchParams);


        return this.http.get<PeopleSearch>(this.baseUrl + 'search/person', {
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