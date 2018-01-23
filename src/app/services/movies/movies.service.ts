import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Details } from "../../models/movies/details";
import { Credits } from "../../models/credits";
import { ReviewResults } from "../../models/reviews";
import { ImagesResponse } from "../../models/images";
import { VideosResponse } from "../../models/videos";
import { ListResponse } from "../../models/ListResponse";

@Injectable()
export class MoviesService {

    private baseUrl = 'https://api.themoviedb.org/3/movie/';
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

    getUpcoming(): Observable<ListResponse> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<ListResponse>(this.baseUrl + 'upcoming', {
            params: localParams
        });
    }

    getNowPlaying(): Observable<ListResponse> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<ListResponse>(this.baseUrl + 'now_playing', {
            params: localParams
        });
    }

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