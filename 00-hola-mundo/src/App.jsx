import './App.css'


export default function App() {
    return (
        <article
            className="tw-followCard"
        >
            <header 
                className="tw-followCard-header"
            >
                <img 
                    className="tw-followCard-avatar"
                    src="https://unavatar.io/github/kikobeats" 
                    alt="El avatar de kikobeats" 
                />
                <div
                    className="tw-followCard-info"
                >
                    <strong>Kikobeats</strong>
                    <span
                        className="tw-followCard-infoUserName"
                    >
                        @kikobeats
                    </span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">Seguir</button>
            </aside>
        </article>
    )
}