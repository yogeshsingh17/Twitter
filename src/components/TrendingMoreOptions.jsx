import { useState } from "react";
import MoreOptionsIcon from "../icons/MoreOptionsIcon";
import { NavLink } from "react-router-dom";
import style from '../CSS/TrendingMoreOptions.module.css';
import SadSmileyIcon from "../icons/SadSmileIcon";

function TrendingMoreOptions(){

    const dropdownItems = [
        { path : "/lists", title : "The associated content is not relevant", icon : <SadSmileyIcon /> },
        { path : "/premium_sign_up" , title : "This trend is spam", icon : <SadSmileyIcon /> },
        { path: "/bookmarks", title: "This trend is abusive or harmful", icon: <SadSmileyIcon /> },
        { path: "/communities", title: "Not interested in this", icon: <SadSmileyIcon /> },
        { path: "/monetization", title: "This trend is a duplicate", icon: <SadSmileyIcon /> },
        { path: "/verified_orgs", title: "This trend is harmful or spammy", icon: <SadSmileyIcon /> },
    ]

    const [open, setOpen] = useState(false);

    const openOptionModal = () => setOpen(true);
    const closeOptionModal = () => setOpen(false);

    return (
        <>
            <div className={style.trendingMoreOptions}>
                <div className={style.moreOptionsContentContainer}>
                    <div 
                        className={style.moreOptionsContentTitle} 
                        onClick={openOptionModal}
                    >
                        <MoreOptionsIcon stroke="transparent" />
                    </div>
                    {open && (
                        <div 
                            className={style.moreOptionsDropdownContainer} 
                            onClick={closeOptionModal}
                        >
                            <div 
                                className={style.moreOptionsDropdown} 
                                onClick={(e) => e.stopPropagation()}
                            >
                                {dropdownItems.map(( {path , title, icon}, idx ) => (
                                    <div className={style.moreOptionsDropdownContent} key={idx}>
                                        <NavLink to={path} className={style.dropdownItemContainer}>
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
        </>
    )
}

export default TrendingMoreOptions;