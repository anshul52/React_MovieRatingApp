import React from 'react'
import { useSelector } from 'react-redux'
import MovieCards from './MovieCards';
import { getAllMovies } from '../../features/movies/movieSlice';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const search = useSelector((state)=>state.movies.search);
  
  console.log(movies ,"anshul")
  let renderMovies;
  const css = "mb-10 min-h-[10vh] flex items-center justify-center bg-[#eeeef0]  text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white" 
  renderMovies = (movies.Response === "True") ? (
      movies.Search.map((movie, index) => (
        <MovieCards className="" key={index} data={movie} />
      ))
    ) : (
      <div className={css}>
        {
         (movies.Response === "False") ? <h1>Not Found !!!</h1> : <h1>Loading.....</h1>
        }
      </div>
    );
  return (
    <>
      <h1 className='text-5xl pb-10'>Movies</h1>
      <div className='relative items-center justify-center flex flex-wrap w-[88vw]  gap-6 '>
        {search !== "" ? renderMovies :  <div className={css}><h1>Please search</h1></div>} 
      </div>
    </>
  )
}

export default MovieListing;
