import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'app-breadcrumbs',
    template: `
        <button mat-button class="mb+" (click)="navigateBack()">
            <mat-icon>arrow_back</mat-icon>
            Back
        </button>  
    `
})

export class BreadcrumbsComponent implements OnInit {

    crumbs: any;
    constructor(
        private location: Location, 
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title
    ) { }

    ngOnInit() { 
        this.crumbs = this.activatedRoute.pathFromRoot;
        console.log(this.crumbs);
    }

    navigateBack(): void {
        this.location.back();
    }
}