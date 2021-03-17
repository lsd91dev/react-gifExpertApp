// Esto es un custom hook

import { useState, useEffect } from 'react';
import { getGifs } from '../services/getGifs';

export const useFetchGifs = ( category ) => {

    const [ state, setState ] = useState({
        data: [],
        loading: true
    }) 
    // useEffect recibe una función, que es la que yo quiero ejecutar.
    useEffect( () => {
        // getGifs(category, setImages); mi solución
        getGifs ( category ).then( imgs => {
            setTimeout( () => {
                console.log(imgs)
                setState({
                    data: imgs,
                    loading: false
                })
            },1500)
        })

    }, [category]) // [ ] indica las condiciones bajo las cuales se dispare nuestra función. Si está vacío, es que solo se dispara una vez (cuando el componente es renderizado por primera vez)


    return state; // state es { data: [ ], loading: true }
}