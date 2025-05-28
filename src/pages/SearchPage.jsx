import { NavLink } from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import SettingsIcon from "../icons/SetingsIcon";
import './../CSS/SearchPage.css';
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
        <div className="search-page-body">
            <div className="header-container">
                <Header />
            </div>
            <div className="search-page">
                <div>
                    <div className="search-page-top-bar">
                        <div className="search">
                            <div className="form-outer-div">
                                <div className="form">
                                    <form action="#" role="search">
                                        <div className="search-bar">
                                            <div className="search-input">
                                                <SearchIcon fill="none"/>
                                                <input                                                 
                                                    type="text" 
                                                    placeholder="Search Twitter"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="settings-icon">
                                <SettingsIcon backgroundColor="none" width="30" height="30" />
                            </div>
                        </div>
                        <div className="navigation-links">
                            {tabs.map((tab) => (
                                <div className="nav-link-container" key={tab.id}>
                                    <button 
                                        className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                                        onClick={() => setActiveTab(tab.id)}
                                        style={{
                                            borderBottom: activeTab === tab.id ? "2px solid white" : "none",
                                        }}
                                    >
                                        {tab.label}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Content */}
                    <div className="search-page-content-container">
                        <div className="search-page-content">
                            <h3 className="search-page-content-heading">
                                {tabs.find(tab => tab.id === activeTab).label}      {/* find() searches the tabs array, it looks for the object that matches the id with the activeTab and returns the full object, then using .label we access the label property. */}
                            </h3>

                            <ul>
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