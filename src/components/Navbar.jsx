import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Nav.css'

import { FaAngleDown, FaBars, FaBell, FaEnvelope, FaUser} from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link,useLocation } from 'react-router-dom'
import logo from "../images/logo1.png";


const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const hideLogoutButtonRoutes = ['/login', '/register'];
    const hideLogoutButton = hideLogoutButtonRoutes.includes(location.pathname);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
  
  const handleLogin = () => {
    props.changeAuth(true);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    props.changeAuth(false);
    setIsLoggedIn(false);
  };

    return (
      <nav className='navbar-fixed-top'>
        <div className="navbar">
            <div className='logo'>
                <Link to="/login" className="logo-container">
                    <img src={logo} alt="brandlogo" width="350px"/>          
                </Link>
                <div className="nav-links">
            
                <Link to="/home">Home</Link>
                {/* <Link to="/job-seekers"> Job Seekers</Link> */}
                {/* <Link to="/employers">  Employers</Link>
                <Link to="/about-us"> About Us</Link>
                <Link to="/resources"> Resources </Link>  */}
            </div> 
            </div>

{/* new code */}
            <div className="nav-links">
            
                {/* <Link to="/home">Home</Link> */}
                {/* <Link to="/job-seekers"> Job Seekers</Link> */}
                {/* <Link to="/employers">  Employers</Link>
                <Link to="/about-us"> About Us</Link>
                <Link to="/resources"> Resources </Link>  */}
            </div> 
           
            <div className='notification'>
            <FaBell />
            {/* <Link to="/notification"> <FaBell /> </Link> */}
            <FaEnvelope/>
            <div className="dropdown">

<div className='drp'> 
 <button className="dropbtn" onClick={toggleDropdown}> <FaUser/></button>
{isOpen && (
<div className="dropdown-content">
{/* <a href="/job-seekers">Job Seekers</a> */}
<Link to="/employers">Employers</Link>
<Link to="/about-us">About Us</Link>
<Link to="/resources">Resources</Link>
{!hideLogoutButton && (
         
         <div className='logout'>
           <Link to="/login"> <button className="logoutButton" onClick={handleLogout}><FaSignOutAlt/></button></Link>
         </div>
         
       )}
 
</div>
)}
  </div>      
</div>
</div>

           

            {/* for mobile responsive user  */}

            <div >
                <button  onClick={toggleDropdown}>
                <FaBars  className="hamburger"/> 
                </button>

             {isOpen &&
                <div className='dropdown-menu'>
                <ul className='dropdown-items'>
                <Link to="/home" className='items'>Home</Link>
                <Link to="/job-seekers" className='items'> JobSeekers</Link>
                <Link to="/employers" className='items'>  Employers </Link>
                <Link to="/about-us" className='items'> AboutUs</Link>
                <Link to="/resources" className='items'> Resources</Link> 
              
              <Link to="/login"><button onClick={  handleLogout} className="logoutButton">   <FaSignOutAlt /></button></Link>  
            
                </ul>
              </div>
             }
            </div>
           
        </div>
        </nav>
    );
}

const mapDispatchToState = (dispatch) => {
    return {
        changeAuth: (val) => { dispatch({ type: 'CHANGE_AUTH', payload: val }) }
    }
}

export default connect(null, mapDispatchToState)(Navbar);
