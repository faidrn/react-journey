import { useState } from 'react'
import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const users = [
    {
        userName: 'kikobeats',
        name: 'kikobeats kikobeats',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hidalgo',
        isFollowing: false
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hernandez',
        isFollowing: false
    }
]


export default function App() {

    return (
        <section className="App">
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}