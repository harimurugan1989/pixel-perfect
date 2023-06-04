import { useState, useEffect } from "react";
import React from 'react';
import logo from '../assets/img/reverfinal.png';
import { Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

export const Navbaar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState();
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  // useEffect(()=> {
  //   document.title = activeLink ? `${activeLink} | Pixel Perfect` : "Pixel Perfect"

  // },[activeLink])
  
  return (
    <nav class={scrolled ? "navbar fixed-top scrolled" : "navbar fixed-top"}>
      <div class="container-fluid">
        <Link to="/"><a class="navbar-brand" ><img src={logo} style={{ width: '220px', height: '40px' }} alt="Logo" /></a></Link> 
        <div className="nav-options">

          {/* <Nav className="ms-auto">
            <NavLink to="conferences" className='nav-link navbar-link' onClick={() => onUpdateActiveLink('Events')}>Events</NavLink>
            <NavLink to="sponsors" className='nav-link navbar-link' onClick={() => onUpdateActiveLink('Sponsors')}>Sponsors</NavLink>
            <NavLink to="gallery" className='nav-link navbar-link' onClick={() => onUpdateActiveLink('Gallery')}>Gallery</NavLink>
            <NavLink to="team" className='nav-link navbar-link' onClick={() => onUpdateActiveLink('Team')}>Our Team</NavLink>
            <NavLink to="getinvolve" className='nav-link navbar-link' onClick={() => onUpdateActiveLink('Get Involved')}>Get Involved</NavLink>
          </Nav> */}
        </div>
      </div>
    </nav>
  )
}
