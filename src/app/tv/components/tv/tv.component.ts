import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RoutesRecognized } from '@angular/router';
import { ListResponse } from '../../../models/listResponse';
import { GenresService } from '../../../services/genres/genres.service';
import { find } from 'lodash'
import { GenresResponse } from '../../../models/genres';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { TvService } from '../../../services/tv/tv.service';

@Component({
    selector: 'tv',
    templateUrl: 'tv.component.html',
    // styleUrls: ['tv.component.scss']
})

export class TvComponent implements OnInit {
    private genres: GenresResponse;
    tvShows: ListResponse;
    title: string;
    menuItems: any[];
    type: string;
    showList: boolean;

    constructor(
        private route: ActivatedRoute,
        private tvService: TvService,
        private genresService: GenresService
    ) { }

    ngOnInit() {
        this.showList = false;
        
        this.menuItems = [
            {
                name: 'Popular'
            },
            {
                name: 'Top Rated'
            },
            {
                name: 'On TV'
            },
            {
                name: 'Airing Today'
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
        this.tvService.getPopular()
            .subscribe(results => {
                this.tvShows = results;
                this.title = 'Popular TV Shows'
                this.tvShows.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getTopRatedTvShows(): void {
        this.tvService.getTopRated()
            .subscribe(results => {
                this.tvShows = results;
                this.title = 'Top Rated TV Shows'
                this.tvShows.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getCurrentlyAiringTvShows(): void {
        this.tvService.getCurrentlyAiring()
            .subscribe(results => {
                this.tvShows = results;
                this.title = 'On TV';
                this.tvShows.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getTvShowsAiringToday(): void {
        this.tvService.getAiringToday()
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
            genreNames.push(match.name);
        })

        return genreNames;
    }


}