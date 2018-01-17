import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/components/movies/movies.component';
import { MovieDetailComponent } from './movies/components/movieDetail/movie-detail.component';
import { MovieListComponent } from './movies/components/movieList/movie-list.component';
import { PageNotFoundComponent } from './shared/pageNotFound/page-not-found.component';
import { TvListComponent } from './tv/components/tvList/tv-list.component';
import { TvComponent } from './tv/components/tv/tv.component';

const appRoutes: Routes = [
    {
        path: 'movie/:id',
        component: MovieDetailComponent,
    },
    {
        path: 'movies',
        component: MoviesComponent,
    },
    // {
    //     path: 'tv/:id',
    //     component: TvDetailComponent,
    // },
    {
        path: 'tv',
        component: TvComponent,
    },
    {
        path: 'movies/search',
        component: MovieListComponent,
        data: {
            title: 'Search Movies',
        }
    },
    {
        path: 'tv/search',
        component: TvListComponent,
        data: {
            title: 'Search TV Shows',
        }
    },
    {
        path: '**', 
        component: PageNotFoundComponent

    }


];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                // enableTracing: true, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class AppRoutingModule { }