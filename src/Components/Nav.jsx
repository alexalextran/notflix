import React, { useRef } from "react";
import { Search, Bell, PersonSquare, CaretDown } from 'react-bootstrap-icons';
import netflix from '../assets/netflix.svg'
import useToggle from "../CustomHooks/useToggle";

const Nav = (e) => {
  const [value, toggleValue] = useToggle(true);
  const search = useRef( document.getElementById('search'))

  
 
 
  const searchbar = () => {
      toggleValue()
  
   if(value == true){
    search.current.style.opacity= '1'
     search.current.style.width= '80%'
     search.current.style.paddingRight= '10%'
     search.current.focus()
   }
   else{
  
    search.current.style.width= '1.3em'
    search.current.style.paddingRight= '1.3em'
    search.current.style.opacity= '0'
   }
     
  }



  return (
    <nav >
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
        
      <div className="search__contain">
        <Search id="search__button"  onClick={searchbar}/>
        <input type="text" id="search"  ref={search}  placeholder=""/>
      </div>

       
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
