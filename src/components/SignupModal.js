import React from "react";
import { useState } from 'react';


const SignupModal = ({closeModal}) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return ( 
        <div className="modalBackground"> 
        <div className="modalContainer">
            <button onClick={() => closeModal(false)}> Home </button>
            <div className="title">
                <h3>Sign Up here:</h3>
            </div>

            <div className="loginText">
                <form className="signup" role="search" onSubmit={handleSubmit}>

                    <label className="signup_label" htmlFor="signup_input">Username:</label>
                    <input
                        type="text"
                        placeholder="Type username here..." className="signup_input" 
                        value={userName}
                        onChange={event => setUserName(event.target.value)} />

                    <label className="signup_label" htmlFor="signup_input">Email:</label>
                    <input 
                        type="text"
                        placeholder="Type username here..." className="signup_input" 
                        value={email}
                        onChange={event => setEmail(event.target.value)} />

                    <label className="signup_label" htmlFor="signup_input">Password:</label>
                    <input 
                        type="password" 
                        placeholder="Type username here..." className="signup_input" 
                        value={password}
                        onChange={event => setPassword(event.target.value)} />

                    <label className="signup_label" htmlFor="signup_input">confirm Password:</label>
                    <input 
                        type="password"
                        placeholder="Type username here..." className="signup_input" 
                        value={confirmPassword}
                        onChange={event => setConfirmPassword(event.target.value)} />
                    
                    <label className="signup_label" htmlFor="signup_input">Date of Birth:</label>
                    <input 
                        type="date" 
                        placeholder="Type username here..." className="signup_input" 
                        value={dob}
                        onChange={event => setDob(event.target.value)} />

                    <input type="submit" value="OK" className="signup_ok"/>
                </form>
            </div>


        </div>
        </div>

        
     );
}
 
export default SignupModal;