import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RoutesRecognized } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { TvDetails } from '../../../models/tv/details';
import { Credits } from '../../../models/credits';
import { VideosResponse } from '../../../models/videos';
import { ImagesResponse } from '../../../models/images';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
import { TvService } from '../../../services/tv/tv.service';
import { Cast } from '../../../models/cast';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-tv-detail',
    templateUrl: 'tv-detail.component.html',
    // styleUrls: ['tv-detail.component.scss']
})

export class TvDetailComponent implements OnInit {
    previousUrl: string;
    tvId: number;
    details: TvDetails;
    credits: Credits;
    images: ImagesResponse;
    videos: VideosResponse;
    topBilledCast: Cast[];
    voteColor: string;
    showFixedHeader: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private tvService: TvService,
        private titleService: Title
    ) {}

    ngOnInit() { 
        this.showFixedHeader = false;
        this.route.params
            .subscribe(params => {
                this.tvId = +params['id'];
                this.getDetails();
                this.getCredits();
                this.getImages();
                this.getVideos();
            });        
    }

    getDetails(): void {
        this.tvService.getDetails(this.tvId)
            .subscribe(details => {
                this.details = details
                this.titleService.setTitle(this.details.name);
                this.voteColor = this.setRatingColor(this.details.vote_average);
            });
    }

    getCredits(): void {
        this.tvService.getCredits(this.tvId)
            .subscribe(credits => {
                this.credits = credits;
            });
    }

    getImages(): void {
        this.tvService.getImages(this.tvId)
            .subscribe(images => this.images = images)
    }

    getVideos(): void {
        this.tvService.getVideos(this.tvId)
            .subscribe(videos => {
                this.videos = videos;
            })
    }  

    setRatingColor(rating): string {
        if (rating >= 9) {
            return '#00E676';
        } else if (rating >= 7 && rating < 9) {
            return '#00E676';
        } else if (rating >= 5 && rating < 7) {
            return '#FFC400';
        } else {
            return '#FF3D00';
        }
    }

    toggleFixedHeader(event: boolean): void {
        this.showFixedHeader = event;
    }
}