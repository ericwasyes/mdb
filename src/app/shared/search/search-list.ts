export interface SearchList {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}

export class Movie {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path: string;
    original_language:string;
    original_title: string;
    genre_ids: string[];
    backdrop_path: string;
    adult: true;
    overview: string;
    release_date: Date;
}

