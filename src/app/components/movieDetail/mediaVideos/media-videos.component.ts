import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../../services/movies/movies.service';

import { VideosResponse } from '../../../services/movies/videos';

@Component({
    selector: 'media-videos',
    templateUrl: 'media-videos.component.html'
})

export class MediaVideosComponent implements OnInit {
    @Input() movieId: number;
    images: any;
    videos: any;
    showVideos: boolean = false;

    constructor(
        private moviesService: MoviesService) { }

    ngOnInit() { 
        this.getVideoss();
    }    

    getVideoss(): void {
        this.moviesService.getVideos(this.movieId)
            .subscribe(videos => {
                this.videos = videos
            })
    }
}