    // Aquí haremos las peticiones http 

    // en mi solución recibo setImages y lo añado
    export const getGifs = async (category) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category) }&api_key=8pyHN7FvL8QLGvPP22arDUrB1LGfjV3T&limit=10`;

        const response = await fetch( url );
        const { data } = await response.json(); // desestructuración

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url // si añadimos un signo de '?' en el objeto, esclarecemos que es opcional, así que si es null / undefined, no nos la dará
            }
        })

        return gifs

    }