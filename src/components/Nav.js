import React, { useState, useEffect } from "react";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import  './style/Header.css'

function Nav(props) {
  const [toggle, setToggle] = useState(true);
  const ToggleHandler = () => {
    setToggle(!toggle);
  };

  toggle===false ?  document.body.style.overflow='hidden' :  document.body.style.overflow='auto'

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 525) {
        setToggle(true);
      }
    })});

  const LinksHandler = () => {
    setToggle(true);
  };

  return (
    <nav  className='navBar' style={props.style}>
      <h1 className="logo">Crud App</h1>
      <span className="Nav_icon" onClick={ToggleHandler}>
        {toggle ? <GoThreeBars /> : <MdOutlineClose />}
      </span>
      <ul className={toggle ? "NavUl" : "NavUl_open"}>
      <Link to={`/`}  onClick={LinksHandler} className="NavLi NavLinks"><li>Home</li></Link>
           <Link onClick={LinksHandler} to={`/search`}  className="NavLi NavLinks"><li>Search</li></Link>
           <Link onClick={LinksHandler} to={`/update`}  className="NavLi NavLinks" title={props.disable && 'please search !'} style={props.disable ? {pointerEvents:'none'} : {pointerEvents:'auto'}} ><li>Update</li></Link>
           <Link onClick={LinksHandler} to={`/list`}  className="NavLi NavLinks" ><li>List</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;