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

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MovieSearchComponent } from './components/movieSearch/movie-search.component';
import { MovieListComponent } from './components/movieList/movie-list.component';
import { MovieDetailComponent } from './components/movieDetail/movie-detail.component';
import { PosterImageComponent } from './shared/posterImage/poster-image.component';
import { VideoPlayerComponent } from './shared/videoPlayer/video-player.component';
import { TopBilledCastComponent } from './components/movieDetail/topBilledCast/top-billed-cast.component';
import { FeaturedCrewComponent } from './components/movieDetail/featuredCrew/featured-crew.component';
import { TechnicalDetailsComponent } from './components/movieDetail/technicalDetails/technical-details.component';
import { MediaImagesComponent } from './components/movieDetail/mediaImages/media-images.component';
import { MediaVideosComponent } from './components/movieDetail/mediaVideos/media-videos.component';
import { ReviewsComponent } from './components/movieDetail/reviews/reviews.component';
import { FullCastAndCrewComponent } from './components/movieDetail/fullCastAndCrew/full-cast-and-crew.component';

// Services
import { ConfigurationService } from './services/configuration/configuration.service';
import { MoviesService } from './services/movies/movies.service';
import { SearchService } from './services/search/search.service';

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

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        MovieSearchComponent,
        MovieListComponent,
        MovieDetailComponent,
        PosterImageComponent,
        VideoPlayerComponent,
        TopBilledCastComponent,
        FeaturedCrewComponent,
        TechnicalDetailsComponent,
        MediaImagesComponent,
        MediaVideosComponent,
        ReviewsComponent,
        FullCastAndCrewComponent
    ],
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
        DragScrollModule
    ],
    providers: [
        ConfigurationService,
        SearchService,
        MoviesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    // constructor(overlayContainer: OverlayContainer) {
    //     overlayContainer.getContainerElement().classList.add('dark-theme');
    
 }
