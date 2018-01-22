import { Component, OnInit, Input } from '@angular/core';
import { TvSeasonsService } from '../../../../../services/tvSeasons/tv-seasons.service';
import { Season } from '../../../../../models/tv-season';

@Component({
    selector: 'season-detail',
    templateUrl: 'season-detail.component.html'
})

export class SeasonDetailComponent implements OnInit {
    @Input() tvId: number;
    @Input() seasonNumber: number;

    isLoaded: boolean;
    season: Season;

    constructor(private tvSeasonsService: TvSeasonsService) { }

    ngOnInit() { 
        this.isLoaded = false;
        this.getSeasonDetails();
    }

    getSeasonDetails() {
        this.tvSeasonsService.getDetails(this.tvId, this.seasonNumber)
            .subscribe(season => {
                this.season = season;
                this.isLoaded = true;
            })
    } 
}