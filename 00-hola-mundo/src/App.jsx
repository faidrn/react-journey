import './App.css'
import TwitterFollowCard from './TwitterFollowCard'


export default function App() {

    const kikobeats = { isFollowing: true, userName: 'kikobeats' }

    return (
        <section className="App">
            <TwitterFollowCard {...kikobeats}> {/*Utilizando el operador de propagación (rest operator) para pasar propiedades*/}
                Kikobeats Kikobeats
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="pheralb" 
                isFollowing={false} 
            >
                Pablo Hidalgo
            </TwitterFollowCard>

        </section>
    )
}