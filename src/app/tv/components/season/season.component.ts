import { Component, OnInit } from '@angular/core';
import { TvSeasonsService } from '../../../services/tvSeasons/tv-seasons.service';
import { Season } from '../../../models/tv-season';
import { ActivatedRoute } from '@angular/router';
import { Crew } from '../../../models/crew';
import { filter } from 'lodash';
import { Episode } from '../../../models/episode';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'season',
    templateUrl: 'season.component.html',
    styleUrls: ['season.component.scss']
})

export class SeasonComponent implements OnInit {
    tvId: number;
    seasonNumber: number;
    season: Season
    isLoaded: boolean;

    constructor(
        private route: ActivatedRoute,
        private tvSeasonsService: TvSeasonsService,
        private titleService: Title ) { }

    ngOnInit() { 
        this.isLoaded = false;
        this.route.params
            .subscribe(params => {
                this.tvId = params['id1'];
                this.seasonNumber = params['id2'];
                this.getSeasonDetails();
                this.titleService.setTitle('Season ' + this.seasonNumber);
            });
                
    }

    getSeasonDetails() {
        this.tvSeasonsService.getDetails(this.tvId, this.seasonNumber)
            .subscribe(season => {
                this.season = season;
                this.isLoaded = true;
                this.season.episodes.forEach(episode => {
                    episode.directors = this.findDirectors(episode);
                    episode.writers = this.findWriters(episode);
                })
            })
    } 

    findDirectors(episode: Episode): Crew[] {
        return episode.crew.filter(crewMember => {
            return crewMember.job == 'Director';
        })
    }

    findWriters(episode: Episode): Crew[] {
        return episode.crew.filter(crewMember => {
            return crewMember.job == 'Writer';
        })
    }
}