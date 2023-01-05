export interface SeoProps {
  title: string;
}

export interface MovieInfo {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  thumbnailUrl: string;
}

export interface StageDetail {
  backdrop_path: string;
  original_title: string;
  title: string;
  tagline: string;
  release_date: string;
  overview: string;
  runtime: number;
  adult: boolean;
  thumbnailUrl: string;
}
