import React from "react";

const SignupModal = ({closeModal}) => {
    return ( 
        <div className="modalBackground"> 
        <div className="modalContainer">
            <button onClick={() => closeModal(false)}> Home </button>
            <div className="title">
                <h3>Sign Up here:</h3>
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