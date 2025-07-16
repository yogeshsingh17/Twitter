import { useState } from "react";
import '../CSS/SearchBar.css';

function SearchBar(){

    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            // You can navigate or call an API
            console.log("Search for:", query);
        }
    };

    return (
        <>
            <div className="search-bar">
                <div className="search-bar-container">
                    <form onSubmit={handleSearch} className="search-bar-form">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search Twitter"
                            className="search-input"
                            // className="w-full pl-12 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchBar;

// w-full max-w-xl relative