import React, {useState} from 'react'
import {GifGrid} from './components/GifGrid';
import AddCategory from './components/AddCategory';


export const GifExpertApp = () => {

    // const categories = ['One punch', 'Samurai X', 'Dragon Ball']
    const [ categories, setCategories ] = useState(['One punch']);

    /*
    const handleAdd = () => {
        // [... X, ] se llama Operador Spread
        setCategories( [... categories, 'Shokugeki no Soma']) // se añade al final
        // setCategories ( 'Shokugeki no Soma', [ ...categories]); // se añade al principio

    }
    */

    return (
        <>
            <h2> GifExpertApp </h2>
            <hr />
            <AddCategory setCategories={ setCategories } />
            <ol>
                {
                    categories.map( 
                    (category) => 
                    /* {
                    // imprime un elemento <li></li>  por cada elemento en el array
                    return <li key={ category }> { category } </li>
                    }) // Nota: no podemos usar el index como key del li porque si se elimina el elemento, el index quedaría como la key pero sin ese elemento adscrito y está mal */
               
                        <GifGrid key={ category } category= { category } />
                    )
                }
               
            </ol>
        </>
    )
}

export default GifExpertApp;
