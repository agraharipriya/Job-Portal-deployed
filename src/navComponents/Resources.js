import React from 'react'
import '../navComponents/resouce.css'
import Carausel2 from "../images/carausel3.jpg"
import Carousel from "../images/caraousel.jpg"
import Card5 from "../images/card5.jpg"
import Card6 from "../images/card6.jpg"
import Carausel1 from "../images/caraousel1.jpg"

const Resources = () => {
  return (
    <div className='resource-container'>
      <div className="resource-banner">
         <div className='resource-left-text'>
          <h1 className='resource-banner-heading ' >Diversity, Equity, Inclusion & Belonging (DEIB+)</h1>
          <p className='resource-banner-subheading'>The future of  work is equitable  and inclusive</p>
          <p style={{fontWeight:400}}>
          NSG is working to close the opportunity gap by reducing bias and removing barriers for hundreds of millions of job seekers worldwide.</p>
         </div>
         <div className='resource-right-img'><img src="https://d341ezm4iqaae0.cloudfront.net/assets/2023/03/04211010/deib-hero.jpg" alt="" /></div>
      </div>

      <div className="resource">
        <div className="resource-content">
          <h1 style={{fontWeight:400}}>Inclusion Business Resource Groups</h1>
          <p  style={{fontWeight:400}}>Our employee-led Inclusion Business Resource Groups (IBRGs) are composed of employees, across all functions and levels, who act as trusted business partners and thoughtful advocates throughout the organization. They are critical to establishing a sense of community, providing opportunities for employees to network and develop their careers, and improving our products and processes for a more inclusive workforce.</p>
          <p style={{fontWeight:400}}>Nawal sustainability group currently has 11 global IBRGs operating in 13 countries with roughly 5,000 unique members. Our IBRGs are supported by members of our senior leadership team, who act as champions and elevate their experiences to drive change.</p>
        </div>
        <div className="resource-card-container">
          <div className='resource-card'>
             <img src="https://d341ezm4iqaae0.cloudfront.net/assets/2023/03/17190948/IRG_Card_Access-1024x681.png" alt="" /> 
             <p  >Access NSG</p>
          </div>
          <div className='resource-card'>
          <img src="https://d341ezm4iqaae0.cloudfront.net/assets/2023/03/17190951/IRG_Card_AGE-1024x681.png" alt="" />
          <p  style={{textAlign:"center"}}>All Generations Empowered</p>
          </div>
          <div className='resource-card'>
          <img src="https://d341ezm4iqaae0.cloudfront.net/assets/2023/03/17190954/IRG_Card_Asian-Network-1024x681.png" alt="" />
          <p  >Asian Network</p>
          </div>
          <div className='resource-card'>
          <img src="https://d341ezm4iqaae0.cloudfront.net/assets/2023/03/17190958/IRG_Card_Australia-1024x681.png" alt="" />
         <p  style={{textAlign:"center"}}>India inclusion Resource group</p>

          </div>
        </div>
      </div>
    

    <div className="resource-card-body">
    <div className="resource-heading"> 
      <h2>Employer Resource Library</h2>
      <p>Hiring made simple. Learn more about tools, hiring with <br /> NCS, trends, and more. It's all here in our resource center.</p>
     <div className='resource-right'>
     <img src={ Carausel1} alt="" />
     {/* <p>How to write a job description</p> */}
     <p>Learn how to write job description to attarct the qualified candidates.find info on qualification ,skills,and duties for over the 400 titles.</p></div>
     </div>
  
      <div className="resource-cards">
      <h3>Resource branding</h3>
        <div className='cardss'>
        <div className='resource-cards1'>
          <img src={ Carausel2 } alt="" />
        <div className="card-text">
        <h2>All about employer branding</h2>
        <p> Integrity, excellence, and empathy are more than just words on a poster at NCS – they're the guiding principles that shape everything we do. We're passionate about making a positive impact on the world, whether it's through sustainable practices, community outreach initiatives, or empowering our employees to pursue their passions.</p>
        </div>
        </div>
        <div className='resource-cards1'>
          <img src={ Carausel1 } alt="" />
        <div className="card-text">
        <h2>How to build an Effective Coaching Culture</h2>
        <p> Integrity, excellence, and empathy are more than just words on a poster at NCS – they're the guiding principles that shape everything we do. We're passionate about making a positive impact on the world, whether it's through sustainable practices, community outreach initiatives, or empowering our employees to pursue their passions.</p>
        </div>
        </div>
        <div className='resource-cards1'>
          <img src={Carousel } alt="" />
        <div className="card-text">
        <h2>Bussiness Transparency:Importance and Management tips to achieve it</h2>
        <p> Integrity, excellence, and empathy are more than just words on a poster at NCS – they're the guiding principles that shape everything we do. We're passionate about making a positive impact on the world, whether it's through sustainable practices, community outreach initiatives, or empowering our employees to pursue their passions.</p>
        </div>
        </div>
       
       
        <div className='resource-cards1'>
          <img src={ Card5 } alt="" />
        <div className="card-text">
        <h2>Improve company Culture Through 360° Feedback Training</h2>
        <p> Integrity, excellence, and empathy are more than just words on a poster at NCS– they're the guiding principles that shape everything we do. We're passionate about making a positive impact on the world, whether it's through sustainable practices, community outreach initiatives, or empowering our employees to pursue their passions.</p>
        </div>
        </div>
        <div className='resource-cards1'>
          <img src={ Card6} alt="" />
        <div className="card-text">
        <h2>Employee Benefit programs:A guide to Financial Benefits such as Paid time off</h2>
        <p> Integrity, excellence, and empathy are more than just words on a poster at NCS – they're the guiding principles that shape everything we do. We're passionate about making a positive impact on the world, whether it's through sustainable practices, community outreach initiatives, or empowering our employees to pursue their passions.</p>
        </div>
        </div>
        <div className='resource-cards1'>
          <img src={Carausel2 } alt="" />
        <div className="card-text">
        <h2>Organizational Culture:Importance and types</h2>
        <p> Integrity, excellence, and empathy are more than just words on a poster at NCS – they're the guiding principles that shape everything we do. We're passionate about making a positive impact on the world, whether it's through sustainable practices, community outreach initiatives, or empowering our employees to pursue their passions.</p>
        </div>
        </div>
       </div>
      </div>
    </div>
    </div>
  )
}

export default Resources