import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../../../services/movies/movies.service';

import { VideosResponse } from '../../../../models/videos';

@Component({
    selector: 'app-media-videos',
    templateUrl: 'media-videos.component.html',
    styles: [`
        '.media-videos {
            text-align: center;
        }
        '
    `]
})

export class MediaVideosComponent implements OnInit {
    @Input() videos: VideosResponse;
    showVideos: boolean = false;

    constructor(
        private moviesService: MoviesService) { }

    ngOnInit() { 
    }    

    
}