
const options = {
  next: { revalidate: 300 },
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDBhMTE2NmI5YzcwMGFkNjlkMjY4NDFmM2Y3Yjg2OSIsInN1YiI6IjY0YTMwNjg4ZTlkYTY5MDBhZTJmMTZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Agq56RzOX7Hgq5ylJLNHc2KFGbo-K9C2cPL7aFDXZWY`,
  },
};


export const getMovies = async (category:string) => {
  const res = await(fetch( `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`))
  const data = await res.json()
  return data
}

export const getMovie = async (id:string) => {
  const res = await(fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=credits`))
  const data = await res.json()
  console.log(data)
  return data
 
}

export const progressColor = (value:number) => {
if (value < 35) return "red"
if (value >= 35 && value < 70 ) return "yellow"
if (value >= 70 ) return "green"
}
