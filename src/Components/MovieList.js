import React from 'react';
import movies from './MovieData';
import MovieItem from './MovieItem';
import './movielist.css';

const data = movies.map(x => <MovieItem title={x.title} year={x.year} director={x.director} duration={x.duration} rate={x.rate} genre={x.genre} key={x} />)

const MovieList = () => {
    return (
        <section className="movie-style">
            {data}
        </section>
    );
}

export default MovieList;