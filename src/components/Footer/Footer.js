import React from 'react';
import './Footer.css';
import icon2 from '../../Assets/img/icon2.png'
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        <div className="top-container">
            <div className="contant">
                <div className="left-box">
                    <div className="box">
                        <div className="detail">
                            <h3>+1</h3>
                            <p>year experience</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="detail">
                            <h3>+125</h3>
                            <p>client worldwide</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="detail">
                            <h3>+80</h3>
                            <p>total projects</p>
                        </div>
                    </div>
                </div>
                <div className="right-box">
                    <img src={icon2} alt="icon2" />
                    <div className="contant">
                        <div className="detail">
                            <h2>Let's work <span>Together</span></h2>
                        </div>
                        <div className="icon">
                            <AiOutlineDoubleRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-container">
            <div className="container">
                <h2>My Portfolio</h2>
                <div className="nav">
                    <ul>
                        <li><Link to="/" className='link'>Home</Link></li>
                        <li><Link to="/about" className='link'>About</Link></li>
                        <li><Link to="/work" className='link'>Work</Link></li>
                        <li><Link to="/contact" className='link'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer