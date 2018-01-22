import { Crew } from "./crew";

export class Episode {
    air_date: Date;
    crew: Crew[];
    episode_number: number;
    guest_stars: GuestStar[];
    name: string;
    overivew: string;
    id: number;
    production_code: number;
    season_number; number;
    still_path: string;
    vote_average: number;
    vote_count: number;

    directors: Crew[];
    writers: Crew[];
}

class GuestStar {
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: string;
}