import React from 'react'
import PropTypes from 'prop-types'

function SearchBar({searchMovie, setSearchMovie,fetchMovieData}) {
  return (
    <div>
      <div className="input flex justify-center  px-5 lg:px-0 py-5">
        <input
          type="text"
          placeholder='Search here'
          value={searchMovie}
          onChange={(e)=> setSearchMovie(e.target.value)}
          className=' shadow-md bg-gray-200 placeholder-gray-400 rounded-l-lg 
          px-2 py-2 w-80 outline-none border-2 border-gray-500 text-black ' 
        />
        <button
        onClick={fetchMovieData}
          className='bg-[#40407a] px-4 rounded-r-lg text-white shadow-md 
          border-b-2 border-r-2 border-t-2 border-gray-500 '>
          Search
        </button>
      </div>
    </div>
  )
}
SearchBar.propTypes = {
  searchMovie: PropTypes.string.isRequired,
  setSearchMovie: PropTypes.func.isRequired,
  fetchMovieData: PropTypes.func.isRequired,
}

export default SearchBar

// SearchBar.jsx is a functional component that takes in three props, searchMovie, setSearchMovie, and fetchMovieData. The component renders a search bar with a placeholder text and a search button. When the user types in the search bar and clicks the search button, the fetchMovieData function is called with the searchMovie value as the parameter. The component uses Tailwind CSS classes for styling.