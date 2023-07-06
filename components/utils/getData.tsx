



export const getMovies = async (category:string) => {
  const res = await(fetch( `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`))
  const data = await res.json()
  return data
}

export const getMovie = async (id:string) => {
  const res = await(fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=credits`))
  const data = await res.json()
  return data
 
}

export const searchMovie = async (id:string) => {
  const res = await(fetch( `https://api.themoviedb.org/3/search/movie?query=${id}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`))
  const data = await res.json()
  return data
 
}

export const progressColor = (value:number) => {
if (value < 35) return "rgb(242, 45, 15)"
if (value >= 35 && value < 70 ) return "rgb(242, 216, 15)"
if (value >= 70 ) return "rgb(43, 181, 27)"
}
