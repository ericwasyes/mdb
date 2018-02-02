// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
    MatButtonToggleModule
 } from '@angular/material';

// Modules
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MoviesModule } from './movies/movies.module';
import { TvModule } from './tv/tv.module';
import { PeopleModule } from './people/people.module';

// Components
import { AppComponent } from './app.component';

// Services
import { ConfigurationService } from './services/configuration/configuration.service';
import { MoviesService } from './services/movies/movies.service';
import { SearchService } from './services/search/search.service';
import { GenresService } from './services/genres/genres.service';
import { TvSeasonsService } from './services/tvSeasons/tv-seasons.service';
import { TvService } from './services/tv/tv.service';
import { TieInterceptor } from './http-interceptor';
import { CollectionsService } from './services/collections/collections.service';

@NgModule({
    declarations: [
        AppComponent,     
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
        MatButtonToggleModule,
        RoundProgressModule,
        MatGridListModule,
        MatSelectModule,
        DragScrollModule,
        AppRoutingModule,
        SharedModule,
        MoviesModule,
        TvModule,
        PeopleModule,
        RouterModule

    ],
    providers: [
        ConfigurationService,
        SearchService,
        MoviesService,
        GenresService,
        TvService,
        TvSeasonsService,
        CollectionsService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TieInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
