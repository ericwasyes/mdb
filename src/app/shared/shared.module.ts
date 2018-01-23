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
import { MobileMenuComponent } from './navbar/mobile-menu/mobile-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PosterImageComponent } from './poster-image/poster-image.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchListComponent } from './search-list/search-list.component';
import { FeaturedListComponent } from './featured-list/featured-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FeaturedCrewComponent } from './item-detail/featured-crew/featured-crew.component';
import { TopBilledCastComponent } from './item-detail/top-billed-cast/top-billed-cast.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

// Pipes
import { TruncateTextPipe } from './../pipes/truncate-text/truncate-text.pipe';
import { DiscoverComponent } from './discover/discover.component';

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
        FeaturedListComponent,
        ItemDetailComponent,
        BreadcrumbsComponent
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
        FeaturedListComponent,
        ItemDetailComponent,
        FeaturedCrewComponent,
        TopBilledCastComponent,
        BreadcrumbsComponent,
        DiscoverComponent
    ],
    providers: [],
})
export class SharedModule { }
