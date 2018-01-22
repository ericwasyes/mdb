import { Component } from '@angular/core';
import { SearchService } from './services/search/search.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    theme: string = 'light';

    constructor(
        private activatedRoute: ActivatedRoute,
        private searchService: SearchService,
        private router: Router,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.router
            .events
            .filter(event => event instanceof NavigationEnd)
            .map(() => {
                let child = this.activatedRoute.firstChild;
                while (child) {
                    if (child.firstChild) {
                        child = child.firstChild;
                    } else if (child.snapshot.data && child.snapshot.data['title']) {
                        return child.snapshot.data['title'];
                    } else {
                        return null;
                    }
                }
                return null;
            }).subscribe((title: any) => {
                this.titleService.setTitle(title);
            });
    }

    changeTheme(event) {
        this.theme = event;
    }
}
