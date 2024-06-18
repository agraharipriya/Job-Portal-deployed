import React, { useState, useEffect } from 'react';
import '../navComponents/Jobseeker.css'; 
import { toast } from 'react-toastify'; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FaCheckCircle } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import jobSearch1 from '../images/jobsearch1.jpg' 

const JobSeekers = (props) => {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);
  const [jobSearch, setJobsearch] = useState('');
  const [skills, setSkills] = useState('');
  const [message, setMessage] = useState('');
  const [experience, setExperience] = useState('');
  const [dob, setDob] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const[address,setAddress]=useState('');
  const[pincode,setPincode]=useState('');
  const[city,setCity]=useState('');
  const[college, setCollege]=useState('');
  const[education,setEducation]=useState('');
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, phone, jobSearch, resume, skills, experience, dob, selectedGender,address ,pincode,city,education,college});
    
    setIsSubmitted(true);
    setMessage('Your application has been submitted!');
    
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setResume(null);
    setJobsearch('');
    setSkills('');
    setExperience('');
    setSelectedGender('');
    setDob('');
    setAddress('');
    setPincode('');
    setCity('');
    setEducation('');
    setCollege('');
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the document when component mounts
  }, []);

  const submitApplicationOnClick = async () => {
    if (resume) {
      const details = {
        name,
        email,
        jobSearch,
        resume
      };
      props.submitApplication(details);
    } else {
       alert('Please fill all details');
       return ;
    }
  };

  return (
    <>
      <div className="job-seeker-container">
        <h2 className='job-seeker-heading'>Job Application Form</h2>
        <div className="job-form-container">
          {isSubmitted ? (
            <div className='MSG'>
            <FaCheckCircle  className='checkicon'/>
            <p>{message}</p>
           <div className='sub_text'>
           <h6  style={{fontSize:"1.5rem" , color:"black",fontWeight:"bold", textAlign:"center"}}>Keep track of your applications</h6>
            <p style={{fontSize:"1rem" , color:"gray", textAlign:"center"}}>You will receive a status update in an email from NCS within a few weeks of submitting your application. In the meantime, you can view and track all your applications in the NCS My jobs section at any time.</p>
            </div>
            <Link to="/home"><button className='btn-submitted'>Return to Job Search</button></Link>
            </div>
          ) : (
            <>
              <h2>Please fill out the form below to submit your application!!</h2>
              <form onSubmit={handleSubmit} className='Job-seeker-form'>
                <div className="form-content">
                  <input type="text-search" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} id='name-input' />
                </div>
                <div className="form-content">
                  <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id='email-input' />
                </div>
                <div className="form-content">
                  <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} id='phone-input' />
                </div>
                <div className="form-content">
                  {/* <h2 style={{ color: "gray", fontSize: '1rem', fontWeight: 300 }}>Gender</h2> */}

                  <label htmlFor="#">Gender</label>
                  <div className="radio-buttons">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={selectedGender === 'male'}
                        onChange={(e) => setSelectedGender(e.target.value)}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={selectedGender === 'female'}
                        onChange={(e) => setSelectedGender(e.target.value)}
                      />
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={selectedGender === 'other'}
                        onChange={(e) => setSelectedGender(e.target.value)}
                      />
                      Other
                    </label>
                  </div>
                </div>
                <div className="form-content">
                  <label htmlFor="dob"> Date of Birth:   </label>
                   <input
                    className='dob'
                    type="date"
                    id="dob"
                    name="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                <div className="form-content">
                  <input type="text-search" placeholder="Area of Interest" value={jobSearch} onChange={(e) => setJobsearch(e.target.value)} id='text-input' />
                </div>
                <div className="form-content">
                  <input type="text-search" placeholder="Experience " value={experience} onChange={(e) => setExperience(e.target.value)} id='text-input' />
                </div>
                <div className="form-content">
                  <input type="text-search" placeholder="Skills" value={skills} onChange={(e) => setSkills(e.target.value)} id='text-input' />
                </div>
                <div className="form-content">
                  <input type="text" placeholder='Address' value={address} onChange={(e)=> setAddress(e.target.value)} id='text-input' />
               <div className="addpin">
               <label>
          Pincode:
          <input type="text" name="pincode" value={pincode} onChange={(e)=> setPincode (e.target.value)} id='pin-code' required />
</label>

          <label>
          City:
          <input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)} id='city-input' required />
        </label>
               </div>
        <div className="form-content">
        <label htmlFor="
          Education:">
          Education:</label>
          <input type="text" name="education" value={education} onChange={(e)=> setEducation(e.target.value)} id='education-input' />
       
          <label htmlFor="
          #">
          College :</label>
          <select name="college" id="college">
            <option value="CSUAT">CSAUAT</option>
           <option value="du">DU</option>
           <option value="AKTU">AKTU</option>
           <option value="LPU">LPU</option>
           <option value="DDU">DDU</option>
           <option value="MMMUT">MMMUT</option>
           <option value="HBTU">HBTU</option>
           <option value="AMITY">AMITY</option>
           <option value="other">Other 
          </option>
          </select>
          
      
        </div>
                </div>
                <div className="form-content">
                  <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} id='resume-input' />
                </div>
                <button type="submit" className='job-seeker-btn' onClick={submitApplicationOnClick}>Submit</button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default JobSeekers;
