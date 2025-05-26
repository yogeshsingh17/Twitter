import { useState } from "react";
import Header from "../components/Header";
import BackArrowIcon from "../icons/BackButtonIcon";
import BalloonIcon from "../icons/BalloonIcon";
import TwitterBlueTick from "../icons/BlueTick";
import CalendarIcon from "../icons/CalenderIcon";
import LocationIcon from "../icons/LocationIcon";
import './../CSS/UserProfile.css'
import ProfilePage from "../components/ProfilePage";
function UserProfile(){

    // const handleBackButtonClick = () => {
    //     // Logic to navigate back to the previous page
    //     window.history.back();
    // }

    const userProfileTabs = [
        { id : "posts", label : "Posts" },
        { id : "replies", label : "Replies" },
        { id : "highlights", label : "Highlights" },
        { id : "articles", label : "Articles" },
        { id : "media", label : "Media" },
        { id : "likes", label : "Likes" }
    ]

    const userProfileDummyData = {
        "posts" : ["Post 1", "Post 2", "Post 3"],
        "replies" : ["Reply 1", "Reply 2", "Reply 3"],
        "highlights" : ["Highlight 1", "Highlight 2", "Highlight 3"],
        "articles" : ["Article 1", "Article 2", "Article 3"],
        "media" : ["Media 1", "Media 2", "Media 3"],
        "likes" : ["Like 1", "Like 2", "Like 3"]
    }

    const [activeTab, setActiveTab] = useState("posts");

    return (
        <div className="user-profile-body">
            <div style={{width : "15vw", border : "1px solid white", margin: "0", padding : "0"}}>
                <Header />
            </div>
            <div style={{width : "50vw", border : "1px solid white"}}>
                <div className="top-bar-backButton-userName">
                    <div className="backButton">
                        <BackArrowIcon />
                    </div>
                    <div className="top-bar-user-name">
                        User Name
                    </div>
                </div>
                <div className="user-details">
                    <div className="user-details-header-image">
                        <img src="" alt="" />
                    </div>
                    <div className="user-details-profile-container">
                        <div className="user-details-pofile">
                            <div className="user-details-profile-image">
                                <img src="" alt="" />
                            </div>
                            <div className="empty-div"></div>
                            <div className="user-details-button">
                                <ProfilePage />
                            </div>
                        </div>
                        <div className="name-container">
                            <div className="name">
                                User Name
                            </div>
                            <button className="twitter-verification-tick">
                                <TwitterBlueTick />
                                <div className="get-verified">
                                    Get verified
                                </div>
                            </button>
                        </div>
                        <div className="user-name">
                            user_name
                        </div>
                        <div className="user-sub-details">
                            <div className="user-location">
                                <LocationIcon />
                                <div className="user-city">
                                    city, country
                                </div>
                            </div>
                            <div className="user-date-of-birth">
                                <BalloonIcon />
                                <div>
                                    Born
                                </div>
                                <div>
                                    DD/MM/YYYY
                                </div>
                            </div>
                            <div className="user-joining-details">
                                <CalendarIcon />
                                <div>
                                    Joined DD/MM/YYYY   
                                </div>
                            </div>
                        </div>
                        <div className="user-followers-details">
                            <div className="user-following">
                                <div style={{fontWeight : "bold"}}>
                                    123 {/* Api integration need to be done */}
                                </div>
                                <div style={{color: "rgb(255, 255, 255, 0.5)"}}>
                                    Following
                                </div>
                            </div>
                            <div className="user-followers">
                                <div style={{fontWeight : "bold"}}>
                                    10 {/* Api integration need to be done */}
                                </div>
                                <div style={{color: "rgb(255, 255, 255, 0.5)"}}>
                                    Followers
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-profile-tabs-container">
                        {userProfileTabs.map((userProfileTab) => (
                            <div className="user-profile-tabs" key={userProfileTab.id}>
                                <button
                                    className={`user-profile-tab ${activeTab === userProfileTab.id ? "active" : ""}}`}
                                    onClick={() => setActiveTab(userProfileTab.id)}
                                    style={{
                                        borderBottom: activeTab === userProfileTab.id ? "2px solid white" : "none",
                                    }}
                                >
                                    {userProfileTab.label}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="user-profile-tab-content">
                        <h3 className="user-profile-tab-content-heading">
                            {userProfileTabs.find(userProfileTab => userProfileTab.id === activeTab).label} {/* find() searches the userProfileTabs array, it looks for the object that matches the id with the activeTab and returns the full object, then using .label we access the label property. */}
                        </h3>

                        <ul className="user-profile-tab-content-list">
                            {userProfileDummyData[activeTab].map((userProfileTab, idx) => (
                                <li 
                                    key={idx}
                                    style={{ marginBottom: "6px" }}
                                >
                                    {userProfileTab}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;