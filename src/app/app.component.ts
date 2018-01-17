import { Component } from '@angular/core';
import { SearchService } from './services/search/search.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    theme: string = 'light';

    constructor(
        private searchService: SearchService,
        private router: Router
    ) {}

    ngOnInit() {}

    changeTheme(event) {
        this.theme = event;     
    }
}
