import { Episode } from "../episode";

export class Season {
    _id: string;
    air_date: Date;
    episodes: Episode[];
    name: string;
    overview: string;
    id: number;
    poster_path: string;
    season_number: number;
}