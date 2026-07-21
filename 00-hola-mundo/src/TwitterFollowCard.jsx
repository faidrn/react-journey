export default function TwitterFollowCard({ children, userName, isFollowing }) {
    const imageSrc = `https://unavatar.io/github/${userName}`


    return (
        <article
            className="tw-followCard"
        >
            <header 
                className="tw-followCard-header"
            >
                <img 
                    className="tw-followCard-avatar"
                    src={imageSrc} 
                    alt={`El avatar de ${userName}`} 
                />
                <div
                    className="tw-followCard-info"
                >
                    <strong>{children}</strong>
                    <span
                        className="tw-followCard-infoUserName"
                    >
                        @{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">Seguir</button>
            </aside>
        </article>
    )
}