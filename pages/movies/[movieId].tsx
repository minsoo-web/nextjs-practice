import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type MovieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: { id: number; name: string; poster_path: string; backdrop_path: string };
  budget: number;
  genres: [];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

const MovieDetail: NextPage = ({}) => {
  const router = useRouter();
  const movieId = router.query.movieId;

  const [movieDetail, setMovieDetail] = useState<MovieDetailType | undefined>();

  useEffect(() => {
    (async () => {
      if (!movieId) return;
      const res = await (await fetch(`/api/movie/${movieId}`)).json();

      setMovieDetail(res);
    })();
  }, [movieId]);

  return (
    <div>
      {!movieDetail ? (
        <div>Loading...</div>
      ) : (
        <div className="movie" key={movieDetail.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} />
          <h4>{movieDetail.original_title}</h4>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
