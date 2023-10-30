import { useAppSelector } from "../../hooks/redux-hooks";

import { Button, Grid } from "@mui/material";

const AdditionalDetails = () => {
	const { movie } = useAppSelector((state) => state.movies);

	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs={1} />
				<Grid item xs={5}>
					<h3 className="headerPageInfo">Runtime:</h3>
					{Math.floor(movie[0].runtime / 60)}h {movie[0].runtime % 60}
					m<h3 className="headerPageInfo">Languages:</h3>
					<p>Original language: {movie[0].original_language}</p>
					<p>
						Spoken languages:{" "}
						{movie[0].spoken_languages
							.map((lang) => lang && lang.length > 0 && lang)
							.join(", ")}
					</p>
					<h3 className="headerPageInfo">Genres:</h3>
					<p>
						{movie[0].genres.map((genre) => genre.name).join(", ")}
					</p>
					<h3 className="headerPageInfo">External links:</h3>
					{movie[0].homepage && (
						<a href={movie[0].homepage}>
							<Button
								style={{
									backgroundColor: "#5e00ff",
									color: "#FFFFFF",
									margin: "5px",
								}}
							>
								Home
							</Button>
						</a>
					)}
					{movie[0].imdb_id && (
						<a
							href={`https://www.imdb.com/title/${movie[0].imdb_id}`}
						>
							<Button
								style={{
									backgroundColor: "#f5c518",
									color: "#FFFFFF",
									margin: "5px",
								}}
							>
								IMDB
							</Button>
						</a>
					)}
					{movie[0].tmdb_id && (
						<a
							href={`https://www.themoviedb.org/movie/${movie[0].tmdb_id}`}
						>
							<Button
								style={{
									backgroundColor: "#18b7da",
									color: "#FFFFFF",
									margin: "5px",
								}}
							>
								TMDB
							</Button>
						</a>
					)}
				</Grid>
				<Grid item xs={5}>
					<h3 className="headerPageInfo">Release date:</h3>
					{movie[0].release_date}
					{movie[0].budget > 0 && (
						<>
							<h3 className="headerPageInfo">Budget:</h3>$
							{movie[0].budget.toLocaleString()}
						</>
					)}
					{movie[0].revenue > 0 && (
						<>
							<h3 className="headerPageInfo">Revenue:</h3>$
							{movie[0].revenue.toLocaleString()}
						</>
					)}
					<h3 className="headerPageInfo">Production companies:</h3>
					{movie[0].production_companies
						.map((obj) => obj && obj.length > 0 && obj)
						.join(", ")}
				</Grid>
				<Grid item xs={1} />
			</Grid>
		</>
	);
};

export default AdditionalDetails;
