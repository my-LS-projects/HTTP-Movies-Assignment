import React, { useState, useEffect } from 'react'


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
    }

    return (
        <div className='update-movie-form'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' placeholder='Title'></input>
                <input type='text'name='director' placeholder='Director'></input>
                <input type='number' name='metascore' placeholder='Metascore (number)' ></input>
                <input type='text' name='stars' placeholder='Stars' ></input>
                <button type='submit' className='submit-update'>Update</button>
            </form>
        </div>
    )
}