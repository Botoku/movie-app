import React from 'react'
import {getMovie, getMovies} from './utils/getData'

const Temp = () => {
    async function fetchData(){
        const movies = await getMovies('top_rated')
        console.log(movies)
        const data = await getMovie('278')
        console.log(data)
        
    } 
    fetchData()
  return (
    <div>Temp</div>
  )
}

export default Temp