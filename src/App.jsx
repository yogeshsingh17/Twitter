import './App.css'
import TweetList from './components/TweetList'

// Dummy data for initial tweets
// This data will be replaced with the data from the API 
// when the API is ready
// This data is used to test the UI
const initialDummyTweets = [
  {
    id : 0,
    content : "We have a new twitter called as threads",
    likeCount : 3
  },
  {
    id : 1,
    content : "What should we post",
    likeCount : 5
  },
  {
    id : 2,
    content : "What is up the tech community",
    likeCount : 4
  },
  {
    id : 3,
    content : "We are building a new twitter",
    likeCount : 2
  },
  {
    id : 4,
    content : "We are building a application",
    likeCount : 8
  },
  {
    id : 5,
    content : "We are building a new frontend design",
    likeCount : 6
  }
]

function App() {
  return (
    <>
      <div>Twitter</div>
      <TweetList tweets={initialDummyTweets} />
    </>
  )
}

export default App
