import React from 'react'
import { NavLink } from 'react-router-dom'

const MovieCards = ({ data }) => {
    return (
        <>
            <div className="relative min-h-[75vh] w-[75vw] sm:w-[18vw]   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <NavLink to={`/movie/${data.imdbID}`}>
                    <img className="rounded-t-lg" src={data.Poster} alt="" />
                </NavLink>
                <div className="p-5">
                    <NavLink to="/movieDetails">
                        <h6 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{data.Title}</h6>
                    </NavLink>
                    <p className="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">Year : {data.Year}.</p>
                </div>
            </div> 
        </>
    )
}

export default MovieCards