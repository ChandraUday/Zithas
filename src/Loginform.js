import React from 'react'
import './Loginform.css';
import { FaUser,FaLock } from "react-icons/fa";


function loginform() {

  const welcome=()=>{
    alert("WELCOME TO ZITHAS TECH");
  }
  
  return (
    <div className='wrap'>
      <form action="">
          <h1>Login</h1>
          <div className='inputname'>
              <input type='text' placeholder='Username' required/>
              <FaUser className='icon'/>
          </div>

          <div className='inputname'>
              <input type='password' placeholder='password' required/>
              <FaLock className='icon'/>
          </div>

          <div className='forgotpassword'>
             <label> <input type='checkbox' />Remember me</label>
             <a href='#'>Forgot password?</a>
          </div>

          <button type='submit' onClick={welcome}>Login</button>

          <div className='registernew'>
             <p>Dont have account? <a href='#'> Register here </a></p>
          </div>
      </form>

    </div>
    
  )
}

export default loginform
