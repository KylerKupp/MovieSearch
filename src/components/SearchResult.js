import React from 'react'

function SearchResult(props) {
  return (
    <div className="result-container">
      <div className="flex-container">
        <div>
        <img src={props.Poster} alt="Movie Poster" className="poster"/>
        </div>
        <div className="right-info">
          <h2>{props.Title}</h2>
          <div className="rating">
            <img src="star-icon.png" alt="Star Icon"/>
            <h4>{props.imdbRating}</h4>
          </div>
          <div className="details">
            <span>{props.Rated}</span>
            <span>{props.Year}</span>
            <span>{props.Runtime}</span>
          </div>
          <div className="genre">
            {(props.Genre.split(",")).map(item => <div>{item}</div>)}
          </div>
        </div>
      </div>
      <div className="plot-and-cast">
        <h2>Plot: </h2>
        {props.Plot}
        <h2>Cast: </h2>
        {props.Actors}
      </div>
    </div>
  )
}

export default SearchResult