import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RoutesRecognized } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Details } from '../../../models/details';
import { MoviesService } from '../../../services/movies/movies.service';
import { Credits, Crew, Cast } from '../../../models/credits';
import { VideosResponse } from '../../../models/videos';
import { ImagesResponse } from '../../../models/images';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
import { Location } from '@angular/common';

@Component({
    selector: 'movie-detail',
    templateUrl: 'movie-detail.component.html',
    styleUrls: ['movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit {
    previousUrl: string;
    movieId: number;
    details: Details;
    credits: Credits;
    images: ImagesResponse;
    videos: VideosResponse;
    topBilledCast: Cast[];
    voteColor: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private moviesService: MoviesService,
        private location: Location
    ) {}

    ngOnInit() { 
        console.log('why');
        this.route.params
            .subscribe(params => {
                this.movieId = +params['id'];
                this.getDetails();
                this.getCredits();
                this.getImages();
                this.getVideos();
            });        
    }

    getDetails(): void {
        this.moviesService.getDetails(this.movieId)
            .subscribe(details => {
                this.details = details
                this.voteColor = this.setRatingColor(this.details.vote_average);
            });
    }

    getCredits(): void {
        this.moviesService.getCredits(this.movieId)
            .subscribe(credits => {
                this.credits = credits;
                this.topBilledCast = this.credits.cast.slice(0, 5);
            });
    }

    getImages(): void {
        this.moviesService.getImages(this.movieId)
            .subscribe(images => this.images = images)
    }

    getVideos(): void {
        this.moviesService.getVideos(this.movieId)
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

    getOverlayStyle() {
        let isSemi = false;
        let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
    
        return {
            'top': isSemi ? 'auto' : '50%',
            'bottom': isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': 50 / 3.5 + 'px'
        };
    }

    getBackdropImage(): void {
        
    }

    navigateBack(): void {
        this.location.back();
    }
}