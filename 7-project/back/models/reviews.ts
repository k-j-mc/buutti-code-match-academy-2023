export interface IReview {
	id: string;
	movie_id: string;
	user_id: string;
	published_at: string;
	spoilers: boolean;
	title: string;
	review: string;
	rating: number;
	likes: number;
	dislikes: number;
}
