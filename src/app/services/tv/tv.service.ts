import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { ListResponse } from '../../models/ListResponse';
import { TvDetails } from '../../models/tv/details';
import { Credits } from '../../models/credits';
import { ImagesResponse } from '../../models/images';
import { VideosResponse } from '../../models/videos';

@Injectable()
export class TvService {
    private baseUrl = 'https://api.themoviedb.org/3/tv/';

    constructor(private http: HttpClient) { }

    getPopular(): Observable<any> {
        return this.http.get<ListResponse>(this.baseUrl + 'popular');
    }

    getTopRated(): Observable<ListResponse> {
        return this.http.get<ListResponse>(this.baseUrl + 'top_rated');
    }

    getCurrentlyAiring(): Observable<ListResponse> {
        return this.http.get<ListResponse>(this.baseUrl + 'on_the_air');
    }

    getAiringToday(): Observable<ListResponse> {
        return this.http.get<ListResponse>(this.baseUrl + 'airing_today');
    }

    getDetails(id: number): Observable<TvDetails> {      
        return this.http.get<TvDetails>(this.baseUrl + id);
    }

    getCredits(id: number): Observable<Credits> {
        return this.http.get<Credits>(this.baseUrl + id + '/credits');
    }

    getImages(id: number): Observable<ImagesResponse> {
        return this.http.get<ImagesResponse>(this.baseUrl + id + '/images');
    }

    getVideos(id: number): Observable<VideosResponse> {
        return this.http.get<VideosResponse>(this.baseUrl + id + '/videos');
    }
}