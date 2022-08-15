export interface SeoProps {
    title:string;
}

export interface MovieInfo {
    id:number;
    title:string;
    poster_path:string;
    vote_average:number;
}

export interface MovieDetail {
    backdrop_path:string;
    original_title:string;
    title:string;
    tagline:string;
    release_date:string;
    overview:string;
    runtime:number;
    adult:boolean;
}