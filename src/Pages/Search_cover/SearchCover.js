import React, { useState } from 'react';
import "./SearchCover.css"

const SearchCover = () => {
    const [searchText,setSearchTest] = useState([]);
    const searchFood = (e) =>{
        setSearchTest(e.target.value)
    }
    return (
        <div className='cover-container'>
            <div className='background-image'>
                <div className='title'>
                    <h3>Best Foods are Waiting for Your Belly</h3>

                </div>
                <form className='search_bar'>
                    <input type="text" name="search"/>
                    <button onChange={searchFood} type="Search">Search</button>
                </form>
            </div>
        </div>
      
    );
};

export default SearchCover;