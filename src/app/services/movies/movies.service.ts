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

    constructor(private http: HttpClient) { }
    
    setParams(page: number): HttpParams {
        console.log('page', page);
        if (page === undefined || page === null) {
            page = 1;
        }

        let myParams = new HttpParams()
            .set('page', page.toString())
            .set('region', 'US');
        
        return myParams;
    }

    getPopular(page?: number): Observable<any> {

        const params = this.setParams(page);
        return this.http.get<ListResponse>(this.baseUrl + 'popular', { params });
    }

    getTopRated(page?: number): Observable<ListResponse> {    
        const params = this.setParams(page);

        return this.http.get<ListResponse>(this.baseUrl + 'top_rated', { params });
    }

    getUpcoming(page?: number): Observable<ListResponse> {
        const params = this.setParams(page);

        return this.http.get<ListResponse>(this.baseUrl + 'upcoming', { params });
    }

    getNowPlaying(page?: number): Observable<ListResponse> {
        const params = this.setParams(page);

        return this.http.get<ListResponse>(this.baseUrl + 'now_playing', { params });
    }

    getDetails(id: number): Observable<Details> {     
        return this.http.get<Details>(this.baseUrl + id);
    }

    getCredits(id: number): Observable<Credits> {
        return this.http.get<Credits>(this.baseUrl + id + '/credits');
    }

    getReviews(id: number): Observable<ReviewResults> {
        return this.http.get<ReviewResults>(this.baseUrl + id + '/reviews');
    }

    getImages(id: number): Observable<ImagesResponse> {
        return this.http.get<ImagesResponse>(this.baseUrl + id + '/images');
    }

    getVideos(id: number): Observable<VideosResponse> {
        return this.http.get<VideosResponse>(this.baseUrl + id + '/videos');
    }

    getRecommendations(id: number): Observable<ListResponse> {
        return this.http.get<ListResponse>(this.baseUrl + id + '/recommendations')
    }
}