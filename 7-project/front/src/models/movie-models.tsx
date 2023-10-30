export interface IVideo {
	id: string;
	key: string;
	name: string;
	official: boolean;
	published_at: string;
	site: string;
	size: number;
	type: string;
}

export interface IVideos {
	videos: IVideo[];
}

export interface IGenre {
	name: string;
	id: number;
}

export interface MovieInterface {
	id: string;
	adult: boolean;
	backdrop: string;
	budget: number;
	cast: string[];
	genres: IGenre[];
	homepage: string;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster: string;
	production_companies: string[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: string[];
	tagline: string;
	title: string;
	tmdb_id: number;
	video_count: number;
	vote_average: number;
	vote_count: number;
}

export interface IMovieMinimal {
	id: string;
	backdrop: string;
	genreNames: string[];
	popularity: number;
	poster: string;
	tagline: string;
	title: string;
	vote_average: number;
	vote_count: number;
}

export interface MovieArrayModel {
	allMovies: MovieInterface[];
}

export type LoadingState = Record<string, boolean>;
