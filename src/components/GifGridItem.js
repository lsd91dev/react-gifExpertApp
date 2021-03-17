import React from 'react'

// ...y  como aquí recibimos el objeto img mandado mediante el operador Spread, podemos volver a desestructurarlo:

export const GifGridItem = ( {id, title, url} ) => {
    return (
        <div className="card animate__animated animate__fadeIn animate__faster">
            <img src={ url } alt={ title }/>
            <small> { title }</small>
        </div>
    )
}
