import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const UpdateMovieForm = props => {
    
    const initialMovie = {
        title: '',
        director: '',
        metascore: 0,
        stars: [],
        id: props.match.params.id
    }
    
    const [ movie, setMovie ] = useState(initialMovie)
    const [ stars, setStars ] = useState([])
    const [ current, setCurrent ] = useState('')

    console.log("PROPS MOVIES: ", props.match.params.id)
    

    const handleChanges = e => {
        console.log(movie)
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .put(`http://localhost:5000/api/movies/${props.match.params.id}`, movie)
        .then(response => props.history.push('/'))
        .catch(error => console.log(error.response))
        
    }

    return (
        <div className='update-movie-form'>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type='text' name='title' placeholder='Title' onChange={handleChanges} value={movie.title}></input>
                <input type='text'name='director' placeholder='Director' onChange={handleChanges} value={movie.director}></input>
                <input type='number' name='metascore' placeholder='Metascore (number)' onChange={handleChanges} value={movie.metascore}></input>
                {/* <input type='text' name='stars' placeholder='Stars' onChange={handleChanges} value={movie.stars}></input> */}
                <button type='submit' className='submit-update'>Update</button>
            </form>
        </div>
    )
}