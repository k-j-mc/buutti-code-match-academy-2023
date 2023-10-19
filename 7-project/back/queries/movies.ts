export const movieQueries = {
	createTable: `
    CREATE TABLE IF NOT EXISTS "movies" (
        "id" VARCHAR(100) NOT NULL,
        "adult" BOOLEAN NOT NULL,
        "backdrop" VARCHAR(100) NOT NULL,
        "budget" INTEGER NOT NULL,
        "genres" INTEGER[] NOT NULL,
        "homepage" VARCHAR(100) NOT NULL,
        "tmdb_id" INTEGER NOT NULL,
        "imdb_id" VARCHAR(100) NOT NULL,
        "original_language" VARCHAR(100) NOT NULL,
        "original_title" VARCHAR(100) NOT NULL,
        "overview" TEXT NOT NULL,
        "popularity" DOUBLE PRECISION NOT NULL,
        "poster" VARCHAR(100) NOT NULL,
        "production_companies" TEXT[] NOT NULL,
        "release_date" VARCHAR(100) NOT NULL,
        "revenue" INTEGER NOT NULL,
        "runtime" INTEGER NOT NULL,
        "spoken_languages" TEXT[],
        "tagline" VARCHAR(100) NOT NULL,
        "title" VARCHAR(100) NOT NULL,
        "vote_average" DOUBLE PRECISION NOT NULL,
        "vote_count" INTEGER NOT NULL
    )`,
	insertMovie: `INSERT INTO "movies" ("id", "adult", "backdrop", "budget", "genres", "homepage", "tmdb_id", "imdb_id", "original_language", "original_title", "overview", "popularity", "poster", "production_companies", "release_date", "revenue", "runtime", "spoken_languages", "tagline", "title", "vote_average", "vote_count") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)`,

	createMovieVideosTable: `
        CREATE TABLE IF NOT EXISTS "videos" (
            "id" VARCHAR(100) NOT NULL,
            "name" VARCHAR(100) NOT NULL,
            "key" VARCHAR(100) NOT NULL,
            "site" VARCHAR(100) NOT NULL,
            "size" NUMERIC NOT NULL,
            "type" VARCHAR(100) NOT NULL,
            "official" BOOLEAN NOT NULL,
            "published_at" VARCHAR(100) NOT NULL
            )`,
	insertVideos: `INSERT INTO "videos" ("id", "name", "key", "site", "size", "type", "official", "published_at") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,

	createCastTable: `
    CREATE TABLE IF NOT EXISTS "cast" (
        "id" VARCHAR(100) NOT NULL,
        "tmdb_id" VARCHAR(100) NOT NULL,
        "name" VARCHAR(100) NOT NULL,
        "character" VARCHAR(100) NOT NULL,
        "profile" VARCHAR(100) NOT NULL
    )`,
	insertCast: `INSERT INTO "cast" ("id", "tmdb_id", "name", "character", "profile") VALUES ($1, $2, $3, $4, $5)`,

	findFirst10: `SELECT "id", "backdrop", "poster", "tagline", "title", "vote_average", "vote_count" FROM "movies" OFFSET random() * (SELECT COUNT(*) FROM "movies") LIMIT 10`,
	findAll: `SELECT "id", "backdrop", "poster", "tagline", "title", "vote_average", "vote_count" FROM "movies" LIMIT 100`,

	findTop20: `SELECT "id", "backdrop", "poster", "tagline", "title", "vote_average", "vote_count" FROM "movies" ORDER BY "vote_average" DESC LIMIT 20`,
	findTopAction: `SELECT "id", "backdrop", "poster", "tagline", "title", "vote_average", "vote_count" FROM "movies" WHERE 28=ANY("genres") ORDER BY "vote_count" DESC LIMIT 20`,

	findTopHorror: `SELECT "id", "backdrop", "poster", "tagline", "title", "vote_average", "vote_count" FROM "movies" WHERE 27=ANY("genres") ORDER BY "vote_count" DESC LIMIT 20`,

	findMovieByTMDBId: `SELECT * FROM "movies" WHERE "tmdb_id" = $1`,
	findMovieById: `SELECT * FROM "movies" WHERE "id" = $1`,
	findVideosById: `SELECT * FROM "videos" WHERE "id" = $1`,
	findCastById: `SELECT * FROM "cast" WHERE "tmdb_id" = $1`,
};

// GENRE LIST
// Action          28
// Adventure       12
// Animation       16
// Comedy          35
// Crime           80
// Documentary     99
// Drama           18
// Family          10751
// Fantasy         14
// History         36
// Horror          27
// Music           10402
// Mystery         9648
// Romance         10749
// Science Fiction 878
// TV Movie        10770
// Thriller        53
// War             10752
// Western         37
