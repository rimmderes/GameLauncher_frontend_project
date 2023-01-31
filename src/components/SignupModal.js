import React from "react";
import { useState } from 'react';


const SignupModal = ({closeModal, postAccount}) => {


    const [stateUser, setStateUser] = useState(
        {
            name: "",
            password: "",
            dateOfBirth: "01/01/1992",
            email: ""

        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name; 
        let copiedUser = {...stateUser}
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser);
    }
    
        const handleSubmit = (event) => {
        event.preventDefault()
        postAccount(stateUser)
        closeModal(false)
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
                        placeholder="Type username here..." 
                        name= "name" 
                        value={stateUser.name}
                        onChange={handleChange} />

                    <label className="signup_label" htmlFor="signup_input">Email:</label>
                    <input 
                        type="text"
                        placeholder="Type email here..." 
                        // className="signup_input" 
                        name="email"
                        value={stateUser.email}
                        onChange={handleChange} />

                    <label className="signup_label" htmlFor="signup_input">Password:</label>
                    <input 
                        type="password" 
                        placeholder="Type password here..." className="signup_input"
                        name="password" 
                        value={stateUser.password}
                        onChange={handleChange} />

                    {/* <label className="signup_label" htmlFor="signup_input">confirm Password:</label>
                    <input 
                        type="password"
                        placeholder="Confirm password here..." className="signup_input" 
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={event => setConfirmPassword(event.target.value)} /> */}
                    
                    <label className="signup_label" htmlFor="signup_input">Date of Birth:</label>
                    <input 
                        type="date" 
                        placeholder="Enter DOB here..." className="signup_input" 
                        name="dateOfBirth"
                        // value={stateUser.dateOfBirth} 
                        onChange={handleChange} />

                    <input type="submit" value="OK" className="signup_ok"/>
                </form>
            </div>


        </div>
        </div>

        
     );
}
 
export default SignupModal;