import React from "react";
import { useState } from 'react';


const PurchaseModal = ({closeModal}) => {

    const [error, setError] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("")
        closeModal(false)
    }

    return ( 
        
        <div className="modalBackground"> 
        <div className="modalContainer purchaseModalContainer">
            <h2>Are you sure you want to purchase this?</h2>
            <p>You currently have £ in your account.</p>
            <button onClick={() => closeModal(false)}> Purchase </button>

        </div>
        </div>
        
     );
}
 
export default PurchaseModal;