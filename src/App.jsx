import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NoPage from './components/PageNotFound/NoPage'
import Footer from './components/Footer/Footer'
import MovieDetails from './components/MovieListing/MovieDetails'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movie/:imdbID' element={<MovieDetails/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App