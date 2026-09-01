import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

// CADA VEZ QUE VEA UN useEffect EN UN COMPONENTE DE REACT, PENSAR EN UN CUSTOM HOOK, YA QUE ESTOS TIENEN CARGA DE LOGICA QUE SE 
// PUEDE REUTILIZAR EN OTROS COMPONENTES Y LOS CUSTOM HOOKS SON FUNCIONES 
// QUE NOS PERMITEN REUTILIZAR LOGICA DE ESTADO Y EFECTOS EN COMPONENTES DE REACT.
// ------------------------------------------------------------------------------- //
// DEBES PREGUNTARTE SI ESTE useEffect PUEDE SER REUTILIZADO EN OTROS COMPONENTES, //
// SI ES ASI, CREAR UN CUSTOM HOOK PARA ELLO.                                      //
// ------------------------------------------------------------------------------- //


export function App () {
    const { fact, refreshFact } = useCatFact()  // Llamamos al custom hook para obtener la cita del gato
    const { imageUrl } = useCatImage({ fact })  // Llamamos al custom hook para obtener la imagen del gato a partir de la cita
    

    const handleClick = async () => {
        refreshFact()
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