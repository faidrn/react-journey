import './App.css'
import TwitterFollowCard from './TwitterFollowCard'


export default function App() {
    const formattedUserName = <span>@midudev</span>

    return (
        <section className="App">
            <TwitterFollowCard 
                formattedUserName={formattedUserName} 
                userName="kikobeats" 
                name="Kikobeats Kikobeats" 
                isFollowing={false} 
            />

            <TwitterFollowCard 
                formattedUserName={formattedUserName} 
                userName="pheralb" 
                name="Pablo Hidalgo" 
                isFollowing={false} 
            />

            <TwitterFollowCard 
                formattedUserName={formattedUserName} 
                userName="elonmusk" 
                name="Elon Musk" 
                isFollowing={false} 
            />
            <TwitterFollowCard 
                formattedUserName={formattedUserName} 
                userName="midudev" 
                name="Miguel Ángel Durán" 
                isFollowing={true} 
            />
        </section>
    )
}