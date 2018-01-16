import { Component } from '@angular/core';
import { MovieSearch } from './components/movieSearch/movie-search';
import { SearchService } from './services/search/search.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    searchResult: MovieSearch;
    selectedMovieId: number = 0;
    searchParams: any; 
    theme: string = 'light';

    constructor(
        private searchService: SearchService,
    ) {}

    ngOnInit() {
        this.searchParams = {
            page: 1,
        };
    }

    search(): void {
        this.searchService.searchMovies(this.searchParams)
            .subscribe(movies => {
                this.searchResult = movies
                this.selectedMovieId = 0;
            });
    }

    selectMovie(id: number): void {
        this.selectedMovieId = id
        console.log(this.selectedMovieId);

    }

    onPaginationChanged(pageIndex: number): void {
        this.searchParams.page = pageIndex;
        this.search();
    }

    changeTheme(event) {
        this.theme = event;
        
    }
}
