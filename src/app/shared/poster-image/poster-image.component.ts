import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { Configuration } from '../../models/configuration-response';
import { Promise } from 'q';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-poster-image',
    template: `
        <img 
            *ngIf="pathIsReady" 
            class="{{type}}" 
            [ngClass]="{
                'mat-card-image' : card, 
                'known-for' : type == 'known-for',
                'mat-elevation-z4' : elevate, 
                'avatar-img' : type == 'avatar', 
                'list' : type == 'search-list'
            }" 
            src="{{fullPath}}">
        `,
    styles: [`
        .list {
            width: 154px;
            height: 231px;
        }
        .known-for {
            height: 110px;
        }       
        .detail {
            width: 342px;
        }
        .avatar-img {
            border-radius: 50%;
        }
    `]
})

export class PosterImageComponent implements OnInit {
    @Input() posterPath: string;
    @Input() type: string;
    @Input() card: boolean;
    @Input() elevate: boolean;
    @Input() width: number
    private config: Configuration;
    private defaultPlaceholder: string = '../assets/poster-placeholder.jpg'
    private avatarPlaceholder: string = '../assets/avatar-placeholder.png'
    private fullPath: string;
    private localStorageKey = 'api-configuration-key';

    pathIsReady = false;

    constructor(private configService: ConfigurationService) { }

    ngOnChanges(changes: SimpleChanges) {
        this.posterPath = changes.posterPath !== undefined ? changes.posterPath.currentValue : this.posterPath;
        this.getApiConfiguration();
    }

    ngOnInit() {
        this.getApiConfiguration()
    }

    getApiConfiguration(): void {
        let storedConfig = JSON.parse(localStorage.getItem(this.localStorageKey));

        if (storedConfig != null) {
            this.config = storedConfig;
        } else {
            this.configService.getApiConfiguration()
                .subscribe(config => {
                    localStorage.setItem(this.localStorageKey, JSON.stringify(config));
                    this.config = config
                });
        }

        this.fullPath = this.formatFullPath();
        this.pathIsReady = true;
    }

    formatFullPath(): string {
        return this.posterPath != null ? this.formatFullPosterPath() : this.determinePlaceholderPath();
    }

    formatFullPosterPath(): string {
        return this.config.images.base_url + this.determinePosterSize() + this.posterPath;
    }

    determinePosterSize(): string {
        let result = 
            this.type == 'known-for' ? 'w92' :
            this.type == 'search-list' ? 'w154' : 
            this.type == 'still' ? 'w300' :
            this.type == 'detail' ? 'w342' : 
            this.type == 'profile' ? 'w185' : 
            this.type == 'backdrop' ? 'w780' :
            this.type == 'avatar' ? 'w45_and_h45_bestv2' : 'w154';
        return result;
    }

    determinePlaceholderPath(): string {
        let result = this.type == 'search-list' ? this.defaultPlaceholder : this.type == 'avatar' ? this.avatarPlaceholder : this.defaultPlaceholder;
        return result;
    }
}