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
    MatSelectModule,
    MatDialogModule
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
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchListComponent } from './search-list/search-list.component';
import { FeaturedListComponent } from './featured-list/featured-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FeaturedCrewComponent } from './item-detail/featured-crew/featured-crew.component';
import { TopBilledCastComponent } from './item-detail/top-billed-cast/top-billed-cast.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { DiscoverComponent } from './discover/discover.component';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';

// Pipes
import { TruncateTextPipe } from './../pipes/truncate-text/truncate-text.pipe';

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
        MatDialogModule,
        DragScrollModule,
        RouterModule
    ],
    exports: [
        TruncateTextPipe,
        SearchbarComponent,
        NavbarComponent,
        FooterComponent,
        ImageViewerComponent,
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
        ImageViewerComponent,
        VideoPlayerComponent,
        PageNotFoundComponent,
        SearchListComponent,
        FeaturedListComponent,
        ItemDetailComponent,
        FeaturedCrewComponent,
        TopBilledCastComponent,
        BreadcrumbsComponent,
        DiscoverComponent,
        ImageDialogComponent
    ],
    entryComponents: [
        ImageDialogComponent,
    ],
    providers: [],
})
export class SharedModule { }
