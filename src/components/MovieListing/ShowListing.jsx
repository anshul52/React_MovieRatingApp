import React from 'react'
import { useSelector } from 'react-redux';
import MovieCards from './MovieCards';


const ShowListing = () => {
    
    const shows = useSelector((state) => state.movies.shows);
    const search = useSelector((state)=>state.movies.search);

    console.log(shows, "anshul")
    const css = "mb-10 min-h-[10vh] flex items-center justify-center bg-[#eeeef0]  text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white"

    let renderShows;
    renderShows = (shows.Response === "True") ? (
        shows.Search.map((shows, index) => (
            <MovieCards className="" key={index} data={shows} />
        ))) : (
        <div className={css}>
            {
                (shows.Response === "False") ? <h1>Not Found !!!</h1> : <h1>Loading.....</h1>
            }
            
        </div>
    );

    return (
        <>
            <h1 className='text-5xl mt-10 pb-10'>Series</h1>
            <div className='relative items-center justify-center flex flex-wrap w-[88vw]  gap-6 '>
                {search !== "" ? renderShows : <div className={css}><h1>Please Search</h1></div>}
            </div>
        </>
    )
}

export default ShowListing;