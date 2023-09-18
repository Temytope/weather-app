import React from "react";

function SearchForm({ searchText, setSearchText, onSubmit }) {
    const handleInputChange = (event) => {
        setSearchText(event.target.value)
    };

    return (
        <div className="search-form">
            <input 
            type="text"
            value={searchText}
            onChange={handleInputChange}/>
            <button type="submit" onClick={onSubmit}>Search</button>
        </div>
    );
};

export default SearchForm;