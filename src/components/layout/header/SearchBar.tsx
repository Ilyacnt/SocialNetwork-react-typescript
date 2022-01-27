import React, { FC } from 'react';
import '../../../App.scss'
import { ReactComponent as SearchIcon } from '../../../images/svg/searchOutline.svg'


const SearchBar: FC = () => {
    return <div className='search-bar'>
        <SearchIcon className='search-bar-svg' />
        <input type="search" className='search-bar-input' placeholder="Поиск" />
    </div>;
};

export default SearchBar;
