import TweetList from './TweetList'
import AddTweet from './AddTweet';
import './../CSS/Twitter.css';
import Header from './Header';
import { memo, useCallback, useState } from 'react';
import { Routes } from 'react-router-dom';

// Dummy data for initial tweets
// This data will be replaced with the data from the API 
// when the API is ready
// This data is used to test the UI 
const initialDummyTweets = [
  {
    id : 0,
    userName : "Elon Musk",
    content : "We have a new twitter called as threads",
    commentsCount : 2,
    repostCount : 1,
    likeCount : 3,
    viewsCount : 100,
  },
  {
    id : 1,
    userName : "Yogesh Singh",
    content : "What should we post",
    likeCount : 5,
    commentsCount : 1,
    repostCount : 5
  },
  {
    id : 2,
    // userName : {userName},
    content : "What is up the tech community",
    likeCount : 4,
    commentsCount : 7,
    repostCount : 2
  },
  {
    id : 3,
    // userName : {userName},
    content : "We are building a new twitter",
    likeCount : 2,
    commentsCount : 5,
    repostCount : 3
  },
  {
    id : 4,
    // userName : {userName},
    content : "We are building a application",
    likeCount : 8,
    commentsCount : 3,
    repostCount : 4
  },
  {
    id : 5,
    // userName : {userName},
    content : "We are building a new frontend design",
    likeCount : 6,
    commentsCount : 2,
    repostCount : 1
  }
]

const MemoisedAddTweets = memo(AddTweet);

function Twitter(){

    const [tweets, setTweets] = useState(initialDummyTweets);

    // const [userName, setUserName] = useState("");

    let nextId = (tweets.length > 0) ? tweets[tweets.length-1].id + 1 : 0;

    const handleAddTweet = useCallback((text) => {
        setTweets([...tweets, {
            id : nextId,
            // userName: {setUserName},
            content: text,
            commentsCount: Math.floor(Math.random() * 10),
            repostCount: Math.floor(Math.random() * 10),
            likeCount: Math.floor(Math.random() * 10),
            viewsCount: Math.floor(Math.random() * 100),
        }])
    }, [tweets, nextId]);

    const handleEditTweet = useCallback((tweet) => {        //This incoming tweet is the updated tweet. // Here we are going to get a whole new tweet object with the same id as the one we are going to update.
        setTweets(
            tweets.map((currentTweet) => {              //tweets.map() is used to iterate over the tweets array and return a new array with the updated tweet.
                if(currentTweet.id === tweet.id){       // If the current tweet id is equal to the tweet id we are going to update, then return the updated tweet.
                    return tweet;
                }else{                                  // Else return the current tweet.
                    return currentTweet;
                }
            })
        )
    }, [tweets]);

    return (
        <>
            {/* <div className='heading'>Twitter</div> */}
            <div className='twitter-home-page'>
                <div style={{width: "15vw", border: "1px solid white"}}>
                    <Header />
                </div>
                <div style={{width: "50vw", border: "1px solid white"}}>
                    <div>
                        <MemoisedAddTweets onAddTweet = {handleAddTweet} />
                    </div>
                    <div>
                        <TweetList tweets={tweets} onEditTweet = {handleEditTweet}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Twitter;