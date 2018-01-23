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
    private apiKey = 'd624997cbe9ca39eb651bce6b61232e3';

    constructor(private http: HttpClient) { }

    getPopular(): Observable<any> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<ListResponse>(this.baseUrl + 'popular', {
            params: localParams
        });
    }

    getTopRated(): Observable<ListResponse> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<ListResponse>(this.baseUrl + 'top_rated', {
            params: localParams
        });
    }

    getCurrentlyAiring(): Observable<ListResponse> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<ListResponse>(this.baseUrl + 'on_the_air', {
            params: localParams
        });
    }

    getAiringToday(): Observable<ListResponse> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<ListResponse>(this.baseUrl + 'airing_today', {
            params: localParams
        });
    }

    getDetails(id: number): Observable<TvDetails> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);
        
        return this.http.get<TvDetails>(this.baseUrl + id, {
            params: localParams
        });
    }

    getCredits(id: number): Observable<Credits> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<Credits>(this.baseUrl + id + '/credits', {
            params: localParams
        });
    }

    getImages(id: number): Observable<ImagesResponse> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<ImagesResponse>(this.baseUrl + id + '/images', {
            params: localParams
        });
    }

    getVideos(id: number): Observable<VideosResponse> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<VideosResponse>(this.baseUrl + id + '/videos', {
            params: localParams
        });
    }
}