"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMovie } from "@/components/utils/getData";
import Image from "next/image";
import { retrieveGenre } from "@/components/utils/genreList";
import CircularProgress from "@/components/CircularProgress";
import { List, Heart, Bookmark, Star } from "react-feather";
import Slider from "react-slick";
import ISO6391 from 'iso-639-1'


type MovieDetailProps = {
  params: {
    id:Movie
  }
}

const movieDetail = ({ params: { id } }:any) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [fetching, setFetching] = useState(true);
  async function fetchMovie() {
    let moviesTemp = await getMovie(id);
    setMovie(moviesTemp);
    setFetching(false);
  }

  useEffect(() => {
    fetchMovie();
  }, [id]);
  const genres = [];
  // movie.genres.forEach(gen => genres.push(gen));
  console.log(movie);

  return (
    <div>
      <div
        className={`'w-full bg-cover h-[500px] flex text-white`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        }}
      >
        <div className="relative w-[300px] h-[400px]">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={`${movie?.original_title} poster`}
            fill
          />
        </div>

        <div>
          <h3>
            {movie?.original_title}
            {movie?.release_date}
          </h3>
          <div>
            <div>
              <p>R</p>
              <p>{movie?.release_date}TR</p>
              {/* <div>{genres.map(el => <p>{el}</p>)}</div> */}
            </div>
            <div />
          </div>
          <div>
            <div className="w-10 h-10">
              <CircularProgress
                value={+movie?.vote_average! * 10}
                color="green"
              />
            </div>
            <p>User Score</p>
            <div>
              <List />
            </div>
            <div>
              <Heart />
            </div>
            <div>
              <Bookmark />
            </div>
            <div>
              <Star />
            </div>
          </div>
          <p>{movie?.tagline}</p>
          <div>
            <p>Overview</p>
            <p>{movie?.overview}</p>
          </div>
          <div>
            <div>
              <p>{movie?.credits?.crew && movie?.credits?.crew[0].name}</p>
              <p>{movie?.credits?.crew && movie?.credits?.crew[0].job}</p>
            </div>
            <div>
              <p>{movie?.credits?.cast && movie?.credits?.cast[0].name}</p>
              <p>Characters</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-3">
          <p>Top Billed Cast</p>
          <Slider {...settings}>
            {movie?.credits?.cast?.slice(0, 8).map((member, i) => (
              <div key={i}>
                <div className="relative w-[200px] h-[250px]">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
                    height={250}
                    width={200}
                    alt={`${member?.name} profile`}
                  />
                </div>
                <div>
                  <p>{member?.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <div></div>
          <div>
            <p>Status</p>
            <p>{movie?.status}</p>

            <p>Original Language</p>
            <p>{`${ISO6391.getName(movie?.original_language!)}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
function toHoursAndMinutes(totalMinutes: number) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${hours}:${minutes}`;
}
var settings = {
  dots: true,
  infinite: false,

  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};



export default movieDetail;
