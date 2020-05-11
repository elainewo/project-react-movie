// import React from 'react';
import React, { Component } from "react";
import movies from "./MovieData";
import MovieItem from "./MovieItem";
import "./movielist.css";

// const data = movies.map(x => <MovieItem title={x.title} year={x.year} director={x.director} duration={x.duration} rate={x.rate} genre={x.genre} key={x} />)
// const MovieList = () => {
//     return (
//         <main>
//             <button>test</button>
//             <button>test</button>
//             <button>test</button>

//             <section className="movie-style">
//                 {data}
//             </section>
//         </main>
//     );
// }

// export default MovieList;

class MovieList extends Component {
  state = {
    movieDataState: movies,
  };
  handleSortAZ = () => {
    const sortedArray = this.state.movieDataState.sort((a, b) => {
      let eltA = a.title.toUpperCase();
      let eltB = b.title.toUpperCase();
      if (eltA < eltB) {
        return -1;
      } else if (eltA > eltB) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({ movieDataState: sortedArray });
  };
  handleSortZA = () => {
    const sortedArray = this.state.movieDataState.sort((a, b) => {
      let eltA = a.title.toUpperCase();
      let eltB = b.title.toUpperCase();
      if (eltA < eltB) {
        return 1;
      } else if (eltA > eltB) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ movieDataState: sortedArray });
  };
  handleSortDateAs = () => {
    const sortedArray = this.state.movieDataState.sort((a, b) => {
      let eltA = a.year.toUpperCase();
      let eltB = b.year.toUpperCase();
      if (eltA < eltB) {
        return -1;
      } else if (eltA > eltB) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({ movieDataState: sortedArray });
  };
  handleSortDateDes = () => {
    const sortedArray = this.state.movieDataState.sort((a, b) => {
      let eltA = a.year.toUpperCase();
      let eltB = b.year.toUpperCase();
      if (eltA < eltB) {
        return 1;
      } else if (eltA > eltB) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ movieDataState: sortedArray });
  };
  handleSortRate = () => {
    const sortedArray = this.state.movieDataState.sort((a, b) => {
      let eltA = a.rate.toUpperCase();
      let eltB = b.rate.toUpperCase();
      if (eltA < eltB) {
        return 1;
      } else if (eltA > eltB) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ movieDataState: sortedArray });
  };
  sortByAction = () => {
    const filter = this.state.movieDataState.filter((movie) => {
      // return movie.genre.indexOf("Action") !== -1
      return movie.genre.includes("Action");
    });
    this.setState({ movieDataState: filter });
  };
  render() {
    const data = this.state.movieDataState.map((x, i) => (
      <MovieItem
        title={x.title}
        year={x.year}
        director={x.director}
        duration={x.duration}
        rate={x.rate}
        genre={x.genre}
        key={i}
      />
    ));
    return (
      <main>
        <button onClick={this.handleSortDateAs}> Sort by Date Ascending</button>
        <button onClick={this.handleSortDateDes}>
          Sort by Date Descending
        </button>
        <button onClick={this.handleSortRate}>Best Rate</button>
        <button onClick={this.handleSortAZ}>A-Z</button>
        <button onClick={this.handleSortZA}>Z-A</button>
        <button onClick={this.sortByAction}>Filter: include "Action"</button>
        <section className="movie-style">{data}</section>
      </main>
    );
  }
}

export default MovieList;
