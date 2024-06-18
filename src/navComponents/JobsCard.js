import React from 'react'
import { FaBookmark,FaBan,FaLightbulb,FaCheck,  FaHeart,  FaMapMarkerAlt, FaFlag, FaClock, FaRegCalendarMinus, FaMoneyBill ,} from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom';

const JobsCard = () => {
 

  return (
    <div className='job-card-container'>
      <div className="cards-des">
      <div>  <span>React Js Developer</span>
      <div>  <p>Lanatus System LLP</p>
       <p>Ahemadabad,Gujarat</p>
       <p>$800 - $10,000 a month</p></div>
     </div>
       <div className="jobbtn">
    <Link to="/job-seekers"><button>Apply Now</button></Link>
        
       <span>  <FaBookmark /></span>
       <span><FaBan /></span>
       </div>
       <hr />
        <div className="cards-seperator">
         <div className="cards-descpt">
          <span>Profile insights</span>
          <p>Here’s how the job qualifications align with your profile.</p>
          <div className="skills">
           <span>  <FaLightbulb/></span>
            <span>Skills</span></div>
            <div className='language'>
              <span>   <FaCheck /> React</span>
              <span>  <FaCheck />Front-end development </span>
              <span>  <FaCheck />Web development  </span>
            </div>
          </div>
            <hr />

         <div className="cards-descpt">
          <span>Job Details</span>
          <p>Here’s how the job details align with your profile.</p>
            
          <div>
            <div className="skills">
           <span><FaMoneyBill/></span>
            <div>
            <span>Pay</span>
            <ul>
              <FaBan/>$800 -10,000 a month
            </ul>
            </div>
           </div> 
            </div>
            <div>
            <div className="skills">
           <span><FaRegCalendarMinus/></span>
            <span>Job Type</span>
           </div>
            <div className='language'>
              <span> <FaHeart/>Permanent</span>
              <span><FaHeart/>Fresher</span>
              <span>  <FaHeart/>Full-time</span>
              <span>Internship</span>
            </div>
            </div>
            <div>
            <div className="skills">
           <span><FaClock/></span>
            <span>Shift and schedule</span>
           </div>
            <div className='language'>
              <span> <FaHeart/>Day shift</span>
              <span><FaHeart/>Monday to Friday</span>
             
            </div>
            </div>
          </div>
          <hr />
          <div className="cards-descpt">
          <span>Location</span>
          <div className="skills">
           <span>  <FaMapMarkerAlt/></span>
            <span>Ahemadabad ,Gujarat</span></div> 
          </div>
          <hr />

          <div className='job-des-box'>
            <h2>Full job description</h2>
            <div className='full-des'>
              <p>We are seeking a motivated and talented React Developer Intern to join our dynamic team. This internship offers an excellent opportunity to gain hands-on experience in web development using React, one of the most popular JavaScript libraries for building user interfaces. As a React Developer Intern, you will work closely with our development team, contributing to the design, development, and implementation of innovative web applications.</p>
            </div>
            <div className='responsibility'>
              Responsibilites:
              <ul className='list1-style'>
                <li>Collaborate with the development team to understand project requirements and objectives.</li>
                <li>Assist in the design and development of user-friendly web interfaces using React.
                   Write clean, efficient, and maintainable code that adheres to industry best practices.</li>
                <li>Conduct thorough testing and debugging of web applications to ensure optimal functionality.</li>
                <li>Stay updated on emerging trends and technologies in web development, particularly in the React ecosystem.</li>
              </ul>
             
            </div>
            <div className='responsibility'>
              Requirements:
              <ul className='list1-style'>
              <li>Currently pursuing a degree in Computer Science, Software Engineering, or a related field.</li>

              <li>Strong understanding of JavaScript, HTML, and CSS.</li>
              <li>Familiarity with React and its core principles.</li>
              <li>Knowledge of front-end development frameworks, libraries, and tools.</li>
              <li>Basic understanding of version control systems such as Git.</li>
              <li>Excellent problem-solving skills and attention to detail.</li>
              <li>Strong communication and teamwork abilities.</li>
              <li>Ability to learn new technologies quickly and apply them effectively.</li>
              </ul>
             
            </div>
            <div className='job-type'>
            <p>Job type : Full-time</p>
            <p>Salary:$800 - $10,000 a month</p>
            </div>
          </div>
          <hr />
          <div className='skills'>
            
            <div style={{display:"flex", gap:"18px"}} className='report'><FaFlag/> Report job</div>
          </div>
          </div>

         </div>
        </div>
     

    
  )
}

export default JobsCard