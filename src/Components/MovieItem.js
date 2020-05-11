import React from "react";
import "./movieitem.css";

const MovieItem = (props) => {
  return (
    <div className="movie-div">
      <h2>{props.title}</h2>
      <p>{props.year}</p>
      <p>{props.director}</p>
      <p>{props.duration}</p>
      <p>{props.rate} &#9734;</p>
      <ul>
        {props.genre.map((genre, i) => {
          return (
            <li key={i}>
              <div className="border">{genre}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieItem;
