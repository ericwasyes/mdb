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
    MatSelectModule
 } from '@angular/material';

 // Modules
 import { AppRoutingModule } from './../app-routing.module';
 import { SharedModule } from '../shared/shared.module';

 // Components
import { MovieListComponent } from './components/movieList/movie-list.component';
import { MovieDetailComponent } from './components/movieDetail/movie-detail.component';
import { TopBilledCastComponent } from './components/movieDetail/topBilledCast/top-billed-cast.component';
import { FeaturedCrewComponent } from './components/movieDetail/featuredCrew/featured-crew.component';
import { TechnicalDetailsComponent } from './components/movieDetail/technicalDetails/technical-details.component';
import { MediaImagesComponent } from './components/movieDetail/mediaImages/media-images.component';
import { MediaVideosComponent } from './components/movieDetail/mediaVideos/media-videos.component';
import { ReviewsComponent } from './components/movieDetail/reviews/reviews.component';
import { FullCastAndCrewComponent } from './components/movieDetail/fullCastAndCrew/full-cast-and-crew.component';
import { MoviesComponent } from './components/movies/movies.component';

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
        AppRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        MovieListComponent,
        MovieDetailComponent,
        TopBilledCastComponent,
        FeaturedCrewComponent,
        TechnicalDetailsComponent,
        MediaImagesComponent,
        MediaVideosComponent,
        ReviewsComponent,
        FullCastAndCrewComponent,
        MoviesComponent,
    ],
    providers: [],
})
export class MoviesModule { }
