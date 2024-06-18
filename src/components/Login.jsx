import React from 'react'
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import './components.css'
import './Banner.css'
import axios from 'axios';
function Login(props) {
    const login = ()=>{
        const url = 'http://localhost:5000/api/auth/login';
        const emailInput = document.getElementById('email-input').value;
        const passwordInput = document.getElementById('password-input').value;

        const data = {
            email: emailInput,
            password: passwordInput,
          };
            axios.post(url, data)
            .then(response => {
            if(response?.data?.token === Cookies.get("token")){
                console.log("Hii");
                console.log(props);
                window.location.href ="/"
                }
                })
                .catch(error => {
                    console.error('Error:', error);
                    });
                props.changeAuth(true);
    }
    return (
        <>
       
       {/* <div className='login-banner'></div> */}
            <div className="p-5 my-6 flex  justify-center items-center login-form-container shadow">
               <div className='login-form'>
               <div className="display-4 text-center login-heading"><b>LOGIN</b></div>
                <input className='form-control my-4 py-3 form-input' type="email" placeholder='Email' id='email-input' required/>
                <input className='form-control my-4 py-3 form-input' type="password" placeholder='Password' id='password-input' required />
                <button className='form-control btn btn-lg btn-success mt-2 mb-4 btn-login ' onClick={login}>Login</button>
                <div className="heading-1 text-center register">Don't have an account?</div>
                <Link to="/register"><button className='form-control btn btn-lg btn-dark my-2 btn-register '>Register</button></Link>
            </div>  
               </div>
        </>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        changeAuth: (val)=>{ dispatch({type: 'CHANGE_AUTH', payload: val}) }
    }
}
export default connect(null, mapDispatchToProps)(Login)
