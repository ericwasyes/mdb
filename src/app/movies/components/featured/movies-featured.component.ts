import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RoutesRecognized } from '@angular/router';
import { MoviesService } from '../../../services/movies/movies.service';
import { ListResponse } from '../../../models/listResponse';
import { GenresService } from '../../../services/genres/genres.service';
import { find } from 'lodash'
import { GenresResponse } from '../../../models/genres';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { PageEvent } from '@angular/material';

@Component({
    selector: 'app-movies',
    templateUrl: 'movies-featured.component.html',
    styleUrls: ['movies-featured.component.scss']
})

export class MoviesFeaturedComponent implements OnInit {
    private genres: GenresResponse;
    movies: ListResponse;
    title: string;
    menuItems: any[];
    type: string;
    showList: boolean;
    private page: number;

    constructor(
        private route: ActivatedRoute,
        private moviesService: MoviesService,
        private genresService: GenresService
    ) { }

    ngOnInit() {
        this.showList = false;
        this.page = 1;
        this.menuItems = [
            {
                name: 'Popular'
            },
            {
                name: 'Top Rated'
            },
            {
                name: 'Upcoming'
            },
            {
                name: 'Now Playing'
            }
        ]

        this.route.params
            .subscribe(params => {
                this.type = params['type'];
                this.getMovieGenreList()
                    .subscribe(results => {
                        this.genres = results;
                        this.selectMovieFilter(this.type);
                        this.showList = true;
                    });
            });
    }

    resetMovieFilter(name: string): void {
        this.page = 1;
        this.selectMovieFilter(name);
    }
    
    selectMovieFilter(name: string): void {
        return name === 'Popular' ? this.getPopularMovies() :
            name === 'Top Rated' ? this.getTopRatedMovies() :
                name === 'Upcoming' ? this.getUpcomingReleases() :
                    name === 'Now Playing' ? this.getNowPlaying() : null;
    }

    getMovieGenreList(): Observable<GenresResponse> {
        return this.genresService.getMovieList();
    }

    getPopularMovies(): void {
        this.moviesService.getPopular(this.page)
            .subscribe(results => {
                this.movies = results;
                this.title = 'Popular'
                this.movies.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getTopRatedMovies(): void {
        this.moviesService.getTopRated(this.page)
            .subscribe(results => {
                this.movies = results;
                this.title = 'Top Rated'
                this.movies.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getUpcomingReleases(): void {
        this.moviesService.getUpcoming(this.page)
            .subscribe(results => {
                this.movies = results;
                this.title = 'Upcoming';
                this.movies.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getNowPlaying(): void {
        this.moviesService.getNowPlaying(this.page)
            .subscribe(results => {
                this.movies = results;
                this.title = 'Now Playing'
                this.movies.results.forEach(result => {
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

    onPaginationChanged(event?:PageEvent): void {
        this.page = event.pageIndex + 1;
        this.selectMovieFilter(this.title);
    }

}