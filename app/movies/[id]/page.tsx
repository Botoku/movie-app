"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMovie } from "@/components/utils/getData";
import Image from "next/image";
import { retrieveGenre } from "@/components/utils/genreList";
import CircularProgress from "@/components/CircularProgress";
import { progressColor } from "@/components/utils/getData";
import {
  List,
  Heart,
  Bookmark,
  Star,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Link,
  ChevronDown
} from "react-feather";
import Slider from "react-slick";
import ISO6391 from "iso-639-1";

type MovieDetailProps = {
  params: {
    id: Movie;
  };
};

const movieDetail = ({ params: { id } }: any) => {
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
  let genres: string[] = [];
 genres = movie?.genres?.map(gen => gen.name)!;
  

  return (
    <section className="max-w-full">
      {fetching && <p>Loading</p>}
      {!fetching && movie && (
        <>
          <div className="items-center justify-center hidden md:flex">
            <div className="flex justify-between w-1/2 gap-4 ">
              <div className="border-b-3 border-b-blue-400 py-2 flex items-center">
                <p className="mr-4">Overview</p>
                <ChevronDown />
              </div>

              <div className="py-2 flex items-center">
                <p className="mr-4">Media</p>
                <ChevronDown />
              </div>

              <div className="py-2 flex items-center">
                <p className="mr-4">Fandom</p>
                <ChevronDown />
              </div>

              <div className="py-2 flex items-center">
                <p className="mr-4">Share</p>
                <ChevronDown />
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            }}
            className={`'w-full bg-cover block md:flex text-white bg-black bg-opacity-80 backdrop-brightness-sm bg-blend-darken min-h-[500px] pt-3`}
          >
            <div className="relative w-[300px] h-[400px] md:w-[500px] md:ml-5 md:mr-5 rounded-lg overflow-hidden mt-3 mx-auto">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={`${movie?.original_title} poster`}
                fill
                className="rounded-lg"
              />
            </div>

            <div className="pt-8 px-2">
              <h3 className="font-bold text-[3rem]">
                {movie?.original_title}{" "}
                <span className="font-extralight opacity-60">
                  ({movie?.release_date.slice(0, 4)})
                </span>
              </h3>
              <div>
                <div className="flex items-center">
                  <p className="border rounded-sm opacity-50 px-1 mr-1">R</p>
                  <p>{movie?.release_date} (TR)</p>
                  <div className="h-[8px] w-[8px] rounded-full bg-white mx-1">{""} </div>

                  <div>{genres.join(', ')}</div>
                  <div className="h-[8px] w-[8px] rounded-full bg-white mx-1">{""} </div>
                  <p>{toHoursAndMinutes(movie?.runtime)}</p>
                </div>
              </div>
              <div className="flex justify-between w-[80%] lg:[w-65%] mt-4 md:mr-10 mb-5 items-center">
                <div className="flex">
                  <div className="w-10 h-10">
                    <CircularProgress
                      value={Math.floor(+movie?.vote_average! * 10)}
                      color={progressColor(Math.floor(+movie?.vote_average! * 10))!}
                    />
                  </div>
                  <p className="ml-1 text-sm">
                    User <br /> Score
                  </p>
                </div>
                <div className="flex items-center justify-center bg-darkBlue w-[40px] h-[40px] rounded-full p-2">
                  <List className="text-[10px]"/>
                </div>
                <div className="flex items-center justify-center bg-darkBlue w-[40px] h-[40px] rounded-full p-2">
                  <Heart className="text-[10px]" fill="white" />
                </div>
                <div className="flex items-center justify-center bg-darkBlue w-[40px] h-[40px] rounded-full p-2">
                  <Bookmark className="text-[10px]" fill="white" />
                </div>
                <div className="flex items-center justify-center bg-darkBlue w-[40px] h-[40px] rounded-full p-2">
                  <Star className="text-[10px]" fill="white" width={24} />
                </div>
                <div className="flex">
                  <Play fill="white" />
                  <p className="ml-2">Play Trailer</p>
                </div>
              </div>
              <p className="italic opacity-50">{movie?.tagline}</p>
              <div>
                <p className="mb-3 mt-2  font-bold text-lg">Overview</p>
                <p className="mb-3 opacity-60">{movie?.overview}</p>
              </div>
              <div className="flex justify-between md:w-1/2">
                <div>
                  <p className="font-bold mb-1 text-sm">
                    {movie?.credits?.crew && movie?.credits?.crew[0].name}
                  </p>
                  <p className="opacity-60">
                    {movie?.credits?.crew && movie?.credits?.crew[0].job}
                  </p>
                </div>
                <div className="mb-5">
                  <p className="font-semibold mb-1 ">
                    {movie?.credits?.cast && movie?.credits?.cast[0].name}
                  </p>
                  <p className="opacity-60 text-sm">Characters</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-5">
            <div className="p-1 md:pr-6">
              <p className="font-bold text-lg mb-4">Top Billed Cast</p>
              <Slider {...settings}>
                {movie?.credits?.cast?.slice(0, 8).map((member, i) => (
                  <div key={i}>
                    <div className="relative w-[200px] h-[250px] rounded-sm">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
                        fill
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
            <div className="md:absolute right-7 top-[30px] bg-white shadow-[0_0_15px_20px_#fff] md:py-4 md:px-3 mt-10">
              <div className="flex gap-4 mb-6">
                <Facebook />
                <Twitter fill={"black"} />
                <Instagram />
                <Link className="border-l pl-2" fill={"gray"} />
              </div>
              <div>
                <p className="font-semibold mb-3">Status</p>
                <p className="mb-7">{movie?.status}</p>

                <p className="font-semibold mb-3">Original Language</p>
                <p>{`${ISO6391.getName(movie?.original_language!)}`}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
function toHoursAndMinutes(totalMinutes: number) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);


  return `${hours}h ${minutes}m`;
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
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default movieDetail;
