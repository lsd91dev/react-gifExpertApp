import React from 'react' 
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


// useEffect permite ejecutar código bajo unas condiciones que nosotros establezcamos

// recibimos la categoría del gif que el usuario desea buscar
export const GifGrid = ( { category }) => {
 
    // En la desestructuración podemos renombrar los elementos utilizando :nuevo_nombre
    const {data:images, loading} = useFetchGifs( category );
    
    return (
        <>
        <h3> { category }</h3>

        
        { /* Es como un operador ternario pero sin necesidad de especificar un null cuando sea : */ loading && <p> Cargando... </p> } 
        {  <div className="card-grid">
                { images.map(img => {
                    return <GifGridItem key={ img.id } {...img } /> // cuando mandas un objeto a un componente, también se puede utilizar el operador Spread, de manera que se envíen de una manera más sintética. Es decir: en vez de enviarse como: img{ img: { dato, dato, dato }}} se envían como img { dato, dato, dato }
                })}
            </div>  }
        </>
    )
} // Cuando se importe en otro componente, hará falta escribirlo entre llaves: { } porque se exporta no por default sino directamente y parece ser que afecta
