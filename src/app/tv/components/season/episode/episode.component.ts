import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../../../../models/episode';

@Component({
    selector: 'app-episode',
    templateUrl: 'episode.component.html',
    styles: [`
        .episode-card-content {
            padding: 24px;
        
            .episode-number {
                font-weight: 500;
            }
        }
    `]
})

export class EpisodeComponent implements OnInit {
    @Input() episode: Episode
    constructor() { }

    ngOnInit() { }
}