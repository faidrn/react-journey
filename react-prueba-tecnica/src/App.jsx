import { useState, useEffect } from 'react'
import { getRandomFact } from './services/facts'
import './App.css'

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    // Efecto para recuperar la cita al cargar la pagina
    useEffect(() => {
        getRandomFact().then(setFact)
    }, [])

    // Efecto para recuperar la imagen cada vez que cambie la cita
    useEffect(() => {
        if (!fact) return
        
        const threeFirstWords = fact.split(' ', 3).join(' ')

            fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
                .then(res => res.json())
                .then(response => {
                    const { url } = response
                    setImageUrl(url)
                })
    }, [fact])

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