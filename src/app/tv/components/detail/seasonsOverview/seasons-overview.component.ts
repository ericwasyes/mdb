import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../../../../models/tv-season';
import { Router } from '@angular/router';

@Component({
    selector: 'seasons-overview',
    templateUrl: 'seasons-overview.component.html'
})

export class SeasonsOverviewComponent implements OnInit {
    @Input() tvId: number;
    @Input() seasons: Season[];
    constructor(private router: Router) { }

    ngOnInit() { 
        this.seasons = this.seasons.filter(season => {
            return season.season_number !== 0;
        })
    }

    goToFullEpisodeList(seasonNumber: number): void {
        this.router.navigate(['/tv', this.tvId, 'season', seasonNumber]);

    }
}