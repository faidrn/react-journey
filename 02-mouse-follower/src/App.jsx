import { useEffect, useState } from 'react'


const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false) // Activar y desactivar el efecto de la bolita en el puntero
  const [position, setPosition] = useState({ x: 0, y: 0 }) // Posición de la bolita

  useEffect(() => {
    // el useEffect ayuda a controlar cuando se renderiza un efecto, no se hace siempre en el render, solo cuando se necesita
    // puedo usar useEffect para aplicar un cambio cadda vez que hago click
    console.log('efecto ', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('mouse move', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Limpiar el efecto cuando se desactiva o cuando el componente se desmonta
    // En la consola del navegador getEventListeners(window) ayuda a ver cuando effects se han suscrito al elemento window
    // detectanddo así cuando un elemento se esta suscribiendo y no esta limpiando las suscripciones, lo que puede causar problemas de memoria y rendimiento
    // esto solo funcioone en chrome
    return () => {
      // cleanup: remover el event listener cuando se desactiva el efecto o cuando el componente se desmonta o cuando cambian las
      // dependencias antes de ejecutar o cuando hay un efecto nuevo se ejecuta el cleanup del efecto anterior
      // esto es importante para evitar fugas de memoria y comportamientos inesperados
      console.log('cleanup ')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <main>
        <div 
          style={{
            position: 'absolute',
            backgroundColor: '#09f',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} seguir puntero
        </button>
      </main>
    </>
  )
}


function App() {
  const [mounted, setMounted] = useState(true)
  
return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse component
      </button>
    </main>
  )
  

  
}

export default App
