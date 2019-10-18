import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import { UpdateMovieForm } from './Movies/UpdateMovieForm'
import axios from 'axios'

const App = () => {
  const [ savedList, setSavedList ] = useState([]);
  const [ movies, setMovies ] = useState([])

  useEffect(() => {
    axios
    .get("http://localhost:5000/api/movies")
    .then(res => setMovies( res.data ))
    .catch(err => console.log(err.response));
  }, [])


  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  // if (movies.length === 0){
  //   return <h1>akjlsdfjlasdjklfasldjkfjklsad</h1>
  // }
  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" render={props => <MovieList movies={movies}/>} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path='/update-movie/:id' render={props => <UpdateMovieForm {...props} movies={movies}/> } />
    </>
  );
};

export default App;
