import React from 'react';
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import icon2 from "../../Assets/img/icon2.png"

function Contact() {
  return (
    <>
    <div className="contact">
      <div className="container">
        <div className="left-box">
          <h3>contact info</h3>
          <div className="info">
            <div className="box">
              <div className="icon">
                <HiOutlineMail/>
              </div>
              <div className="detail">
                <h4>mail us</h4>
                <p>example@.com</p>
                <p>example@.com</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <BsTelephoneInbound/>
              </div>
              <div className="detail">
                <h4>contact us</h4>
                <p>+998(97) 033-99-55</p>
                <p>+998(97) 033-99-55</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FiMapPin/>
              </div>
              <div className="detail">
                <h4>location</h4>
                <p>TTZ, Mirzo-Ulug'bek street, Tashkent city</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-box">
          <img src={icon2} alt="" />
          <h2>Let's work <span>together</span></h2>
          <form action="">
            <input type="text" placeholder='Name*' />
            <input type="text" placeholder='E-mail*' />
            <input type="text" placeholder='Subject*' />
            <textarea placeholder='Message*'></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact