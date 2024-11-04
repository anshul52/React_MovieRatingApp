import React, { useState } from "react";
import {
  addMovies,
  addSearchWord,
  addShows,
} from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log(search)
    dispatch(addSearchWord(search));
    dispatch(addMovies({}));
    dispatch(addShows({}));
  };
  return (
    <div className="mb-10 mt-3   sm:flex justify-center">
      <form action="" onSubmit={submitHandler} className="relative">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="h-11 sm:w-[50vw] justify-center flex items-center relative normal-case w-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 outline-none"
        />
        <button className="h-8 mt-6  flex items-center text-white absolute top-[-18px] end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
