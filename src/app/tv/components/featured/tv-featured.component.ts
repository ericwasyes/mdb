import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RoutesRecognized } from '@angular/router';
import { ListResponse } from '../../../models/listResponse';
import { GenresService } from '../../../services/genres/genres.service';
import { find } from 'lodash'
import { GenresResponse } from '../../../models/genres';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { TvService } from '../../../services/tv/tv.service';
import { isObject } from 'lodash'
import { PageEvent } from '@angular/material';

@Component({
    selector: 'app-tv-featured',
    templateUrl: 'tv-featured.component.html',
    // styleUrls: ['tv.component.scss']
})

export class TvFeaturedComponent implements OnInit {
    private genres: GenresResponse;
    tvShows: ListResponse;
    title: string;
    menuItems: any[];
    type: string;
    showList: boolean;
    private page: number;

    constructor(
        private route: ActivatedRoute,
        private tvService: TvService,
        private genresService: GenresService
    ) { }

    ngOnInit() {
        this.showList = false;
        
        this.menuItems = [
            {
                name: 'Popular',
                selected: false
            },
            {
                name: 'Top Rated',
                selected: false

            },
            {
                name: 'On TV',
                selected: false

            },
            {
                name: 'Airing Today',
                selected: false

            }
        ]

        this.route.params
            .subscribe(params => {
                this.type = params['type'];
                this.getTvGenreList()
                    .subscribe(results => {
                        this.genres = results;
                        this.selectTvFilter(this.type);
                        this.showList = true;
                    });
            });
    }

    resetTvFilter(name: string): void {
        this.page = 1;
        this.selectTvFilter(name);
    }

    selectTvFilter(name: string): void {
        return name === 'Popular' ? this.getPopularTvShows() :
            name === 'Top Rated' ? this.getTopRatedTvShows() :
                name === 'On TV' ? this.getCurrentlyAiringTvShows() :
                    name === 'Airing Today' ? this.getTvShowsAiringToday() : null;
    }

    getTvGenreList(): Observable<GenresResponse> {
        return this.genresService.getTvList();
    }

    getPopularTvShows(): void {
        this.tvService.getPopular(this.page)
            .subscribe(results => {
                this.tvShows = results;
                this.title = 'Popular'
                this.tvShows.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getTopRatedTvShows(): void {
        this.tvService.getTopRated(this.page)
            .subscribe(results => {
                this.tvShows = results;
                this.title = 'Top Rated'
                this.tvShows.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getCurrentlyAiringTvShows(): void {
        this.tvService.getCurrentlyAiring(this.page)
            .subscribe(results => {
                this.tvShows = results;
                this.title = 'On TV';
                this.tvShows.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getTvShowsAiringToday(): void {
        this.tvService.getAiringToday(this.page)
            .subscribe(results => {
                this.tvShows = results;
                this.title = 'Airing Today'
                this.tvShows.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getGenreNames(genreIds: number[]): string[] {
        let genreNames = [];
        genreIds.forEach(id => {
            let match = find(this.genres.genres, { "id": id });
            if (isObject(match)) {
                genreNames.push(match.name);
            }
        })

        return genreNames;
    }

    onPaginationChanged(event?:PageEvent): void {
        this.page = event.pageIndex + 1;
        this.selectTvFilter(this.title);
    }
}