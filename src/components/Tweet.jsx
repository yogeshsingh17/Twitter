import { format } from 'timeago.js';
import './../CSS/Tweet.css'
import { useState } from 'react';
import DotIcon from '../icons/DotIcon';
import UserOptions from '../icons/UserOptions';
import Bookmark from '../icons/Bookmark';
import ShareButton from '../icons/ShareButton';

function Tweet( {tweetId, content, likeCount, commentsCount, repostCount, viewsCount, userName, onEdit} ){

    const time = format(Tweet.timeStamp);

    const [isEditing, setIsEditing] = useState(false);

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
                            {/* Dot svg between name and time inside tweet */}
                            <DotIcon />
                        </div>
                        <div className='time'>
                            {/* Time stamp to be added */}
                            {time}
                        </div>
                    </div>
                    {/* User options */}
                    <div className='user-options'>
                        <UserOptions />
                    </div>
                </div>
                <div>
                    <div className="twitter-content">
                        {/* {content} */}
                        {isEditing ? (  
                            <input 
                                type='text'
                                value={content} 
                                onChange={(e) => {
                                    onEdit({
                                        id : tweetId,
                                        content : e.target.value,
                                        likeCount,
                                        commentsCount,
                                        repostCount,
                                        viewsCount,
                                        userName,
                                        time : Tweet.timeStamp      // This is a placeholder for the time
                                        // This will be replaced with the actual time when the API is ready
                                    })
                                }}
                            /> 
                        ) : content }
                    </div>
                    <div>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            {isEditing ? 'Save' : 'Edit'}
                        </button>
                    </div>
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
                            <Bookmark />
                        </div>
                        <div className='share'>
                            <ShareButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tweet;