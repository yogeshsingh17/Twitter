import NewMessageIcon from "../icons/NewMessageIcon";
import SettingsIcon from "../icons/SetingsIcon";
import './../CSS/MessagesPage.css';

function MessagesPage() {
  return (
    <>
        <div className="messages-page-top-bar">
            <div className="messages-page-top-bar-title">
                Messages
            </div>
            <div className="messages-page-top-bar-settings-icon">
                <div>
                    <SettingsIcon />
                </div>
                <div>
                    <NewMessageIcon />
                </div>
            </div>
        </div>
        <div className="messages-page-content">
            <div className="messages-page-content-heading">
                Welcome to your inbox!
            </div>
            <div className="message-page-content-description">
                Drop a line, share posts and more with private conversations between you and others on X.
            </div>
            <button className="messages-page-content-button">
                Write a message
            </button>
        </div>
    </>
  );
}

export default MessagesPage;