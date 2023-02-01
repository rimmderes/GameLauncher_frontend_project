import React from "react";
import { useState } from 'react';


const PurchaseModal = ({closeModal}) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("")
        closeModal(false)
    }

    return ( 
        <div className="modalBackground"> 
        <div className="modalContainer">
            <button onClick={() => closeModal(false)}> Home </button>
            <div className="title">
                <h3>Log in here</h3>
                <p>{error}</p>
            </div>

            <div className="loginText">
                <form className="login" role="search" onSubmit={handleSubmit}>
                    <label className="login_label" htmlFor="login_input">Username:</label>
                    <input 
                        type="text" 
                        placeholder="Type username here..." className="login_input" 
                        value={userName}
                        onChange={event => setUserName(event.target.value)} />

                    <label className="login_label" htmlFor="login_input">Password:</label>
                    <input 
                        type="password"
                        placeholder="Type password here..." className="login_input" 
                        value={password}
                        onChange={event => setPassword(event.target.value)} />

                    <input type="submit" value="OK" className="login_ok"/>
                </form>
                <p>Don't have an account? Click Here to Sign up.</p>
            </div>


        </div>
        </div>

        
     );
}
 
export default PurchaseModal;