import { useState } from "react"
import './../CSS/ProfilePage.css';

const ProfilePage = () => {

    const [showModal, setSHowModal] = useState(false);

    const openModal = () => setSHowModal(true);
    const closeModal = () => setSHowModal(false);

    return (
        <div>
            <button onClick={openModal} className="edit-profile-button">
                Edit Profile
            </button>

            {showModal && (
                <div className="modal" onClick={closeModal}>
                    <div 
                        className="modal-inner-container" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-edit-profile-top-bar">
                            <button className="modal-back-button" onClick={closeModal}>
                                Back
                            </button>
                            <div className="modal-edit-profile-title">
                                Edit Profile
                            </div>
                            <button className="modal-save-button" type="submit">
                                Save
                            </button>
                        </div>
                        <div className="modal-edit-profile-content">
                            <div className="modal-user-details-header-image">
                                <img src="" alt="" />
                            </div>
                            <div className="modal-user-details-pofile">
                                <div className="modal-user-details-profile-image">
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className="modal-user-details-profile-container">
                                <form>
                                    <div className="modal-container">
                                        <label>
                                            <div className="modal-label-title">
                                                Name
                                            </div>
                                            <input type="text" placeholder="Enter Your name" />
                                        </label>
                                    </div>
                                    <div className="modal-container">
                                        <label>
                                            <div className="modal-label-title">
                                                Bio
                                            </div>
                                            <textarea placeholder="Enter Your Bio" />
                                        </label>
                                    </div>
                                    <div className="modal-container">
                                        <label>
                                            <div className="modal-label-title">
                                                Location
                                            </div>
                                            <input type="text" placeholder="Enter Your Location" />
                                        </label>
                                    </div>
                                    <div className="modal-container">
                                        <label>
                                            <div className="modal-date-label-title">
                                                Date of Birth
                                            </div>
                                            <input type="date" />
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfilePage;