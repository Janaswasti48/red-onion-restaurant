import React, { useEffect, useState } from 'react';
import SearchCover from './SearchCover';

const SearchCovers = () => {
    const [searchText,setSearchTest] = useState([]);
    const [searchMeal,setSearchMeal] = useState([]);
    useEffect(()=>{
        fetch('mealdb.json')
        .then(res => res.json())
        .then(data => setSearchMeal(data))
    },[searchText])

    return (
        <div>
            <SearchCover></SearchCover>
            <h1>Hello from SearchCovers</h1>   
            <h4>Meal = {searchMeal.length}</h4>     
            
        </div>
    );
};

export default SearchCovers;