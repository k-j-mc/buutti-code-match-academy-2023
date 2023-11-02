In the project directory, you can run:

### `cd back && touch .env cd back && echo "PORT=5000 SECRET=YOURSECRET PG_PORT=5432 PG_HOST=local_pgdb PG_USERNAME=pguser PG_PASSWORD=pgpass PG_DATABASE=postgres TMDB_KEY=Bearer YOUR KEY GOES HERE TMDB_MOVIE_PATH=https://api.themoviedb.org/3/movie/popular?language=en-US&page= TMDB_POPULAR_MOVIE_PATH=https://api.themoviedb.org/3/movie/popular?language=en-US&page= TMDB_IMAGE_PATH=http://image.tmdb.org/t/p/ TMDB_DETAILS_PATH=https://api.themoviedb.org/3/movie/ TMDB_PATH=https://api.themoviedb.org/3/movie/ FRONTEND_URL=http://localhost:3000" > .env && cd ..`

### `docker compose up`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Note: you will need your own TMDB API Key for the .env
