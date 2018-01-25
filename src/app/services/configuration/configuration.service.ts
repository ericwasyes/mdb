import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Configuration } from "../../models/configuration-response";

@Injectable()
export class ConfigurationService {
    private baseUrl = 'https://api.themoviedb.org/3/configuration';
    
    constructor(private http: HttpClient) { }

    getApiConfiguration() {
        return this.http.get<Configuration>(this.baseUrl);
    }
}