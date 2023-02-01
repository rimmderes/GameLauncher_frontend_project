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
        
        // <div className="purchaseModalBackground">
        // <div className="purchaseModalContainer">
        //     <p>Hello</p>
        // </div>
        // </div>

        <div className="modalBackground"> 
        <div className="modalContainer purchaseModalContainer">
            <button onClick={() => closeModal(false)}> Purchase </button>

        </div>
        </div>
        
     );
}
 
export default PurchaseModal;