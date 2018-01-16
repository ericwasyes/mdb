import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';
import { ReviewResults } from '../../../services/movies/reviews';

@Component({
    selector: 'reviews',
    templateUrl: 'reviews.component.html',
    styleUrls: ['reviews.component.scss']
})

export class ReviewsComponent implements OnInit {
    @Input() movieId: number;
    reviews: ReviewResults;
    showReviews: boolean = false;

    constructor(private moviesService: MoviesService) { }

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