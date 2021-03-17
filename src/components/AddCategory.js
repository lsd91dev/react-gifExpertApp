import React, {useState } from 'react'
import PropTypes from 'prop-types';


// Recuerda: desfragmentar los argumentos que te llegan por props
const AddCategory = ({ setCategories }) => {
    const [ inputValue, setInputValue ] = useState(''); // no debe de quedarse useSate() porque entonces lo registra como undefined. 

    const handleInput = (e) => {
        setInputValue( e.target.value );
    }

    // Otra solución puede ser mandar las categorías desde el GifExpertApp (esa fue la que hice yo) como una property del componente
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.length !== 0){
            // coloca el nuevo valor al final del array: setCategories ((categories) => [... categories, inputValue])
            // solución Udemy

            // lo coloca al principio
            setCategories( (categories) => [inputValue, ...categories]) 
        }
        

    }
 // Si tenemos un único elemento web que agrupa todos los elementos de nuestro componente, no necesitamos el Fragment
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInput}id="text"></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired // para indicar que un properties debe de ser una función, se especifica así
}

export default AddCategory // Cuando se importe, no hace falta poner { } porque en el export default se exporta solo UNO
