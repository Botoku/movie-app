"use client";
import React from "react";
import { retrieveGenre } from "./utils/genreList";
import Image from "next/image";
import CircularProgress from "./CircularProgress";

type MovieListItemProps = {
  image: string;
  title: string;
  releaseDate: string;
  voteAverage: number;
  genres: number[];
};
const MovieListItem = ({
  image,
  title,
  releaseDate,
  voteAverage,
  genres,
}: MovieListItemProps) => {
  const genre: string[] = [];
  genres.forEach((genreId: number) => {
    genre.push(retrieveGenre(+genreId));
  });

  function convertDate(date:string) {
    return new Date(date).toDateString().slice(4)
  }

  return (
    <div className="">
      <div className="relative w-[200px] h-[300px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          fill
          sizes="260px"
          alt={title}
          className="object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-2 -translate-y-full z-10 w-12">
          <CircularProgress
            value={Math.floor(voteAverage * 10)}
            color="#0e9b71"
          />
        </div>
      </div>
      <div className="py-5 px-2">
        <h3 className="font-bold">{title}</h3>
        <p>{convertDate(releaseDate)}</p>
        <div>
          {genre.slice(0, 3).map((el) => (
            <p key={el} className="inline-block rounded-full bg-darkBlue text-white px-2 py-1">{el}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListItem;
