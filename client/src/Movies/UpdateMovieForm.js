import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const UpdateMovieForm = props => {
    // console.log('PROPS',props)
    const initialMovie = {
        title: '',
        director: '',
        metascore: 0,
        stars: [],
        id: props.match.params.id
    }
    const [ movie, setMovie ] = useState(initialMovie)

    useEffect(() => {
        axios(`http://localhost:5000/api/movies/${props.match.params.id}`)
        .then(response => setMovie({...movie,
            stars:response.data.stars}))
        .catch(err => console.log(err))
    }, [])
    
    const handleChanges = e => {
        console.log('NAME: ', e.target.name, 'VALUE: ', e.target.value)
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        console.log(movie)
        e.preventDefault()
        axios
        .put(`http://localhost:5000/api/movies/${props.match.params.id}`, movie)
        .then(response => props.history.push('/'))
        .catch(error => console.log(error.response))
    }

    return (
        <div className='update-movie-form'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' placeholder='Title' onChange={handleChanges} value={movie.title}></input>
                <input type='text'name='director' placeholder='Director' onChange={handleChanges} value={movie.director}></input>
                <input type='number' name='metascore' placeholder='Metascore (number)' onChange={handleChanges} value={movie.metascore}></input>
                {/* <input type='text' name='stars' placeholder='Stars' onChange={handleChanges} value={movie.stars}></input> */}
                <button type='submit' className='submit-update'>Update</button>
            </form>
        </div>
    )
}