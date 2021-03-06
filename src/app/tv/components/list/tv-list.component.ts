import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { PageEvent } from '@angular/material';
import { SearchService } from '../../../services/search/search.service';
import { SearchList } from '../../../shared/search/search-list';

@Component({
    selector: 'app-tv-list',
    templateUrl: 'tv-list.component.html',
    // styleUrls: ['tv-list.component.scss']
})

export class TvListComponent implements OnInit {
    searchResult: SearchList; 
    searchParams: any;
    @Output() paginationChanged = new EventEmitter<number>();

    truncateAmt: number;

    constructor(private searchService: SearchService) { 
        this.truncateAmt = 75; 
    }

    ngOnInit() { 
        if (this.searchService.searchParams !== undefined) {
            this.searchParams = this.searchService.searchParams;
            this.search();
        }
        this.searchService.searchParamsUpdated
            .subscribe(newParams => {
                this.searchParams = newParams
                this.search();
            })
    }

    @HostListener('window:resize', ['$event'])
        onresize(event) {
        this.truncateAmt = window.innerWidth <= 600 ? 75 : 300;
    }

    search(): void {
        this.searchService.searchTvShows(this.searchParams)
            .subscribe(tvShows => {
                this.searchResult = tvShows;
            });
    }

    onPaginationChanged(event?:PageEvent): void {
        this.searchParams.page = event.pageIndex + 1;
        this.search();

    }
}