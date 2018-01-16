import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';

@Component({
    selector: 'media-images',
    templateUrl: 'media-images.component.html'
})

export class MediaImagesComponent implements OnInit {
    @Input() movieId: number;
    images: any;
    videos: any;

    constructor(
        private moviesService: MoviesService) { }

    ngOnInit() { 
        this.getImages();
    }

    getImages(): void {
        this.moviesService.getImages(this.movieId)
            .subscribe(images => this.images = images)
    }
}