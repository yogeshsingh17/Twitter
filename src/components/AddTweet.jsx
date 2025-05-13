import AiIcon from '../icons/AiIcon';
import EmojiIcon from '../icons/EmojiIcon';
import GalleryIcon from '../icons/GalleryIcon';
import GifIcon from '../icons/GifIcon';
import LocationIcon from '../icons/LocationIcon';
import PollIcon from '../icons/PollIcon';
import ScheduleIcon from '../icons/ScheduleIcon';
import './../CSS/AddTweet.css'

function AddTweet(){
    return(
        <div className="add-tweet">
            <div className='add-tweet-user-image'>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
            </div>
            <div className='add-tweet-content'>
                <div className='add-tweet-wrapper'>
                    <form>
                        <input type="text" placeholder="What's happening?" />
                    </form>
                </div>
                <div className='add-tweet-actions'>
                    <div className='add-tweet-actions-icons'>
                        {/* Gallery icon */}
                        <GalleryIcon />

                        {/* GIF icon */}
                        <GifIcon />

                        {/* AI icon */}
                        <AiIcon />

                        {/* Poll icon */}
                        <PollIcon />

                        {/* Emoji icon */}
                        <EmojiIcon />

                        {/* Schedule icon */}
                        <ScheduleIcon />

                        {/* Location icon */}
                        <LocationIcon />

                    </div>
                    <div className='add-tweet-actions-submit-button'>
                        <button type="submit">Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTweet;