import React from 'react';
import "./SearchCover.css"

const SearchCover = () => {
    
    return (
        <div className='cover-container'>
            <div className='background-image'>
                <div className='title'>
                    <h3>Best Foods are Waiting for Your Belly</h3>

                </div>
                <form className='search_bar'>
                    <input type="text" name="search"/>
                    <button type="Search">Search</button>
                </form>
            </div>
        </div>
      
    );
};

export default SearchCover;