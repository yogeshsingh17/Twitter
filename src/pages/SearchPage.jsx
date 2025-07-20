import { NavLink } from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import SettingsIcon from "../icons/SetingsIcon";
import style from './../CSS/SearchPage.module.css';
import { useState } from "react";
import Header from "../components/Header";

function SearchPage() {

    const tabs = [
        { id : "for-you", label: "For You"},
        { id : "trending", label: "Trending"},
        { id : "news", label: "News"},
        { id : "sports", label: "Sports"},
        { id : "entertainment", label: "Entertainment"}
    ]

    const dummyData = {
        "for-you" : ["For You 1", "For You 2", "For You 3"],
        "trending" : ["Trending 1", "Trending 2", "Trending 3"],
        "news" : ["News 1", "News 2", "News 3"],
        "sports" : ["Sports 1", "Sports 2", "Sports 3"],
        "entertainment" : ["Entertainment 1", "Entertainment 2", "Entertainment 3"]
    }

    const [activeTab, setActiveTab] = useState("for-you");

    return (
        <div className={style.searchPageBody}>
            <div className={style.headerContainer}>
                <Header />
            </div>
            <div className={style.searchPage}>
                <div>
                    <div className={style.searchPageTopBar}>
                        <div className={style.search}>
                            <div className={style.formOuterDiv}>
                                <div className={style.form}>
                                    <form action="#" role="search">
                                        <div className={style.searchBar}>
                                            <div className={style.searchInput}>
                                                <div className={style.searchIcon}>
                                                    <SearchIcon fill="none"/>
                                                </div>
                                                {/* <SearchIcon fill="none"/> */}
                                                <div className={style.searchTextArea}>
                                                    <input                                                 
                                                        type="text" 
                                                        placeholder="Search Twitter"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className={style.settingsIcon}>
                                <SettingsIcon backgroundColor="none" width="30" height="30" />
                            </div>
                        </div>
                        <div className={style.navigationLinks}>
                            {tabs.map((tab) => (
                                <div className={style.navLinkContainer} key={tab.id}>
                                    <button 
                                        className={`${style.navLink} ${activeTab === tab.id ? "active" : ""}`}
                                        onClick={() => setActiveTab(tab.id)}
                                        style={{
                                            borderBottom: activeTab === tab.id ? "2px solid white" : "2px solid transparent",
                                        }}
                                    >
                                        {tab.label}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Content */}
                    <div className={style.searchPageContentContainer}>
                        <div className={style.searchPageContent}>
                            <h3 className={style.searchPageContentHeading}>
                                {tabs.find(tab => tab.id === activeTab).label}      {/* find() searches the tabs array, it looks for the object that matches the id with the activeTab and returns the full object, then using .label we access the label property. */}
                            </h3>

                            <ul className={style.searchPageContentUl}>
                                {dummyData[activeTab].map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: "6px" }}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;