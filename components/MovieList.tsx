"use client";
import { useEffect, useState } from "react";
import MovieListItem from "./MovieListItem";
import { practiceData } from "./utils/genreList";
import { getMovies, getMovie } from "./utils/getData";
import Link from "next/link";

type FetchedMovies = {
  results:Movie[]
}


const MovieList = async () => {
  const [movies, setMovies] = useState<FetchedMovies | null>(null);
  // const [movie, setMovie] = useState('');
  const [fetching, setFetching] = useState(true)
  const [category, setCategory] = useState("top_rated");
  async function fetchMovies(){
    let moviesTemp =  await getMovies(category)
    setMovies(moviesTemp)
    setFetching(false)
  } 
  useEffect(()=>{
    fetchMovies()
  },[category])
  console.log(movies)

  const handleCategoryClick = (cat:string) => {
    setFetching(true)
    setCategory(cat)
  }


  return (
    <div className="flex items-center flex-col">
      <div className="pt-3">
        <div className="flex gap-5">
          <p onClick={() => handleCategoryClick('upcoming')} className="bg-darkBlue px-2 py-1 cursor-pointer">Upcoming</p>
          <p onClick={() => handleCategoryClick('popular')} className="bg-darkBlue px-2 py-1 cursor-pointer">Popular</p>
          <p onClick={() => handleCategoryClick('top_rated')} className="bg-darkBlue px-2 py-1 cursor-pointer">Top Rated</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {/* {fetching && <p>Loading</p>} */}
        {!fetching && movies && movies?.results.map((movie: Movie) => {
          return (
            <Link href={`/movies/${movie.id}`}
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
