import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../../services/people/people.service';
import { Title } from '@angular/platform-browser';
import { PeopleDetails } from '../../../models/people/PeopleDetails';
import { groupBy, sortBy, Dictionary } from 'lodash'
import { Crew } from '../../../models/crew';

@Component({
    selector: 'app-people-detail',
    templateUrl: 'people-detail.component.html',
    styleUrls: ['people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
    personId: number;
    details: PeopleDetails;
    tvCredits: any;
    movieCredits: any;
    images: any;
    creditsLoaded: boolean
    groupedTvCrew: any;
    groupedMovieCrew: any;
    knownFor: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private peopleService: PeopleService,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.creditsLoaded = false;
        this.route.params
            .subscribe(params => {
                this.personId = +params['id'];
                this.getDetails();
                this.getTvCredits();
                this.getMovieCredits();
                this.getImages();
                this.creditsLoaded = true;
            });
    }

    getDetails(): void {
        this.peopleService.getDetails(this.personId)
            .subscribe(person => {
                this.details = person;
                this.titleService.setTitle(this.details.name);
            })
    }

    getTvCredits(): void {
        this.peopleService.getTvCredits(this.personId)
            .subscribe(credits => { 
                this.tvCredits = credits;
                let groups = this.groupByDepartment(this.tvCredits.crew);
                this.groupedTvCrew = Object.keys(groups).map(key => groups[key]);
            });
    }

    getMovieCredits(): void {
        this.peopleService.getMovieCredits(this.personId)
            .subscribe(credits => {
                this.movieCredits = credits;
                let groups = this.groupByDepartment(this.movieCredits.crew);
                this.groupedMovieCrew = Object.keys(groups).map(key => groups[key]);

                console.log(this.groupedMovieCrew);
            });
    }

    getImages(): void {
        this.peopleService.getImages(this.personId)
            .subscribe(images => {
                this.images = images;
            })
    }

    groupByDepartment(crew: Crew[]): Dictionary<Crew[]> {
        return groupBy(crew, 'department');
    }
}

