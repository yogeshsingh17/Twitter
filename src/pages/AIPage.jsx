import AdvancedSettingsIcon from "../icons/AdvancedSettingIcon";
import AiIcon from "../icons/AiIcon";
import AttachDocumentIcon from "../icons/AttachDocumentIcon";
import DeepSearchIcon from "../icons/DeepSearchIcon";
import DropdownIcon from "../icons/DropDownIcon";
import EditPenIcon from "../icons/EditPenIcon";
import FocusModeIcon from "../icons/FocusModeIcon";
import ReplayIcon from "../icons/ReplayIcon";
import ThinkingIcon from "../icons/ThinkingIcon";
import UpwardArrowIcon from "../icons/UpwardArrowIcon";
import "../CSS/AIPage.css";
import Header from "../components/Header";

function AIPage() {
  return (
    <div className="ai-page">
        <div className="header" style={{width : "15vw"}}>
            <Header/>
        </div>
        <div className="main" style={{width : "50vw"}}>
            <div className="messages-page-top-bar">
                <div className="messages-page-top-bar-focus-mode">
                    <FocusModeIcon />
                </div>
                <div className="messages-page-top-bar-grok-3">
                    <div className="messages-page-top-bar-grok-3-text">
                        Grok 3
                    </div>
                    <DropdownIcon />
                </div>
                <div className="messages-page-top-bar-history">
                    <ReplayIcon />
                    <div className="messages-page-top-bar-history-text">
                        History
                    </div>
                </div>
            </div> 
            <div className="ai-content-container">
                <div className="ai-icon-text-container">
                    <div className="ai-icon">
                        <AiIcon width="70" height="70" backgroundColor="transparent" fill="white" />
                    </div>
                    <div className="ai-icon-text">
                        Grok
                    </div>
                </div>
                <div className="input-text-container">
                    <div className="input-text">
                        <input 
                            type="text" 
                            placeholder="Ask Anything"
                        />
                    </div>
                    <div className="input-container-options-container">
                        <div className="input-container-options">
                            <div className="attach-documents">
                                <AttachDocumentIcon />
                            </div>
                            <div className="deepSearch">
                                <div className="deepSearch-icon-text">
                                    <DeepSearchIcon />
                                    <div className="deepSearch-text">
                                        DeepSearch
                                    </div>
                                </div>
                                <DropdownIcon />
                            </div>
                            <div className="thinking">
                                <ThinkingIcon />
                                <div className="thinking-text">
                                    Think
                                </div>
                            </div>
                            <div className="edit">
                                <EditPenIcon />
                                <div className="edit-pen-text">
                                    Edit Image
                                </div>
                            </div>
                        </div>
                        <div className="advanced-settings">
                            <div className="advanced-settings-icon">
                                <AdvancedSettingsIcon />
                            </div>
                            <div className="advanced-settings-text">
                                <div className="advanced-settings-text-boundary">
                                    <UpwardArrowIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grok-3-available">
                Grok 3 is here.
            </div>
            <div className="grok-3-features-list">
                Try our new features: DeepSearch, Think, and Edit Image
            </div>
            <div className="grok-3-features-list-description-container">
                <div className="grok-3-features-list-description-container-card">
                    <div className="grok-3-features-list-description-container-card-heading">
                        <DeepSearchIcon />
                        <div>
                            DeepSearch
                        </div>
                    </div>
                    <div className="grok-3-features-list-description-container-card-description">
                        Search deeply to deliver detailed, well-reasoned answers with Grok’s rapid, agentic search.
                    </div>
                </div>
                <div className="grok-3-features-list-description-container-card">
                    <div className="grok-3-features-list-description-container-card-heading">
                        <ThinkingIcon />
                        <div>
                            Think
                        </div>
                    </div>
                    <div className="grok-3-features-list-description-container-card-description">
                        Solve the hardest problems in math, science, and coding with our reasoning model.
                    </div>
                </div>
                <div className="grok-3-features-list-description-container-card">
                    <div className="grok-3-features-list-description-container-card-heading">
                        <EditPenIcon />
                        <div>
                            Edit Image
                        </div>
                    </div>
                    <div className="grok-3-features-list-description-container-card-description">
                        Transform your images with style transfers, edits, and more.
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AIPage;