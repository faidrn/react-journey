import { useState, useEffect } from 'react'

// Los custom hooks se crean para encapsular la logica de los efectos y el estado, y asi poder reutilizarla en otros componentes. 
// y se crean usando la palabra "use" al inicio del nombre del hook, para que React sepa que es un hook y pueda aplicar las 
// reglas de los hooks.
export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

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

    return { imageUrl }
}