import React from "react";
import { Search, Bell, PersonSquare, CaretDown } from 'react-bootstrap-icons';
import netflix from '../assets/netflix.svg'

const Nav = () => {
  return (
    <nav>
      <div className="navigation__links">
        <img src={netflix}></img>
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New&Popular</li>
          <li>My List</li>
        </ul>

      </div>

      <div className="nav__right">
        <Search />
       
        <a>Kids</a> 
        <Bell  />
        <div>
            <PersonSquare  /> 
            <CaretDown  />
        </div>
       </div>
    
 
    

    </nav>
  );
};

export default Nav;
