import React, { useEffect } from 'react'
import axioss from "../../common/Apis/movieApi"
import { addMovieShowsDetails, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector  } from 'react-redux';
import DetailingTemplet from './DetailingTemplet';


const MovieDetails = () => {
  const moviesOrShowDetails = useSelector((state)=>state.movies.details);
  console.log(moviesOrShowDetails)
  const dispatch = useDispatch();
  const {imdbID} = useParams();
  console.log(imdbID);
  const key = import.meta.env.VITE_OMDB_API_KEY;

  
   let detailss = moviesOrShowDetails.Response === "True" ? (
      <DetailingTemplet moviesOrShowDetails={moviesOrShowDetails} /> 
    ) :  (
        <div className="mb-10 min-h-[100vh] flex items-center justify-center bg-[#eeeef0]  text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            <h3>Loading.......</h3>
        </div>
    )
    
  useEffect(() => {
     const fetchMoviesDetails = async(id)=>{
        const res = await axioss.get(`?apikey=${key}&i=${id}&Plot=full`)
        dispatch(addMovieShowsDetails(res.data))
        // console.log(res.data);
     }
     fetchMoviesDetails(imdbID);
     return ()=>{
      dispatch(removeSelectedMovieOrShow())
     }
  }, [dispatch, imdbID])

  return (
    <div className='w-full h-full '>
      {detailss}
    </div>
  )
}

export default MovieDetails