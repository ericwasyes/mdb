import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RoutesRecognized } from '@angular/router';
import { MoviesService } from '../../../services/movies/movies.service';
import { ListResponse } from '../../../models/listResponse';
import { GenresService } from '../../../services/genres/genres.service';
import { find } from 'lodash'
import { GenresResponse } from '../../../models/genres';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

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

    constructor(
        private route: ActivatedRoute,
        private moviesService: MoviesService,
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
        this.moviesService.getPopular()
            .subscribe(results => {
                this.movies = results;
                this.title = 'Popular Movies'
                this.movies.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getTopRatedMovies(): void {
        this.moviesService.getTopRated()
            .subscribe(results => {
                this.movies = results;
                this.title = 'Top Rated Movies'
                this.movies.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getUpcomingReleases(): void {
        this.moviesService.getUpcoming()
            .subscribe(results => {
                this.movies = results;
                this.title = 'Upcoming Releases';
                this.movies.results.forEach(result => {
                    result.genre_names = this.getGenreNames(result.genre_ids);
                })
            })
    }

    getNowPlaying(): void {
        this.moviesService.getNowPlaying()
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


}