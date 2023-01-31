import React from "react";

const LoginModal = ({closeModal}) => {
    return ( 
        <div className="modalBackground"> 
        <div className="modalContainer">
            <button onClick={() => closeModal(false)}> Home </button>
            <div className="title">
                <h3>Log in here</h3>
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