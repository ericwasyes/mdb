import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MoviesService } from '../../../../services/movies/movies.service';
import { ReviewResults } from '../../../../models/reviews';

@Component({
    selector: 'app-reviews',
    templateUrl: 'reviews.component.html',
    styleUrls: ['reviews.component.scss']
})

export class ReviewsComponent implements OnInit {
    @Input() movieId: number;
    reviews: ReviewResults;
    showReviews: boolean = false;

    constructor(private moviesService: MoviesService) { }

    ngOnChanges(changes: SimpleChanges) {
        this.showReviews = false;
        if (changes.movieId !== undefined) {
            this.movieId = changes.movieId.currentValue;
            this.getReviews();
        }  
    }

    ngOnInit() { 
        this.getReviews();
    }

    getReviews(): void {
        this.moviesService.getReviews(this.movieId)
            .subscribe(reviews => {
                this.reviews = reviews
                this.showReviews = true;
            })
    }
}