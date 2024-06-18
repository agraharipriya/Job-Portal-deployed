import React,{useState} from 'react'
import '../navComponents/About.css'; 
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Aboutpage from './Aboutpage';
const AboutUs = () => {

  return (
    <>
    <div className='about-box'>

    <div className="about-main">
      <div className="about-left">
        <p style={{fontSize:"2rem",fontWeight:400}}>Your brands starts here</p>
        <p style={{fontSize:"1.5rem",fontWeight:400}}>Authentic reviews, rich storytelling and powerful insights, found only on Glassdoor, help you attract top talent.</p>
        <Link to="/Aboutpage"><button className='about-btn'  style={{  color:"white"}}>Get Started</button></Link>
      </div>
      <div className="about-right">
        <img src="https://www.glassdoor.com/employers/app/uploads/sites/2/2023/07/illustration_home_your-employer-brand-large.png" alt="" />
      </div>
    </div>
 
    <div className="about-content">
      <div className="about-up">
        <p  className='about-text1'>Ready to join the conversation that's shaping your employer brand?</p>
        <p className='about-text2'>Go beyond reviews and boost talent acquisition with an active, compelling presence on NSG</p>
      </div>

      <div className="about-down">
        <div className="about-card">
          <img src="https://www.glassdoor.com/employers/app/uploads/sites/2/2023/07/icon-promote.svg" alt="" />
        <p   className='about-text2'> Reach engaged, quality talent</p>
         <p   className='about-text3'>The majority of NSG users are job seekers actively looking for a new job.1</p>
        </div>

        <div className="about-card">
        <img src="https://www.glassdoor.com/employers/app/uploads/sites/2/2023/07/icon-magnet.svg" alt="" />
         <p className='about-text2'>Influence candidates with your authentic brand story</p>
         <p   className='about-text3'>3 out of 4 users are more likely to apply to an open job if the employer is active on NSG 11</p>
        </div>

        <div className="about-card">
<img src="https://www.glassdoor.com/employers/app/uploads/sites/2/2023/07/icon-analytics.svg" alt="" />
         <p  className='about-text2'>Listen for actionable insights</p>
         <p  className='about-text3'>Monitor brand analytics and reporting to drive improvements in the employee experience.</p>
        </div>
      </div>
    </div>
 

   <div className="about-contact-container">
     <div className='about-contact'><h1>Contact Us</h1>
      <p>For queries ,feedback and assistance</p>
      </div>
      <div className="about-chat">
        <h2>Email </h2>
        <FaEnvelope />info@thenawal.org
      </div>
      <div className="about-call">
        <h2>Call </h2>
        <FaPhone/>+918989106010
        {/* <p>Phone: <a href="tel:+1234567890">+1234567890</a></p> */}
      </div>
     </div>
    </div>
    
    </>
    

  )
}

export default AboutUs