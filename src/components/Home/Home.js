import React from 'react';
import me from '../../Assets/img/me2.jpg';
import sign from '../../Assets/img/sign.png';
import myworks from '../../Assets/img/my-works.png';
import gfonts from '../../Assets/img/gfonts.png';
import './Home.css';
import { Link } from 'react-router-dom';
import {AiOutlineDoubleRight, AiOutlineDribbble, AiOutlineTwitter, AiOutlineHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si'

function Home () {
  return (
    // <>
    <div className="home">
      <div className="top-container">
        <div className="left-container">
         <div className="img-container">
          <div className="img-box">
            <img src={me} alt="me" />
          </div>
         </div>
         <Link to='/about' className='link'>
          <div className="detail-container">
            <h4>Front-End Devoloper</h4>
            <h3>Nurlibek Xujakulov</h3>
            <p>I am a Tashkent Front-End Devoloper</p>
          </div>
          <div className="icon">
            <AiOutlineDoubleRight/>
          </div>
          </Link>
        </div>
        <div className="right-container">
          <div className="content">
            <div className="top-box">
              <p>latest works and featured</p>
            </div>
            <div className="bottom-box">
              <div className="box">
                <div className="img-box">
                  <img src={sign} alt="sign" />
                </div>
                <Link to='/about' className='link'>
                 <div className="detail">
                  <div className="info">
                    <p>more about me</p>
                    <h3>credentials</h3>
                  </div>
                  <div className="icon">
                   <AiOutlineDoubleRight/>
                   </div>
                 </div>
                </Link>
              </div>
              <div className="box">
                <div className="img-box">
                  <img src={myworks} alt="work" />
                </div>
                <Link to='/work' className='link'>
                 <div className="detail">
                  <div className="info">
                    <p>showcase</p>
                    <h3>projects</h3>
                  </div>
                  <div className="icon">
                   <AiOutlineDoubleRight/>
                   </div>
                 </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mid-container">
        <div className="content">
          <div className="box">
            <div className="img-box">
              <img src={gfonts} alt="fonts" />
            </div>
            <Link to='/blog' className='link'>
            <div className="detail">
              <div className="info">
              <p>blog</p>
              <h3>fonts</h3>
             </div>
              <div className="icon">
               <AiOutlineDoubleRight/>
             </div>
            </div>
            </Link>
          </div>
          <div className="box2">
            <div className="img-box">
              <div className="img-container">
                <AiOutlineHtml5/>
                <SiTailwindcss/>
                <IoLogoJavascript/>
                <FaReact/>
              </div>
            </div>
            <Link to='/services' className='link'>
             <div className="detail">
              <div className="info">
              <p>specialiazation</p>
              <h3>service offering</h3>
             </div>
              <div className="icon">
               <AiOutlineDoubleRight/>
             </div>
             </div>
            </Link>
          </div>
          <div className="box3">
            <div className="img-box">
              <div className="img-container">
                <div className="img">
                <AiOutlineDribbble/>
                </div>
                <div className="img">
                <AiOutlineTwitter/>
                </div>
              </div>
            </div>
            <Link to='/contact' className='link'>
            <div className="detail">
              <div className="info">
              <p>stay with me</p>
              <h3>profiles</h3>
             </div>
              <div className="icon">
               <AiOutlineDoubleRight/>
             </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // </>
  )
}

export default Home;