import TweetList from './TweetList'
import AddTweet from './AddTweet';
import './../CSS/Twitter.css';

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
    content : "What is up the tech community",
    likeCount : 4,
    commentsCount : 7,
    repostCount : 2
  },
  {
    id : 3,
    content : "We are building a new twitter",
    likeCount : 2,
    commentsCount : 5,
    repostCount : 3
  },
  {
    id : 4,
    content : "We are building a application",
    likeCount : 8,
    commentsCount : 3,
    repostCount : 4
  },
  {
    id : 5,
    content : "We are building a new frontend design",
    likeCount : 6,
    commentsCount : 2,
    repostCount : 1
  }
]

function Twitter(){
    return (
        <>
            <div className='heading'>Twitter</div>
            <div style={{width: "40vw"}}>
                <div>
                    <AddTweet />
                </div>
                <div>
                    <TweetList tweets={initialDummyTweets} />
                </div>
            </div>
        </>
    )
}

export default Twitter;