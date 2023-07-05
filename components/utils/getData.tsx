
const options = {
  next: { revalidate: 0 },
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};
export const getMovies = (category: string = "top_rated") => {
   fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response.results)
      let tempdata = response.results
      return tempdata;
    })
    .catch((err) => console.log(err.status_message));
};

export const getMovie = (id: string) => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.results);
    return response.results;
  })
  .catch((err) => console.error(err));

  // fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)

};
