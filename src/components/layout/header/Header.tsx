import React, { FC } from 'react';
import SearchBar from './SearchBar'
import '../../../App.scss'
import Nontification from './Nontification/Nontification';

const Header: FC = () => {
  return <div className="header">
    <div className="header-wrap">
      <div className="header-first-flex">
        <h1 className="logo">CURSACH</h1>
        <SearchBar />
        <Nontification/>
      </div>
      <div className="header-second-flex">
        Flex second
      </div>

    </div>
  </div>;
};

export default Header;
