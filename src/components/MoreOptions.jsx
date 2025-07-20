import { useState } from "react";
import './../CSS/MoreOptions.css';
import MoreOptionsIcon from "../icons/MoreOptionsIcon";
import { NavLink } from "react-router-dom";
import BookIcon from "../icons/BookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import Bookmark from "../icons/Bookmark";
import UsersIcon from "../icons/UserIcon";
import MonetizationIcon from "../icons/MonetizationIcon";
import FlashIcon from "../icons/FlashIcon";
import ShareIcon from "../icons/ShareIcon";
import JobIcon from "../icons/JobIcon";
import MicIcon from "../icons/MicIcon";
import SettingsIcon from "../icons/SetingsIcon";

function MoreOptions(){

    const dropdownItems = [
        { path : "/lists", title : "Lists", icon : <BookIcon /> },
        { path : "/premium_sign_up" , title : "Premium", icon : <TwitterIcon width="24" height="24"/> },
        { path: "/bookmarks", title: "Bookmarks", icon: <Bookmark /> },
        { path: "/communities", title: "Communities", icon: <UsersIcon /> },
        { path: "/monetization", title: "Monetization", icon: <MonetizationIcon /> },
        { path: "/verified_orgs", title: "Verified Orgs", icon: <FlashIcon /> },
        { path: "/ads", title: "Ads", icon: <ShareIcon /> },
        { path: "/jobs", title: "Jobs", icon: <JobIcon /> },
        { path: "/create_your_space", title: "Create your space", icon: <MicIcon /> },
        { path: "/settings_and_privacy", title: "Settings and privacy", icon: <SettingsIcon width="24" height="24" /> }
    ]

    const [open, setOpen] = useState(false);

    const openOptionModal = () => setOpen(true);
    const closeOptionModal = () => setOpen(false);

    return (
        <div className="more-options">
            {/* <div><MoreOptionsIcon /></div> */}
            <div className="more-options-content-container">
                <div className="more-options-content-title" onClick={openOptionModal}>
                    <MoreOptionsIcon stroke="white" />
                </div>
                {open && (
                    <div className="more-options-dropdown-container" onClick={closeOptionModal}>
                        <div className="more-options-dropdown" onClick={(e) => e.stopPropagation()}>
                            {dropdownItems.map(( {path , title, icon}, idx ) => (
                                <div className="more-options-dropdown-content" key={idx}>
                                    <NavLink to={path} className="dropdown-item-container">
                                        {icon}
                                        <div className="dropdown-item-title">
                                            {title}
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MoreOptions;