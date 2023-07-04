"use client";
import { useEffect, useState } from "react";


const MovieList = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [category, setCategory] = useState('now_playing')
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${process.env.API_TOKEN}`,
    },
  };

  useEffect(() => {
 
    fetch(
       `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(movies);
  return (
    <div>
      {movies?.map((movie) => {
        return (
          <div key={movie.id} className="border-b-white mb-3">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        );
      })}
    </div>
  );

};

export default MovieList;
