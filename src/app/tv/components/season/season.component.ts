import { Component, OnInit } from '@angular/core';
import { TvSeasonsService } from '../../../services/tvSeasons/tv-seasons.service';
import { Season } from '../../../models/tvSeasons/tv-season';
import { Router, ActivatedRoute } from '@angular/router';
import { Crew } from '../../../models/crew';
import { filter } from 'lodash';
import { Episode } from '../../../models/episode';
import { Title } from '@angular/platform-browser';
import { TvService } from '../../../services/tv/tv.service';
import { TvDetails } from '../../../models/tv/details';
import { Location } from '@angular/common';
import { Credits } from '../../../models/credits';

@Component({
    selector: 'app-season',
    templateUrl: 'season.component.html',
    styleUrls: ['season.component.scss']
})

export class SeasonComponent implements OnInit {
    loading: boolean;
    tvId: number;
    seasonNumber: number;
    details: TvDetails;
    credits: Credits;
    season: Season;
    isLoaded: boolean;

    constructor(
        private location: Location, 
        private router: Router,
        private route: ActivatedRoute,
        private tvService: TvService,
        private tvSeasonsService: TvSeasonsService,
        private titleService: Title ) { }

    ngOnInit() { 
        this.isLoaded = false;
        this.route.params
            .subscribe(params => {
                this.tvId = params['id1'];
                this.seasonNumber = params['id2'];
                this.getAllTvShowData();
                this.updatePageTitle();
            });
                
    }

    getAllTvShowData(): void {
        this.getTvShowDetails();
        this.getSeasonDetails();
        this.getSeasonCredits();
    }

    updatePageTitle(): void {
        this.titleService.setTitle('Season ' + this.seasonNumber);
    }

    getTvShowDetails() {
        this.tvService.getDetails(this.tvId)
            .subscribe(details => this.details = details);
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

    getSeasonCredits() {
        this.tvSeasonsService.getCredits(this.tvId, this.seasonNumber)
            .subscribe(credits => {
                this.credits = credits;
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

    selectSeason(seasonNumber: number) {
        this.loading = true;
        this.seasonNumber = seasonNumber;
        this.getSeasonDetails();
        this.getSeasonCredits();
        this.updatePageTitle();
        this.updateUrl();
    }

    updateUrl(): void {
        const url = this.router.createUrlTree(['/tv/' + this.tvId + '/season/' + this.seasonNumber]).toString();
        this.location.go(url);
    }
}