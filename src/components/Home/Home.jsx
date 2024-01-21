import React, { useEffect, useState } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies, addShows } from '../../features/movies/movieSlice';
import axioss from "../../common/Apis/movieApi"
import ShowListing from '../MovieListing/ShowListing';
import SearchBox from '../Header/SearchBox';




const Home = () => {
  const dispatch = useDispatch();
  const key = import.meta.env.VITE_OMDB_API_KEY;
  console.log(key);

  const searchWord = useSelector((state)=>state.movies.search);
  console.log(searchWord + "aiaokok")
  // var searchWord="dog"

  useEffect(() => {
     const fetchMoviesData = async(searchWord)=>{
        const res = await axioss.get(`?apikey=${key}&s=${searchWord}&type=movie`)
        console.log(searchWord + " ___45__")
        dispatch(addMovies(res.data))
        console.log(res.data);
     }
     fetchMoviesData(searchWord);
     
    const fetchShowsData = async(searchWord)=>{
      const res = await axioss.get(`?apikey=${key}&s=${searchWord}&type=series`)
      dispatch(addShows(res.data))
      console.log(res.data);
    }
    fetchShowsData(searchWord)
  }, [dispatch , searchWord])

  return (
    <>
      <div className='relative md:container md:mx-auto bg-[#eeeef0] p-4'>
        <SearchBox/>
        {/* <hr /> */}
        <MovieListing />
        <hr />
        <ShowListing/>        
      </div>
    </>
  )
}

export default Home;