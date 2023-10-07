import React from 'react';
import './About.css';
import me2 from "../../Assets/img/me.jpg";
import star2 from "../../Assets/img/star-2.png";
import icon2 from "../../Assets/img/icon2.png";

function About() {
  return (
    <>
    <div className="about">
      <div className="container">
        <div className="top-container">
          <div className="left-box">
            <div className="content">
              <div className="img-box">
                <img src={me2} alt="me2" />
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="content">
              <div className="heading">
                <img src={star2} alt="" />
                <h2>self summary</h2>
                <img src={star2} alt="" />
              </div>
              <div className="detail">
                <img src={icon2} alt="" />
                <div className="info">
                  <h3>Nurlibek xujakulov</h3>
                  <p>I am a San francisco-based product designer with a focus on web design, illustration, a <br /> visual development. 
                     I have a diverse range of experience having worked across various <br /> fields and industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
         </div>
        <div className='mid-container'>
                <div className='main'>
                    <div className='experience'>
                        <h2>experience</h2>
                        <div className='box'>
                            <p>2007-2017</p>
                            <h3>Layout Designer</h3>
                            <p>Bluebase Designs</p>
                        </div>
                        <div className='box'>
                            <p>2017-2023</p>
                            <h3>Front-End Developer</h3>
                            <p>Larsen & Toubro</p>
                        </div>
                    </div>
                    <div className='education'>
                        <h2>education</h2>
                        <div className='box'>
                            <p>2022 - 2023</p>
                            <h3>Frontend Devoloper</h3>
                            <p>ASTRUM IT Academy</p>
                        </div>
                        <div className='box'>
                            <p>2022 - 2023</p>
                            <h3>Frontend Devoloper</h3>
                            <p>FINTECH HUB</p>
                        </div>
                    </div>
                </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default About;