import React from "react";

const SignupModal = ({closeModal}) => {
    return ( 
        <div className="signupMBackground"> 
        <div className="signupMContainer">
            <button onClick={() => closeModal(false)}> Home </button>
            <div className="title">
                <h1>Sign Up here</h1>
            </div>

            <div className="loginText">
                <p>Username:</p>
                <p>Email:</p>
                <p>Password:</p>
                <p>Confirm Password</p>
                <p>Date of Birth:</p>
                <button>Ok</button>
            </div>


        </div>
        </div>

        
     );
}
 
export default SignupModal;