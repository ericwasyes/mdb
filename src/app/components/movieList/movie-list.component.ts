import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieSearch, Movie } from '../movieSearch/movie-search';
import {PageEvent} from '@angular/material';

@Component({
    selector: 'movie-list',
    templateUrl: 'movie-list.component.html',
    styleUrls: ['movie-list.component.scss']
})

export class MovieListComponent implements OnInit {
    @Input() searchResult: MovieSearch; 
    @Output() movieSelected = new EventEmitter<number>();
    @Output() paginationChanged = new EventEmitter<number>();
    constructor() { }

    ngOnInit() { };

    selectMovie(id: number): void {
        this.movieSelected.emit(id);
    }

    onPaginationChanged(event?:PageEvent): void {
        this.paginationChanged.emit(event.pageIndex + 1);
    }
}