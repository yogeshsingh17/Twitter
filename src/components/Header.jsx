import { NavLink } from "react-router-dom";
import AiIcon from "../icons/AiIcon";
import HomeIcon from "../icons/HomeIcon";
import MessageIcon from "../icons/MessageIcon";
// import MoreOptionsIcon from "../icons/MoreOptionsIcon";
import NewPostIcon from "../icons/NewPostIcon";
import NotificationIcon from "../icons/NotificationIcon";
import SearchIcon from "../icons/SearchIcon";
import TwitterIcon from "../icons/TwitterIcon";
import UserProfileIcon from "../icons/UserProfileIcon";
import './../CSS/Header.css'
import MoreOptions from "./MoreOptions";
// import NavLink from "react-router-dom";

function Header(){

    // const getActiveNavLinkClass = ({ isActive }) => isActive ? "icon-active" : "icon-inactive";

    return (
        <>
            <header className="twitter-header">
                <div className="twitter-header-outer-container">
                    <div className="twitter-header-inner-container">
                        <div className="twitter-logo">
                            <NavLink to="/" >
                                {/* Twitter icon */}
                                <TwitterIcon width="30" height="30" />
                            </NavLink>
                        </div>
                        <div className="twitter-header-icons">
                            <div className="twitter-header-icons-hover-effect">
                                <NavLink to="/" className="twitter-header-icons-hover-effect-navlink">
                                    {/* Home icon */}
                                    { ( {isActive} ) => <HomeIcon fill={isActive ? "white" : "none"} /> }
                                </NavLink>
                            </div>

                            <div className="twitter-header-icons-hover-effect">
                                <NavLink to="/search" className="twitter-header-icons-hover-effect-navlink">
                                    {/* Search icon */}
                                    { ( {isActive} ) => <SearchIcon fill={isActive ? "white" : "none"} />}
                                </NavLink>
                            </div>

                            <div className="twitter-header-icons-hover-effect">
                                <NavLink to="/notifications" className="twitter-header-icons-hover-effect-navlink">
                                    {/* Notifications icon */}
                                    { ( {isActive} ) => <NotificationIcon fill={isActive ? "white" : "none"} />}
                                </NavLink>
                            </div>

                            <div className="twitter-header-icons-hover-effect">
                                <NavLink to="/Messages" className="twitter-header-icons-hover-effect-navlink">
                                    {/* Messages icon */}
                                    { ( {isActive} ) => <MessageIcon fill={isActive ? "white" : "none"} />}
                                </NavLink>
                            </div>

                            <div className="twitter-header-icons-hover-effect">
                                <NavLink to="/AI" className="twitter-header-icons-hover-effect-navlink">
                                    {/* AI icon */}
                                    {/* <AiIcon width={30} height={30} /> */}
                                    { ( {isActive} ) => <AiIcon width={30} height={30} fill={isActive ? "black" : "white"} backgroundColor={isActive ? "white" : "none"} />}
                                </NavLink>
                            </div>

                            <div className="twitter-header-icons-hover-effect">
                                <NavLink to="/user-profile" className="twitter-header-icons-hover-effect-navlink">
                                    {/*User Profile icon */}
                                    {/* <UserProfileIcon /> */}
                                    { ( {isActive} ) => <UserProfileIcon fill={isActive ? "white" : "none"} /> }
                                </NavLink>
                            </div>

                            <div className="twitter-header-icons-hover-effect">
                                <div className="twitter-header-icons-hover-effect-new-post-icon">
                                    {/* More options icon */}
                                    <MoreOptions />
                                </div>
                            </div>

                            <div className="twitter-header-icons-hover-effect">
                                <NavLink to="/new-post" className="twitter-header-icons-hover-effect-navlink">
                                    {/* New Post icon */}
                                    <NewPostIcon />
                                </NavLink>
                            </div>
                        </div>
                        <div className="twitter-user-image-header">
                            <NavLink to="/logout-option">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="User Avatar" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;