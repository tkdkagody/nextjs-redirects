export interface SeoProps {
  title: string;
}

export interface StageInfo {
  _id: string;
  title: string;
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
