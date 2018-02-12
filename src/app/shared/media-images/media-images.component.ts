import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';
import { ImagesResponse } from '../../models/images';

@Component({
    selector: 'app-media-images',
    templateUrl: 'media-images.component.html'
})

export class MediaImagesComponent implements OnInit {
    @Input() images: ImagesResponse;
    public mediaType: string;

    constructor(
        private moviesService: MoviesService) { }


    public imageTypes = [
        {
            name: 'Posters'
        },
        {
            name: 'Backdrops'
        }
    ];

    ngOnInit() {
        this.mediaType = 'Posters';
    }

    selectMediaType(name: string): void {
        this.mediaType = name;
    }
}