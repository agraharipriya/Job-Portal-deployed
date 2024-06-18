import React from 'react'
import '../navComponents/About.css'
import { useState, useEffect } from 'react';

const Aboutpage = () => {

  const [count, setCount] = useState(0);
  const[count1,setCount1]=useState(0);
  const[count2,setCount2]=useState(0);

  useEffect(() => {
    const targetCount = 55; 
    const increment = Math.ceil(targetCount / 1000); // Increment by 1000 for smoother transition

    const timer = setInterval(() => {
      setCount(prevCount => Math.min(prevCount + increment, targetCount));
    }, 50); 

    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const targetCount1 = 200; 
    const increment = Math.ceil(targetCount1 / 1000); // Increment by 1000 for smoother transition

    const timer1 = setInterval(() => {
      setCount1(prevCount => Math.min(prevCount + increment, targetCount1));
    }, 50); 

    return () => clearInterval(timer1);
  }, []);

  useEffect(() => {
    const targetCount2 = 2.5; 
    const increment = Math.ceil(targetCount2 / 1000); // Increment by 1000 for smoother transition

    const timer2 = setInterval(() => {
      setCount2(prevCount => Math.min(prevCount + increment, targetCount2));
    }, 100); 

    return () => clearInterval(timer2);
  }, []);
  return (
    <div className='aboutpage_container' >
       <div className="aboutpage_main">
       <div className="left">
          <h1>Let's get to work</h1>
          <p>So, what is NCS? We’re a thriving community for workplace conversations, driven by a simple mission: helping people everywhere find jobs and companies they love.</p>
          <p>But the way we do it? That’s not so simple.</p>
          <p>Every day, we’re inspired by a vision to make positive workplace change through radical transparency. Through the products we make and the communities we create, we’re breaking down barriers that lead to discrimination, pay gaps, and toxic work environments. Together, we’re fostering a world where people have the support and resources they need to find a job that loves them back.</p>
        </div>

        <div className="right">
          <img src="https://about-us.glassdoor.com/site-us/wp-content/uploads/sites/2/2024/02/2024_about-us-hero-image_611x475-2.png" alt="" />
        </div>
       </div>
 <div className="middle_page">
  <div className="work">
    <h2>What we do</h2>
    <p>Wherever you are on your career journey, Nawal Consultancy services makes it easier for </p>
    <p>workers and companies to find the perfect match.</p>
  </div>
  <div className="aboutpage-cards">
    <div className="page-cards">
      <img src="https://about-us.glassdoor.com/site-us/wp-content/uploads/sites/2/2024/02/2024_illustration-for-job-seekers_300x200-3.png" alt="" />
      <h3>For job seekers</h3>
      <p>We simplify your search, so you can apply for jobs with confidence. Filter millions of jobs and ratings, talk to professionals, and get smart on salary-then apply with ease.</p>
    </div>
    <div className="page-cards">
    <img src="https://about-us.glassdoor.com/site-us/wp-content/uploads/sites/2/2024/02/2024_illustration-for-employees_300x200-3.png" alt="" />
      <h3>For employees</h3>
     <p>We amplify your voice, so you can enhance your workplace experience. Leave reviews, search and post salaries, and join candid conversations about life at work.</p>
    </div>

    <div className="page-cards">
     <img src="https://about-us.glassdoor.com/site-us/wp-content/uploads/sites/2/2024/02/2024_illustration-for-employers_300x200-3.png" alt="" />
      <h3>For employers</h3>
      <p>We give you a place to shape and share your story, so you can find and keep the best talent. Post jobs, respond to reviews, and gain insights to shape your messaging.</p>
    </div>
  </div>

  
 </div>
 <div className="map_page">
  <div className="map-left">
    <img src="https://about-us.glassdoor.com/site-us/wp-content/uploads/sites/2/2022/10/2022_about-us-world-of-difference_x.svg" alt="" />

  </div>
  <div className="map-right">
    <h2>A world of difference</h2>
    <p>Our growing community stretches across 20 countries, where companies and</p>
    <p>  talent can tap into NCS’s market-specific insights to find the right fit.</p>
  </div>
 </div>

 <div className="counting">
 <div className="count-up">
  <h2>Nawal Consultancy Services by the numbers</h2>
  <p>Since 2007, NCS has been a proud champion of transparency in the workplace.</p>
  <p>Today, our mission guides us in serving a global community of millions.</p>
 </div>
<div className=" count-down">
<div className="counting-number">
     <span> {count.toLocaleString()}<b>M+</b></span>
      <p>unique monthly visitors</p>
    </div>
    <div className="counting-number">
     <span> {count1.toLocaleString()}<b>M+</b> </span>
      <p>reviws ,salary and insights</p>
    </div>
    <div className="counting-number">
    <span>  {count2.toLocaleString()}<b>M</b> </span>
      <p>employers profiles</p>
    </div>
</div>
 </div>
      
    </div>
  )
}

export default Aboutpage