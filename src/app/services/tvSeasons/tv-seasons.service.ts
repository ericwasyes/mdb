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

    constructor(private http: HttpClient) { }

    getDetails(tvId: number, seasonNumber: number): Observable<Season> {   
        return this.http.get<Season>(this.baseUrl + tvId + '/season/' + seasonNumber);
    }

    getCredits(tvId: number, seasonNumber: number): Observable<Credits> {
        return this.http.get<Credits>(this.baseUrl + tvId + '/season/' + seasonNumber + '/credits');
    }
}