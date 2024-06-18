import React from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { connect } from 'react-redux';
import './components.css'

function Register(props) {
    const url = 'http://localhost:5000/api/auth/register';
    const registerUser = ()=>{
        const name = document.getElementById('fullname-input').value;
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;
        // const confirm_password = document.getElementById('confirm_password-input').value;
        const data = {
            name:name,
            email: email,
            password: password,
            // confirm_password:confirm_password,
          };
            axios.post(url, data)
            .then(response => {
            Cookies.set("token",response?.data?.token);
            // navigate("/");
            })
            .catch(error => {
                console.error('Error:', error);
            });
        props.changeAuth(true);
    }
    return (
        <>
         {/* <div className='login-banner'></div> */}
            <div className="p-5  form-container  register-container shadow">
                <div className="display-6 text-center bold "><b>REGISTER</b></div>
                <input className='form-control my-4 py-3' type="text"  placeholder='Name' id='fullname-input' required/>
                <input className='form-control my-4 py-3' type="email" placeholder='Email' id='email-input' required/>
                <input className='form-control my-4 py-3' type="password" placeholder='Password' id='password-input' required/>
                <input className='form-control my-4 py-3' type="password" placeholder='Confirm Password' id='Confirm_password-input' required/>
                <button className='form-control btn btn-lg btn-success my-4' onClick={registerUser}>Register</button>
            </div>  
        </>
    )
}
const mapDispatchToState = (dispatch)=>{
    return{
        changeAuth: (val)=>{ dispatch({type:'CHANGE_AUTH', payload: val}) }
    }
}
export default connect(null, mapDispatchToState)(Register)
