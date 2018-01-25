import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-people-credits',
    templateUrl: 'people-credits.component.html',
    styleUrls: ['people-credits.component.scss']
})

export class PeopleCreditsComponent implements OnInit {
    @Input() tvCredits: any;
    @Input() movieCredits: any;
    credits: any;
    creditsType: string;

    constructor() { }

    ngOnInit() {
        this.creditsType = 'movies';

        this.sortByDate(this.tvCredits);
        this.sortByDate(this.movieCredits);

        this.tvCredits = this.tvCredits.reverse();
        this.movieCredits = this.movieCredits.reverse();

        this.credits = this.movieCredits;
    }

    sortByDate(credits): void {
        credits.sort((a: any, b: any) => {
            let dateA = a.release_date !== undefined ? a.release_date : a.first_air_date;
            let dateB = b.release_date !== undefined ? b.release_date : b.first_air_date;

            return Date.parse(dateA) - Date.parse(dateB);
        });
    }

    isYearDifferent(current: any, next: any): boolean {
        if (next === undefined) {
            return false;
        } else {
            let currentDate = current.release_date !== undefined ? current.release_date : current.first_air_date;
            let nextDate = next.release_date !== undefined ? next.release_date : next.first_air_date;

            currentDate = new Date(currentDate);
            nextDate = new Date(nextDate);

            return currentDate.getFullYear() !== nextDate.getFullYear();
        }
    }

    toggleCreditType(event) {
        this.creditsType = event.value;
        this.credits = event.value == 'movies' ? this.movieCredits : event.value == 'tv' ? this.tvCredits : null;
    }
}