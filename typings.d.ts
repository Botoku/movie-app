type MovieRes = {
  results: Movie;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genre_ids: number[];
  vote_average: number;
  release_date: string;
  original_language?: string;
  original_title?: string;
  popularity?: number;
  video?: boolean;
  vote_count: number;
  tagline?: string;
  status?: string;
  credits?: {
    cast?: [{ name?: string, profile_path: string }];
    crew?: [{ name?: string, job?: string }];
  };
};
