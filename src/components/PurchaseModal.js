import React from "react";
import { useState } from 'react';


const PurchaseModal = ({closeModal, purchaseGame, account, game}) => {

    const [error, setError] = useState("");

    const gameFile = {
        gameId: game.id
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(parseInt(account.wallet)< parseInt(game.price)){
            setError("Not enough money!")
        }
        else{
            purchaseGame(gameFile);
            closeModal(false)
        }
    }

    return ( 
        
        <div className="modalBackground"> 
        <div className="modalContainer purchaseModalContainer">
            <span onClick={() => closeModal(false)} className="close">&times;  </span>
            <h2>You currently have <div className="redfont">£{account.wallet}</div> in your account</h2>
            <h2>This game costs<div className="redfont">£{game.price}</div></h2>
            <p>Are you sure you want to purchase this?</p>
            <div className="redfont">{error}</div>
            {console.log(account.name)};

            <button onClick={handleSubmit}> Purchase </button>

        </div>
        </div>
        
     );
}
 
export default PurchaseModal;