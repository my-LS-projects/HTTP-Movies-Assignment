import React, { useState, useEffect } from 'react'
import axios from 'axios'

const initialMovie = {
    title: '',
    director: '',
    metascore: 0,
    stars: []
}

export const UpdateMovieForm = props => {

    const [ movie, setMovie ] = useState(initialMovie)
    
    const handleChanges = e => {
        console.log('NAME: ', e.target.name, 'VALUE: ', e.target.value)
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        console.log(e.target)
        axios
        .put('/', 'data here')
        .then(response => console.log(response.data))
        .catch(error => console.log(error.response))
    }

    return (
        <div className='update-movie-form'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' placeholder='Title' onChange={handleChanges} value={movie.title}></input>
                <input type='text'name='director' placeholder='Director' onChange={handleChanges} value={movie.director}></input>
                <input type='number' name='metascore' placeholder='Metascore (number)' onChange={handleChanges} value={movie.metascore}></input>
                <input type='text' name='stars' placeholder='Stars' onChange={handleChanges} value={movie.stars}></input>
                <button type='submit' className='submit-update'>Update</button>
            </form>
        </div>
    )
}