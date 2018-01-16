import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Details } from "./details";
import { Credits } from "./credits";
import { ReviewResults } from "./reviews";
import { ImagesResponse } from "./images";
import { VideosResponse } from "./videos";

@Injectable()
export class MoviesService {

    private baseUrl = 'https://api.themoviedb.org/3/movie/';
    private apiKey = 'd624997cbe9ca39eb651bce6b61232e3';

    constructor(private http: HttpClient) { }
    
    getDetails(id: number): Observable<Details> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);
        
        return this.http.get<Details>(this.baseUrl + id, {
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

    getReviews(id: number): Observable<ReviewResults> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<ReviewResults>(this.baseUrl + id + '/reviews', {
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