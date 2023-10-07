import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
  return (
    <>
    <div className="nav-container">
        <div className="logo">
            <h2>My Portfolio</h2>
        </div>
        <div className="links">
            <ul>
                <li>
                    <Link to='/home' className='link'>Home</Link>
                    <Link to='/about' className='link'>About</Link>
                    <Link to='/work' className='link'>Work</Link>
                    <Link to='/contact' className='link'>Contact</Link>
                </li>
            </ul>
        </div>
        <div className="btn">
            <Link to='/contact' className='btnlink'>Let's talk</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar