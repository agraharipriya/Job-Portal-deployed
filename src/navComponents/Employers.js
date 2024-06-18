import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Carausel from "../images/caraousel.jpg"
import Carausel1 from "../images/caraousel1.jpg"
import Carausel2 from "../images/carausel3.jpg"
import '../navComponents/Employer.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'


const Employers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  
  return (
    <>
    <div className="employer-container">
 <div className='employer-body'>
 <div className="employer">
      <div className="employer-image">
        <img src={Carausel} alt="Your Image" />
      </div>
      <div className="employer-text">
        <h2 >Research Associate Job Description: The 2024 Guide</h2>
      <p>Creating an effective job description for a research associate is essential in attracting qualified candidates and setting clear expectations for the role. A well-written job description should accurately reflect the qualifications, desired skills and job responsibilities of a research associate while also showcasing your company’s values and mission. In this blog, let’s understand how a research associate job description plays a crucial role in establishing the foundation for successful hiring processes.</p>
      <p>This section of your research associate position description provides a brief overview of the roles and responsibilities of a research associate. It should outline the primary duties of a research associate within your company. </p>
    </div>
    </div>

    <div className="employer">
      <div className="employer-text">
        <h2 >Accounts Payable Job Description: Your Ultimate Guide</h2>
       <p>The accounts payable role is a crucial part of any organization’s accounting department. It outlines the key responsibilities, skills, and qualifications required for this role to ensure efficient management of financial transactions with vendors and suppliers. To attract qualified candidates, it is important to have a clear and comprehensive accounts payable job description that accurately highlights your organization’s needs. This blog will provide a comprehensive guide on how you can write an accounts payable JD.</p>
       <p>After providing a job summary for account payable job description, include all the specific duties and responsibilities. This will enable potential candidates to better understand their daily tasks in this role. By including relevant skills required for the accounts payable position, you can filter out potential candidates who may not meet the requirements. This will enable you to streamline your hiring process and attract qualified candidates.</p>
      </div>
      <div className="employer-image">
        <img src={Carausel1} alt="Your Image" />
      </div>
    </div>
    
    <div className="employer">
    <div className="employer-image">
        <img src={Carausel2} alt="Your Image" />
      </div>
      <div className="employer-text">
        <h2>Front Office Manager Job Description: The 2024 Guide</h2>
        <p>The front office is the face of any business, responsible for creating the first impression and setting the tone for the overall customer experience. An effective and well-crafted front office manager job description is crucial for attracting and hiring the right candidate for this pivotal role. In this blog, we will delve into the essential components that should be included in a comprehensive front desk manager job description, ensuring that it accurately portrays the responsibilities, qualifications, and expectations for the position.</p>
      </div>
    </div> 
   
 </div>
  

    <div className="employer1">
        <div className="employer-content">
          <h1 >Job Seeker First, Pay for Performance, Data Driven, Innovation, and Inclusion and Belonging are NCS’s core values. DEIB+ at NCS contributes to these values in the following ways:</h1>
          <p >Our employee-led Inclusion Business Resource Groups (IBRGs) are composed of employees, across all functions and levels, who act as trusted business partners and thoughtful advocates throughout the organization. They are critical to establishing a sense of community, providing opportunities for employees to network and develop their careers, and improving our products and processes for a more inclusive workforce.</p>
          <p>Nawal Consultancy servies currently has 11 global IBRGs operating in 13 countries with roughly 5,000 unique members. Our IBRGs are supported by members of our senior leadership team, who act as champions and elevate their experiences to drive change.</p>
        </div>
        <div className="employer-card-container">
          <div className='employer-card'>
          <img src="https://d341ezm4iqaae0.cloudfront.net/assets/2023/03/26203325/Values_01_JobSeekerFirst_LightBkgrnd-1.png" alt="" />
        <h2 >Employer Feedback</h2>
        <p>"Our company's culture fosters creativity and collaboration. It's inspiring to work alongside talented individuals who are passionate about their craft."</p>
        <p className="employer-name">- John Doe, CEO</p>
          </div>
          <div className='employer-card'>
          <img src="https://d341ezm4iqaae0.cloudfront.net/assets/2023/03/26203256/Values_02_PayForPerformance_LightBkgrnd-1.png" alt="" />
        <h2>Work Environment</h2>
        <p>"The work environment is dynamic and supportive. Team members are encouraged to share ideas and innovate, creating an atmosphere of growth and excellence."</p>
        <p className="employer-name">- Rahul, Assisatant Manager</p>
          </div>
          <div className='employer-card'>
          <img src="https://d341ezm4iqaae0.cloudfront.net/assets/2023/03/26203301/Values_03_DataDriven_LightBkgrnd-1.png" alt="" />
        <h2 >Culture of Company</h2>
        <p>"Our company's culture fosters creativity and collaboration. It's inspiring to work alongside talented individuals who are passionate about their craft."</p>
        <p className="employer-name">- Satyam , Senior  Manager</p>
          </div>
          <div className='employer-card'>
          <img src="https://d341ezm4iqaae0.cloudfront.net/assets/2023/03/26203300/Values_04_Innovate_LightBkgrnd-1.png" alt="" />
        <h2>Data Driven</h2>
        <p>"Our company's culture fosters creativity and collaboration. It's inspiring to work alongside talented individuals who are passionate about their craft."</p>
        <p className="employer-name">- Priya , Software developerr</p>
          </div>
          <div className='employer-card'>
          <img src="https://d341ezm4iqaae0.cloudfront.net/assets/2023/03/26203258/Values_05_InclusionAndBelonging_LightBkgrnd-1.png" alt="" />
        <h2 >Innovation</h2>
        <p>"Our company's culture fosters creativity and collaboration. It's inspiring to work alongside talented individuals who are passionate about their craft."</p>
        <p className="employer-name">- Amit , Junior developer</p>
          </div>
        </div>
      </div>

    </div>
    <Slider {...settings} className='slider-body'>
      
       <div className='slider-img'>
          <img src={Carausel} alt="" />
          <h2></h2>
        </div>
        <div  className='slider-img'>
         <img src={Carausel1} alt="" />
        </div>
        <div className='slider-img'>
         <img src={Carausel2} alt="" />
        </div>
        <div className='slider-img'>
         <img src={Carausel1} alt="" />
        </div>
       
       
      </Slider>
    </>
  )
}

export default Employers