// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { DragScrollModule } from 'ngx-drag-scroll';
import { RouterModule } from '@angular/router';

// Angular Material
import {
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    MatMenuModule,
    MatGridListModule,
    MatSelectModule
} from '@angular/material';

// Modules
import { MoviesModule } from '../movies/movies.module';
import { TvModule } from '../tv/tv.module';

// Components
import { SearchbarComponent } from './search/searchbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { MobileMenuComponent } from './navbar/mobileMenu/mobile-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PosterImageComponent } from './posterImage/poster-image.component';
import { VideoPlayerComponent } from './videoPlayer/video-player.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';
import { SearchListComponent } from './searchList/search-list.component';
import { FeaturedListComponent } from './featuredList/featured-list.component';

// Pipes
import { TruncateTextPipe } from './../pipes/truncateText/truncate-text.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatExpansionModule,
        MatInputModule,
        MatButtonModule,
        MatPaginatorModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule,
        MatChipsModule,
        MatMenuModule,
        RoundProgressModule,
        MatGridListModule,
        MatSelectModule,
        DragScrollModule,
        RouterModule
    ],
    exports: [
        TruncateTextPipe,
        SearchbarComponent,
        NavbarComponent,
        FooterComponent,
        PosterImageComponent,
        VideoPlayerComponent,
        PageNotFoundComponent,
        SearchListComponent,
        FeaturedListComponent
    ],
    declarations: [
        TruncateTextPipe,
        SearchbarComponent,
        NavbarComponent,
        MenuComponent,
        MobileMenuComponent,
        FooterComponent,
        PosterImageComponent,
        VideoPlayerComponent,
        PageNotFoundComponent,
        SearchListComponent,
        FeaturedListComponent
    ],
    providers: [],
})
export class SharedModule { }
