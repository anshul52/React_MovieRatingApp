import {  createSlice } from "@reduxjs/toolkit";


const key = import.meta.env.VITE_OMDB_API_KEY;
console.log(key);

// createAsyncThunk,

// export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
//   const searchBox = "harry";
//   const res = await axioss.get(`?apikey=${key}&s=${searchBox}&type=movie`)
//   console.log(res.data)
//   return res.data;
// })




const initialState = {
  movies: {},
  shows:{},
  search: "",
  details:{},
}



const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  addMovies: (state, action)=>{
    state.movies = action.payload
  },
  addShows: (state, action)=>{
    state.shows = action.payload
  },
  addSearchWord: (state, action)=>{
    state.search = action.payload
    console.log(action.payload +"____85___");
  },
  addMovieShowsDetails: (state, action)=>{
    state.details = action.payload
  },
  removeSelectedMovieOrShow: (state, action)=>{
    state.details = {}
  },
},})

                                                          
export const { addMovies , addShows , addSearchWord  , addMovieShowsDetails ,removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;