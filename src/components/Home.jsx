import React from 'react'
import { useEffect ,useState} from 'react';
import {connect} from 'react-redux'
import './components.css'
import axios from 'axios';
import Job from './Job';
import JobsCard from '../navComponents/JobsCard';
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'
import card4 from '../images/card4.jpg'
import card5 from '../images/card5.jpg'
import card6 from '../images/card6.jpg'
import './Banner.css'

function Home(props) {
    const {selectedLanguage, jobData} = props;
   
 
    const handleClick = (e)=>{
        fetchData(e.target.innerText);
        props.changeLanguage(e.target.innerText);
    }
    const key = '2fe167e36019a87d22742cad8aa5468b'
    const id  = 'b6808b2a'
    const fetchData = async (keyword)=>{
        const res = await axios.get(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${id}&app_key=${key}&results_per_page=20&what=${keyword}`, {
            headers:{
                "Accept": "application/json"
            }
        });
        await props.changeData(res.data.results);
        console.log(jobData);
    }

    useEffect(()=>{
        if(selectedLanguage !== ''){
            fetchData(selectedLanguage);
        }
    }, [])

 
    const [selectedCountry, setSelectedCountry] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const countries = [
      { name: 'India', states: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'] },
      // Add other countries here
      { name: 'Other', country: ['China','Bhopal', 'Nepal','Australia','America','USA','France','Germany','Peris','Japan'] } // Placeholder for other countries
    ];
  
    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
    };

    return (
        <>
        {/* for banner part */}
      <div className="home-container">
      <div className='home-banner'>
   <div className='home-banner-text'>
    <h1 style={{color:"orange"}}>Welcome to Nawal Consultancy Services</h1>
    <p>We connect job seekers with their dream jobs.</p>
    <div className="home-search-container">
      <form  className='home-form' onSubmit={(e)=> e.preventDefault()}>
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          style={{color:"black"}}
        />
          {/* <span className='my-3 px-5 heading text-center'>{selectedLanguage === "" ? 'Job Search'  : `Showing jobs for ${selectedLanguage}`}</span> */}
        {/* location selection */}
      <div className="country-dropdown">
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        
        <option value="India">India</option>
          {countries.find(country => country.name === 'India').states.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}

        {/* <option value="Japan">Japan</option> */}
          {countries.find(country => country.name === 'Other').country.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
       
        
      
      </select>
    </div>
    <button 
    type="submit" 
    className='home-search-btn' 
    style={{ backgroundColor: "#084d97", borderRadius: "4px" }}
    onClick={() => {
      fetchData(searchTerm); 
      setSelectedCountry(selectedCountry); 
    }}
  >
    Find jobs
  </button>
      </form>
    </div>
  </div>
   </div>  

   <div className='language-container'>
   <span >You Can <b style={{color:"orangered"}}>Find</b> Your <b  style={{color:"orangered"}}>Own</b> Job</span>
            <div className="container main-container mt-2">
                <div className="row">
                    <div className="col-md-4">
                        <span className='my-3 text-center heading'>Job feeds</span>
                        <div className="  container px-5 language-container mb-5">
                        <div className="job-card-scroll">
                        <div className="job-card" >
                            <h2>Java Developer</h2>
                            <span>Nawal sustainability group</span>
                            <span>Remote</span>
                        
                            <div style={{color:"gray" ,border:"1px solid  #E5E5E5"  ,borderRadius:"4px",backgroundColor:" #E5E5E5" }}>₹7000.90 - ₹12,036.08 month</div>
                            <div class="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>Java</div>
                            </div>
                            <div className="job-card" >
                            <h2>Javascript developer</h2>
                            <span>Nawal sustainability group</span>
                            <span>remote</span>
                            <div style={{color:"gray" ,border:"1px solid  #E5E5E5"  ,borderRadius:"4px",backgroundColor:" #E5E5E5" }}>₹7000.90 - ₹12,036.08 month</div>
                            <div class="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>Javascript</div>
                            </div>
                            <div className="job-card" >
                            <h2>Python developer</h2>
                            <span>Nawal sustainability group</span>
                            <span>remote</span>
                            <div style={{color:"gray" ,border:"1px solid  #E5E5E5"  ,borderRadius:"4px",backgroundColor:" #E5E5E5" }}>₹7000.90 - ₹12,036.08 month</div>
                        
                            <div class="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>Python</div>
                            </div>
                            <div className="job-card" >
                            <h2>PHP developer</h2>
                            <span>Nawal sustainability group</span>
                            <span>remote</span>
                            <div style={{color:"gray" ,border:"1px solid  #E5E5E5"  ,borderRadius:"4px",backgroundColor:" #E5E5E5" }}>₹7000.90 - ₹12,036.08 month</div>
                            <div class="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>PHP</div>
                            </div>
                            <div className="job-card" >
                            <h2>C# developer</h2>
                            <span>Nawal sustainability group</span>
                            <span>remote</span>
                            <div style={{color:"gray" ,border:"1px solid  #E5E5E5"  ,borderRadius:"4px",backgroundColor:" #E5E5E5" }}>₹7000.90 - ₹12,036.08 month</div>
                            <div class="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>C#</div>
                            </div>
                            <div className="job-card" >
                            <h2>C++ developer</h2>
                            <span>Nawal sustainability group</span>
                            <span>remote</span>
                            <div style={{color:"gray" ,border:"1px solid  #E5E5E5"  ,borderRadius:"4px",backgroundColor:" #E5E5E5" }}>₹7000.90 - ₹12,036.08 month</div>
                            <div class="language-name-container bg-dark text-light my-2 py-1" onClick={handleClick}>C++</div>
                            </div>

                        </div>
                        </div>

                    </div>
                    <div className="col-md-8 ">
                     <span className='my-3 px-5 heading text-center'>{selectedLanguage === "" ? 'Job Search'  : `Showing jobs for ${selectedLanguage}`}</span>
                    <JobsCard/>
                        
                       {/* <div className="job-container">
                            {jobData.map((job)=>{
                                return <Job id={job.id} title={job.title} companyName={job.company.display_name} location={`${job.location.area[0]}, ${job.location.area[1]}, ${job.location.area[2]}`} />
                            })}
                        </div> */}
                    </div> 

                </div>
         </div>

  </div>



 <div className='home-content '>
         <div className="home-content-text">
         <h2 className='home-heading'> your specialised and equitable work partner.</h2>
         <p className='home-heading-text'>We focus on connecting with talent, because we understand the importance of a job in a person's life. Focusing on the relationship with our talent will also contribute to our clients' success.</p>
         <p className='home-heading-text'> Matching the right talent to the right job will in turn help both talent and clients achieve their goals and ambitions.client
        </p>
         </div>
 <div><img src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-119702.jpg?t=st=1711458838~exp=1711462438~hmac=3160fbdc70e24024ab52d595ed682f30cf7e1981e79c326ce4f1426de2c6f322&w=1060" alt=""  className='home-img'/></div>

 </div>
 </div>


        </>
    )
}

const mapStateToProps = (state)=>{
    return {
        selectedLanguage: state.selectedLanguage,
        jobData: state.jobData,  
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        changeLanguage : (newLanguage) =>{ dispatch({type: 'CHANGE_LANGUAGE', newLanguage: newLanguage})},
        changeData: (newData) =>{ dispatch({type: 'CHANGE_JOB_DATA', payload: newData})},
        selectJobId: (id) =>{ dispatch({type:'SELECT_JOB_ID', payload: id})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
