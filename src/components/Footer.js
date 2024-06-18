// Footer.js

import React,{useState} from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitch, FaTwitter } from 'react-icons/fa';

const Footer = () => {


    return (
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                  <a href="/job-seekers">Job Seekers</a>
                    <ul>
                        <li>Find a Job</li>
                        <li>Submit Your CV</li>
                        <li>Areas of Expertise</li>
                        <li>Career Advice</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <a href="/home"> Job Location</a>
                    <ul>
                        <li>Jobs in Bangalore</li>
                        <li>Jobs in Chennai</li>
                        <li>Jobs in Coimbatore</li>
                        <li>Jobs in gurgaon</li>
                        <li>Jobs in hyderabad</li>
                        <li>Jobs in kolkata</li>
                        <li>Jobs in mumbai</li>
                        <li>Job in pune </li>
                      
                    </ul>
                </div>
                <div className="footer-column">
                  <a href="/aboutpage">Job By Industry</a>
                    <ul className='footer-column-list'>
                        <li>Jobs in Agro</li>
                        <li>Jobs in Banking </li>
                        <li>Jobs in Construction</li>
                        <li>Jobs in  consulting</li> 
                        <li>Jobs in  education</li>
                        <li>Jobs in electronics</li>
                        <li>Jobs in IT</li>
                        <li>Jobs in logistics</li>
                        <li>Jobs in HR</li>
                    </ul>
                </div>
                
                <div className="footer-column">
                        <a href="/resources">Our Solutions</a>
                       <ul style={{color:"white"}}>
                        <li>permanent recruitment</li>
                        {/* <li>recruitment process outsourcing</li> */}
                        <li>general staffing </li>
                        <li>speciality staffing</li>
                        <li>executive search</li>
                        <li>manpower consultancy</li>
                        <li>talent acquisition</li>
                        <li>payroll transfer services</li>
                    </ul>
                </div>
                <div className="footer-column">
                   <a href="/about-us">About Us</a>
                    <ul style={{color:"white"}}>
                        <li>our history</li>
                        <li>social responsibilities</li>
                        <li>women at work</li>
                        <li>press releases</li>
                        <li>our offices</li>
                    </ul>
                </div>
             </div>
        <div>

        <hr  style={{color:"white"}}/>
          <div className='footer-end'>
          <section className='footer-logo'>
               <a href="https://www.linkedin.com/company/nawalconsultancyservices/about/"><FaLinkedin/> </a>
               <a href="https://www.instagram.com/thenawalorg"><FaInstagram/></a>
               <a href="https://github.com/thenwalorg"><FaGithub/></a>
               <a href="https://twitter.com/thenawalorg"><FaTwitter/></a>
               <a href="https://www.facebook.com/thenawalorg"><FaFacebook/></a>
            </section>

            <div className="footer-bottom">
                <p >  All Rights Reserved &copy; {new Date().getFullYear()} Nawal Consultancy Services, Division of NSL .</p>
            </div>
          </div>
        </div>
        </footer>
    );
}

export default Footer;
