import React from 'react';
import MenuList from '../menu-list';
import AppHeader from "../app-header";

const MainPage = () => {
    return (
        <div className="app">
            <AppHeader total={30}/>
            <MenuList />
        </div>

    )
}

export default MainPage;
