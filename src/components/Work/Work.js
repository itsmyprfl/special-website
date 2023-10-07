import React from 'react';
import "./Work.css";
import project1 from "../../Assets/img/project1.jpeg";
import project2 from "../../Assets/img/project2.jpeg";
import star from "../../Assets/img/star-2.png";
import project3 from "../../Assets/img/project3.jpeg";
import project4 from "../../Assets/img/project4.jpeg";
import project5 from "../../Assets/img/project5.jpeg";
import project6 from "../../Assets/img/project6.jpeg";
 
function Work() {
  return (
    <>
    <div className="work">
      <div className="container">
        <div className="left">
          <div className="content">
            <div className="box">
              <div className="img-box">
                <img src={project1} alt="project2" />
              </div>
              <p>web design</p>
              <h3>dynamic</h3>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={project2} alt="project2" />
              </div>
              <p>photography</p>
              <h3>disel h1</h3>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="heading">
            <img src={star} alt="star" />
            <h2>all projects</h2>
            <img src={star} alt="star" />
          </div>
          <div className="contant">
            <div className="box">
              <div className="img-box">
                <img src={project3} alt="project3" />
              </div>
              <p>mobile designing</p>
              <h3>seven studio</h3>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={project4} alt="project4" />
              </div>
              <p>mobile designing</p>
              <h3>seven studio</h3>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={project5} alt="project5" />
              </div>
              <p>mobile designing</p>
              <h3>seven studio</h3>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={project6} alt="project6" />
              </div>
              <p>mobile designing</p>
              <h3>seven studio</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Work