import Header from "../components/Header";
import BackArrowIcon from "../icons/BackButtonIcon";
import SearchIcon from "../icons/SearchIcon";
import './../CSS/Lists.css'

function Lists(){
    return (
        <div className="list-page-body">
            <div className="header-container">
                <Header />
            </div>
            <div className="list-page">
                <div className="list-page-top-bar">
                    <button className="back-button">
                        <BackArrowIcon />
                    </button>
                    <div className="search-bar">
                        <SearchIcon fill="transparent" />
                        <div className="search-input">
                            <input type="text" />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Lists;