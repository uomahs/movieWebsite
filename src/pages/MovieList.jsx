import '../App.css';
import React from 'react';
import MoviePoster from '../components/MoviePoster';
import { MovieListContainer } from '../components/style-component';

const MovieList = ({ movies }) => {  // props로 movies 받기
  return (
    <div>
      <MovieListContainer>
        {movies.map((movie) => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </MovieListContainer>
    </div>
  );
};

export default MovieList;
