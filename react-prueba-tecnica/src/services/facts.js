const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// Opción 1
// Ambas opciones son validas, pero la opción 2 es más moderna y limpia, 
// ya que utiliza async/await en lugar de promesas encadenadas.
/*export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            return fact

        })
}*/

// Opción 2: asincronismo
export const getRandomFact = async () => {
    const res =  await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}