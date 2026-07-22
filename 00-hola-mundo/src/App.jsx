import './App.css'
import TwitterFollowCard from './TwitterFollowCard'


export default function App() {

    return (
        <section className="App">
            <TwitterFollowCard userName="kikobeats"
            >
                Kikobeats Kikobeats
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="pheralb"
            >
                Pablo Hidalgo
            </TwitterFollowCard>

        </section>
    )
}