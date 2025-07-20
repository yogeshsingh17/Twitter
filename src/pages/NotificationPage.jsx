import { useState } from "react";
import SettingsIcon from "../icons/SetingsIcon";
import './../CSS/NotificationPage.css';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import TrendingList from "../components/TrendingList";

function NotificationPage(){

    const notificationTabs = [
        { id : "all", label: "All"},
        { id : "verified", label: "Verified"},
        { id : "mentions", label: "Mentions"}
    ]

    const [activeNotificationTab, setActiveNotificationTab] = useState("all");

    const dummyNotificationData = {
        "all" : ["All Notification 1", "All Notification 2", "All Notification 3"],
        "verified" : ["Verified Notification 1", "Verified Notification 2", "Verified Notification 3"],
        "mentions" : ["Mentions Notification 1", "Mentions Notification 2", "Mentions Notification 3"]
    }

    return (
        <div className="notification-page-body">
            <div className="header-container">
                <Header />
            </div>
            <div className="notification-page">
                <div className="notification-page-top-bar">
                    <div className="notification-page-top-bar-title">
                        Notifications
                    </div>
                    <div className="notification-page-top-bar-settings-icon">
                        <SettingsIcon backgroundColor="transparent" width="24" height="24" />
                    </div>
                </div>
                <div className="notification-page-tabs-container">
                    {notificationTabs.map((notificationTab) => (
                        <div className="notification-page-tabs" key={notificationTab.id}>
                            <div>
                                <button
                                    className={`notification-page-tab ${activeNotificationTab === notificationTab.id ? "active" : ""}`}
                                    onClick={() => setActiveNotificationTab(notificationTab.id)}
                                    style={{
                                        borderBottom: activeNotificationTab === notificationTab.id ? "2px solid white" : "none",
                                    }}
                                >
                                    {notificationTab.label}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="notification-page-content-container">
                    <div className="notification-page-content">
                        <h3 className="search-page-content-heading">
                            {notificationTabs.find(tab => tab.id === activeNotificationTab).label}
                        </h3>

                        <ul>
                            {dummyNotificationData[activeNotificationTab].map((notificationTab, idx) => (
                                <li key={idx}>
                                    {notificationTab}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right-side-bar">
                <div className="right-side-bar__search-bar">
                    <SearchBar />
                </div>
                <div className="right-side-bar__trending">
                    <span className="right-side-bar__trending">
                        What's happening
                    </span>
                    <div>
                        <TrendingList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationPage;