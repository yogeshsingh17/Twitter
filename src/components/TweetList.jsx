import Tweet from "./Tweet";
import './../CSS/TweetList.css';
import { memo } from "react";

const MemoisedTweet = memo(Tweet);

function TweetList( {tweets, onEditTweet} ){
    return (
        <ul className="tweet-list">
            {
                tweets.map((tweet) => (
                    <li key={tweet.id}>
                        <MemoisedTweet 
                            tweetId={tweet.id}
                            userName={tweet.userName}
                            content={tweet.content} 
                            likeCount={tweet.likeCount} 
                            commentsCount={tweet.commentsCount}
                            repostCount={tweet.repostCount}
                            viewsCount={tweet.viewsCount}
                            time ={tweet.time}
                            onEdit={onEditTweet}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default TweetList;