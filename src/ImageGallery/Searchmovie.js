import React, { useState } from "react";

function Searchmovie() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  function changeHandler(e) {
    setSearch(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=263d22d8 `)
    .then((response) => response.json()
    .then((value) => setData(value.Search))
    );
  }
  return (
    <>
      <div className="container text-center">
        <form onSubmit={submitHandler}>
            <h1 className="text-center fw-bolder">Movie Searching App</h1>
          <input className="form-control" type="text" onChange={changeHandler} value={search} />
          <button className="btn btn-primary mt-2" type="submit">search</button> 
        </form>
        <div className="row mt-3">
          {data.map((movie) => (
            <div className="col-md-4 mt-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  alt={movie.Title}
                />
                <div className="card-body">
                  <h4 className="card-title">{movie.Title} </h4>
                  <a href={movie.Poster} className="btn btn-primary" download>
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Searchmovie;
