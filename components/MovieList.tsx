"use client";
import { useEffect, useState } from "react";
import MovieListItem from "./MovieListItem";
import { practiceData } from "./utils/genreList";
import { getMovies, getMovie } from "./utils/getData";
async function fetchCategories(cat:string){
  const moviesFetched = await getMovies(cat)
  return moviesFetched
}
async function fetchMovie(id:string){
  const moviesFetched = await getMovie(id)
  return moviesFetched
}
const MovieList = async () => {
  // const [movies, setMovies] = useState<Movie[] | null>(null);
  // const [movie, setMovie] = useState('');
  const [category, setCategory] = useState("top_rated");

  const movies = await fetchCategories(category)
  const movie = await fetchMovie("287")
  // useEffect(() => {

  //   // setMovies(getMovies(category)!) 

  //   getMovie('278')
  // }, [category]);
  // console.log(movies);
  console.log(movies)
  console.log(movie)
  return (
    <div className="flex items-center flex-col">
      <div className="pt-3">
        <div className="flex gap-5">
          <p onClick={() => setCategory('upcoming')} className="bg-darkBlue px-2 py-1 cursor-pointer">Upcoming</p>
          <p onClick={() => setCategory('popular')} className="bg-darkBlue px-2 py-1 cursor-pointer">Popular</p>
          <p onClick={() => setCategory('top_rated')} className="bg-darkBlue px-2 py-1 cursor-pointer">Top Rated</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {movies?.map((movie) => {
          return (
            <div
              key={movie.id}
              className="border-b-white mb-3 w-[200px] shadow-[0_0_5px_rgba(0,0,0,.5)] rounded-lg"
            >
              <MovieListItem
                image={movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
                voteAverage={movie.vote_average}
                genres={movie.genre_ids}
                key={movie.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
