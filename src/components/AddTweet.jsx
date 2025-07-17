import { useState } from 'react';
import AiIcon from '../icons/AiIcon';
import EmojiIcon from '../icons/EmojiIcon';
import GalleryIcon from '../icons/GalleryIcon';
import GifIcon from '../icons/GifIcon';
import LocationIcon from '../icons/LocationIcon';
import PollIcon from '../icons/PollIcon';
import ScheduleIcon from '../icons/ScheduleIcon';
import './../CSS/AddTweet.css'

function AddTweet({ onAddTweet }) {

    const [text, setText] = useState("");

    return(
        <div className="add-tweet">
            <div className='add-tweet-user-image'>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
            </div>
            <div className='add-tweet-content'>
                <div className='add-tweet-wrapper'>
                    <form>
                        <textarea 
                            className="tweet-textarea"
                            type="text" 
                            placeholder="What's happening?" 
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value)
                                e.target.style.height = 'auto'; // Reset height to shrink if needed
                                e.target.style.height = `${e.target.scrollHeight}px`; // Set new height
                            }}
                        />
                    </form>
                </div>
                <div className='add-tweet-actions'>
                    <div className='add-tweet-actions__icons'>
                        {/* Gallery icon */}
                        <span className='add-tweet-actions__icons-icon'><GalleryIcon /></span>

                        {/* GIF icon */}
                        <span className='add-tweet-actions__icons-icon'><GifIcon /></span>

                        {/* AI icon */}
                        <span className='add-tweet-actions__icons-icon'><AiIcon width={22} height={20} backgroundColor="white" fill="white"/></span>

                        {/* Poll icon */}
                        <span className='add-tweet-actions__icons-icon'><PollIcon /></span>

                        {/* Emoji icon */}
                        <span className='add-tweet-actions__icons-icon'><EmojiIcon /></span>

                        {/* Schedule icon */}
                        <span className='add-tweet-actions__icons-icon'><ScheduleIcon /></span>

                        {/* Location icon */}
                        <span className='add-tweet-actions__icons-icon'><LocationIcon /></span>

                    </div>
                    <div className='add-tweet-actions-submit-buttons'>
                        <button 
                            className='add-tweet-actions-submit-buttons__button'
                            type="submit"
                            onClick={() => {
                                onAddTweet(text);
                                setText("");
                            }}
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTweet;