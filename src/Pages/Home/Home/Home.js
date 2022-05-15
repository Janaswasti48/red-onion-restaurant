import React from 'react';
import MainHeader from '../../Main_Header/MainHeader';
import SearchCover from '../../Search_cover/SearchCover';
import Footer from '../../Shared/Footer/Footer';
import Breakfasts from '../Breakfast/Breakfasts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <SearchCover></SearchCover>
            <Breakfasts></Breakfasts>
            <Services></Services>
            <Footer></Footer>
        </div>

    );
};

export default Home;