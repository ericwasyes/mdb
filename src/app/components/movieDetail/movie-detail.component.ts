import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Details } from '../../services/movies/details';
import { MoviesService } from '../../services/movies/movies.service';
import { Credits, Crew, Cast } from '../../services/movies/credits';

@Component({
    selector: 'movie-detail',
    templateUrl: 'movie-detail.component.html',
    styleUrls: ['movie-detail.component.scss']
})

export class MovieDetailComponent implements OnInit {
    @Input() movieId: number;
    @Output() backToSearch = new EventEmitter();
    details: Details;
    credits: Credits;
    topBilledCast: Cast[];
    voteColor: string;
    constructor(private moviesService: MoviesService) { }

    ngOnInit() { 
        console.log('detail');
        this.getDetails();
        this.getCredits();
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
                this.credits = credits
                this.topBilledCast = this.credits.cast.slice(0, 5);
            });
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

    navigateBackToSearch(): void {
        this.backToSearch.emit();
    }
}