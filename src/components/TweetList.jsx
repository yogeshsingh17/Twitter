import Tweet from "./Tweet";
import './../CSS/TweetList.css';

function TweetList( {tweets} ){
    return (
        <ul className="tweet-list">
            {
                tweets.map((tweet) => (
                    <>
                        <li>
                            <Tweet 
                                userName={tweet.userName}
                                content={tweet.content} 
                                likeCount={tweet.likeCount} 
                                commentsCount={tweet.commentsCount}
                                repostCount={tweet.repostCount}
                                viewsCount={tweet.viewsCount}
                            />
                        </li>
                    </>
                ))
            }
        </ul>
    )
}

export default TweetList;