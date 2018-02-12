import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfigurationService } from '../../services/configuration/configuration.service';
import { Configuration } from '../../models/configuration-response';
import { Promise } from 'q';
import { Subscription } from 'rxjs/Subscription';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
    selector: 'app-image-viewer',
    templateUrl: 'image-viewer.component.html',
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

export class ImageViewerComponent implements OnInit {
    @Input() images: any;
    @Input() posterPath: string;
    @Input() type: string;
    @Input() card: boolean;
    @Input() elevate: boolean;
    @Input() height: number;
    @Input() width: number;
    @Input() dialog: boolean;
    private config: Configuration;
    private defaultPlaceholder: string = '../assets/poster-placeholder.jpg';
    private backdropPlaceholder: string = '../assets/backdrop-placeholder.jpg';
    private avatarPlaceholder: string = '../assets/avatar-placeholder.png';
    private fullPath: string;
    private localStorageKey = 'api-configuration-key';

    pathIsReady = false;

    constructor(public imageDialog: MatDialog, private configService: ConfigurationService) { }

    ngOnChanges(changes: SimpleChanges) {
        this.posterPath = changes.posterPath !== undefined ? changes.posterPath.currentValue : this.posterPath;
        this.getApiConfiguration();
    }

    ngOnInit() {
        this.getApiConfiguration();
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
        let result = this.type == 'search-list' ? this.defaultPlaceholder : this.type == 'avatar' ? this.avatarPlaceholder : this.type == 'backdrop' ? this.backdropPlaceholder : this.defaultPlaceholder;
        return result;
    }

    openDialog(): void {
        if (this.dialog === true) {
            let dialogRef = this.imageDialog.open(ImageDialogComponent, {
                height: '85vh',
                backdropClass: 'image-dialog-backdrop',
                data: {
                    baseUrl: this.config.images.base_url,
                    path: this.posterPath,
                    height: this.height,
                    width: this.width,
                    images: this.images
                }
            });
        }
    }
}