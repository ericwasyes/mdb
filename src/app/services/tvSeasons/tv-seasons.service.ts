import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { TvDetails } from "../../models/tv/details";
import { Credits } from "../../models/credits";
import { ReviewResults } from "../../models/reviews";
import { ImagesResponse } from "../../models/images";
import { VideosResponse } from "../../models/videos";
import { ListResponse } from "../../models/ListResponse";
import { Season } from "../../models/tvSeasons/tv-season";

@Injectable()
export class TvSeasonsService {

    private baseUrl = 'https://api.themoviedb.org/3/tv/';
    private apiKey = 'd624997cbe9ca39eb651bce6b61232e3';

    constructor(private http: HttpClient) { }

    getDetails(tvId: number, seasonNumber: number): Observable<Season> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);
        
        return this.http.get<Season>(this.baseUrl + tvId + '/season/' + seasonNumber, {
            params: localParams
        });
    }

    getCredits(tvId: number, seasonNumber: number): Observable<Credits> {
        let localParams = new HttpParams();

        localParams = localParams.append('api_key', this.apiKey);

        return this.http.get<Credits>(this.baseUrl + tvId + '/season/' + seasonNumber + '/credits', {
            params: localParams
        });
    }
}