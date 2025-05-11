import './../CSS/Tweet.css'

function Tweet( {content, likeCount} ){
    return (
        <>
            <div className="twitter-content">
                {content}
            </div>
            <div className="likes">
                {likeCount} Likes
            </div>
        </>
    )
}

export default Tweet;