import React from 'react'


const DetailingTemplet = ({moviesOrShowDetails}) => {
    const css = 'mb-2 text-xl  text-gray-500 sm:text-2xl dark:text-gray-400';

    return (
        <div className='p-8 bg-[#eeeef0]  gap-[3vw] w-full sm:min-h-[81vh] flex flex-col sm:flex-row'>
            <div className='sm:w-1/2 mb-9  w-full items-center flex flex-col'>
                <h1 className="mb-10 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-5xl dark:text-white">Title : {moviesOrShowDetails.Title}</h1>
                <img className='rounded-xl' src={moviesOrShowDetails.Poster} alt="" />
            </div>
            <div className='sm:w-1/2 mb-9  w-full  '>
                <h4 className={css}><span className='text-blue-600'>Actors :</span> {moviesOrShowDetails.Actors}</h4>
                <h4 className={css}><span className='text-blue-600'>imdbRating : ⭐</span> {moviesOrShowDetails.imdbRating}</h4>
                <h4 className={css}><span className='text-blue-600'>Language : </span> {moviesOrShowDetails.Language}</h4>
                <h4 className={css}><span className='text-blue-600'>Year :📆</span> {moviesOrShowDetails.Year}</h4>
                <h4 className={css}><span className='text-blue-600'>Plot :</span> {moviesOrShowDetails.Plot}</h4>
                <h4 className={css}><span className='text-blue-600'>Director :📹</span> {moviesOrShowDetails.Director}</h4>
                <h4 className={css}><span className='text-blue-600'>Box Office Collection :</span> {moviesOrShowDetails.BoxOffice}</h4>
            </div>
        </div>
)
}

export default DetailingTemplet