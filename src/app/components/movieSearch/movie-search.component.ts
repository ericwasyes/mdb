import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieSearch } from './movie-search';

@Component({
    selector: 'movie-search',
    templateUrl: 'movie-search.component.html'
})

export class MovieSearchComponent implements OnInit {
    @Input() searchParams: any;
    @Output() searchMovies = new EventEmitter<any>();

    searchResult: MovieSearch;
    
    constructor() { }

    ngOnInit() {};

    search(): void {
        this.searchMovies.emit();
    }
}