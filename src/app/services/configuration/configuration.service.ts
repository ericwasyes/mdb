import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Configuration } from "../../models/configuration-response";

@Injectable()
export class ConfigurationService {
    private baseUrl = 'https://api.themoviedb.org/3/configuration';
    private config: Configuration;
    private localStorageKey = 'api-configuration-key';

    constructor(private http: HttpClient) { }

    getApiConfiguration() {
        return this.http.get<Configuration>(this.baseUrl);
    }

    getFullBackdropPath(params: any) {
        let storedConfig = JSON.parse(localStorage.getItem(this.localStorageKey));

        if (storedConfig != null) {
            this.config = storedConfig;
        } else {
            this.getApiConfiguration()
                .subscribe(config => {
                    localStorage.setItem(this.localStorageKey, JSON.stringify(config));
                    this.config = config;
                });
        }

        return this.formatFullPath(params.path);
    }

    formatFullPath(path: string): string {
        return this.config.images.base_url + 'w1440_and_h320_bestv2' + path;
    }
}