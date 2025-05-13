import { format } from 'timeago.js';
import './../CSS/Tweet.css'

function Tweet( {content, likeCount, commentsCount, repostCount, viewsCount, userName} ){

    const time = format(Tweet.timeStamp);

    return (
        <>
            <div className='tweet-wrapper'>
                <div className='twitter-user'>
                    {/* user image, name and timestamp */}
                    <div className='user-image'>
                        <div className='twitter-user-image'>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                        </div>
                        <div className='user-name'>
                            {userName}
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="5"
                                height="5"
                                fill="currentColor"
                                viewBox="0 0 8 8"
                            >
                                <circle cx="4" cy="4" r="3" />
                            </svg>
                        </div>
                        <div className='time'>
                            {/* Time stamp to be added */}
                            {time}
                        </div>
                    </div>
                    {/* User options */}
                    <div className='user-options'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="5" r="2" />
                            <circle cx="12" cy="12" r="2" />
                            <circle cx="12" cy="19" r="2" />
                        </svg>
                    </div>
                </div>
                <div className="twitter-content">
                    {content}
                </div>
                <div className='twitter-actions'>
                    <div className='twitter-actions-icons'>
                        <div className='comments'>
                            {commentsCount} comments
                        </div>
                        <div className='repost'>
                            {repostCount} repost
                        </div>
                        <div className="likes">
                            {likeCount} likes
                        </div>
                        <div className='views'>
                            {viewsCount} views
                        </div>
                    </div>
                    <div className='twitter-actions-svg'>
                        <div className='bookmark'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="feather feather-bookmark">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </div>
                        <div className='share'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tweet;