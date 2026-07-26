import { useState } from 'react'
import './App.css'
import TwitterFollowCard from './TwitterFollowCard'


export default function App() {
    const [name, setName] = useState('kikobeats')

    return (
        <section className="App">
            <TwitterFollowCard 
                userName={name}
                initialIsFollowing={true}
            >
                Kikobeats Kikobeats
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="pheralb"
            >
                Pablo Hidalgo
            </TwitterFollowCard>

            <button
                onClick={() => setName('pedromichel')}
            >
                Cambio de nombre
            </button>

        </section>
    )
}