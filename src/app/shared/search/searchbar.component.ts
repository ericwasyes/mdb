import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchList } from './search-list';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search/search.service';

@Component({
    selector: 'app-searchbar',
    templateUrl: 'searchbar.component.html'
})

export class SearchbarComponent implements OnInit {
    searchParams: any;
    searchResult: SearchList;
    searchTypes: any[];

    selected = 'Movies';

    constructor(private router: Router, private searchService: SearchService) { }

    ngOnInit() {
        this.searchTypes = [
            {
                name: 'Movies',
            },
            {
                name: 'TV',
            },
            {
                name: 'People',
            },
        ]

        this.searchParams = {
            page: 1,
        };
    };

    search(): void {
        this.searchService.saveSearchParams(this.searchParams);
        this.router.navigate(['/' + this.selected.toLowerCase() + '/search']);
    }

    disableSearch(): boolean {
        if (this.searchParams.search === undefined || this.searchParams.search === '') {
            return true;
        } else {
            return false;
        }
    }
}