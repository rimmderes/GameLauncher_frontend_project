import React from "react";

const LoginModal = ({closeModal}) => {
    return ( 
        <div className="loginMBackground"> 
        <div className="loginMContainer">
            <button onClick={() => closeModal(false)}> Home </button>
            <div className="title">
                <h1>Log in here</h1>
            </div>

            <div className="loginText">
                <p>Username:</p>
                <p>Password:</p>
                <button>Ok</button>
                <p>Don't have an account? Click Here to Sign up.</p>
            </div>


        </div>
        </div>

        
     );
}
 
export default LoginModal;