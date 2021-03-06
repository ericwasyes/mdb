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
import { Router } from '@angular/router';

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
    MatCheckboxModule,
    MatTooltipModule
 } from '@angular/material';

 // Modules
 import { AppRoutingModule } from './../app-routing.module';
 import { SharedModule } from '../shared/shared.module';

 // Components
import { MoviesListComponent } from './components/list/movies-list.component';
import { MovieDetailComponent } from './components/detail/movie-detail.component';
import { TechnicalDetailsComponent } from './components/detail/technical-details/technical-details.component';
import { MediaVideosComponent } from './components/detail/media-videos/media-videos.component';
import { ReviewsComponent } from './components/detail/reviews/reviews.component';
import { FullCastAndCrewComponent } from './components/detail/full-cast-and-crew/full-cast-and-crew.component';
import { MoviesComponent } from './movies.component';
import { MoviesFeaturedComponent } from './components/featured/movies-featured.component';
import { CollectionOverviewComponent } from './components/detail/collection/collection-overview.component';

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
        MatCheckboxModule,
        DragScrollModule,
        AppRoutingModule,
        SharedModule,
        MatTooltipModule
    ],
    exports: [],
    declarations: [
        MoviesListComponent,
        MoviesFeaturedComponent,
        MovieDetailComponent,
        TechnicalDetailsComponent,
        MediaVideosComponent,
        ReviewsComponent,
        FullCastAndCrewComponent,
        MoviesComponent,
        CollectionOverviewComponent,
    ],
    providers: [],
})
export class MoviesModule { }
