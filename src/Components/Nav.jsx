import React, { useRef } from "react";
import { Search, Bell, PersonSquare } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import netflix from '../assets/netflix.svg'
import { useAuth } from "../Contexts/AuthContext";
import useToggle from "../CustomHooks/useToggle";

const Nav = () => {
  const [value, toggleValue] = useToggle(true);
  const search = useRef( document.getElementById('search'))
  const { logout } = useAuth()
  const navigate = useNavigate()
  
 
 
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

  async function handleLogout(){
    try{
      await logout()
      navigate("/");
    }catch(e){
      console.log(e)
      window.alert("Failed to logout!")
    }
  }

  var myNav = document.getElementsByTagName('nav');
  window.onscroll = function () { 
    
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ){
          myNav[0].classList.add("nav-colored");
          myNav[0].classList.remove("nav-transparent");
         
      } 
      else {
          myNav[0].classList.add("nav-transparent");
          myNav[0].classList.remove("nav-colored");
      }
  };



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
        <PersonSquare  /> 
            
        <a onClick={handleLogout}>Log Out</a>
       </div>
    
 
    

    </nav>
  );
};

export default Nav;
