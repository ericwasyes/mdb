import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    @Input() searchParams: any;
    @Output() changeThemeEvent = new EventEmitter<string>();
    @Output() searchMovies = new EventEmitter<any>();

    private theme: string;
    constructor() { }

    ngOnInit() { }

    changeTheme(theme: string): void {
        this.changeThemeEvent.emit(theme);
        this.theme = theme;
    }

    search(): void {
        this.searchMovies.emit();
    }
}