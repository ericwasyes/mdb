import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { PageEvent } from '@angular/material';
import { PeopleSearch } from '../../../models/search/people-search';
import { SearchService } from '../../../services/search/search.service';

@Component({
    selector: 'app-people-list-name',
    templateUrl: 'people-list.component.html',
    styleUrls: ['people-list.component.scss']
})

export class PeopleListComponent implements OnInit {
    searchResult: PeopleSearch;
    searchParams: any;
    loaded: boolean;
    
    constructor(private searchService: SearchService) { }

    ngOnInit() { 
        this.loaded = false;

        if (this.searchService.searchParams !== undefined) {
            this.searchParams = this.searchService.searchParams;
            this.search();
        }
        this.searchService.searchParamsUpdated
            .subscribe(newParams => {
                this.searchParams =newParams
                this.search();
            })
    }

    search(): void {
        this.searchService.searchPeople(this.searchParams)
            .subscribe(people => {
                this.searchResult = people;
                this.loaded = true;
            });
    }

    onPaginationChanged(event?:PageEvent): void {
        this.searchParams.page = event.pageIndex + 1;
        this.search();
    }
}