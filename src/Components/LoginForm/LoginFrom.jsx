import React from "react";
import './LoginFrom.css'
import { FaUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const LoginFrom = () => {
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className ="input-box">
                <input type="text" placeholder="Username" required/>
                <FaUser className="icon"/>
                </div>
                 
                <div className ="input-box">
                <input type="Password" placeholder="Password" required/>
                <CiLock className="icon"/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                <a href="#">forgot Password</a>
                </div>
               <button type="submit">Login</button>

               <div className="register-link">
                <p>Don't have an account?<a href="register.html">Register</a></p>
               </div>

            </form>
        </div>
    );
};

export default LoginFrom;