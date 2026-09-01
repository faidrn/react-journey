import { useState, useEffect } from 'react'
import { useCatImage } from './hooks/useCatImage'
import { getRandomFact } from './services/facts'
import './App.css'

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`




export function App () {
    const [fact, setFact] = useState()
    const { imageUrl } = useCatImage({ fact })  // Llamamos al custom hook para obtener la imagen del gato a partir de la cita

    // Efecto para recuperar la cita al cargar la pagina
    useEffect(() => {
        getRandomFact().then(newFact => setFact(newFact))
    }, [])

    

    const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return (
        <main>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words of the fact: ${fact}`} />}
        </main>
    )
}