export class ListResponse {
    results: Result[];
    page: number;
    total_results: number;
    dates: Date[];
    total_pages: number;
}

class Result {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path : string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    genre_names: string[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date: Date;
  }