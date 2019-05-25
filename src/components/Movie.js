import React from 'react'

function Movie(props) {
    return (
        <div className="movie">
            <figure>
                <img src={props.cover} alt="Capa do FIlme"></img>
            </figure>
        </div>
    )
}

export default Movie