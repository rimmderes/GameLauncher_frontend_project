import {useParams } from 'react-router-dom';
import { useState } from "react";

import PurchaseModal from './PurchaseModal';


const SpecificGame = ({games})=>{

    const [purchaseModal, setPurchaseModal] = useState(false);


    const {id} = useParams();
    const game = games.find((game) => {
        const gameID = parseInt(id)
        return game.id === gameID
    });   


    // const ifLoggedIn = async (element) => {
    //     if(isLoggedIn === true) {
    //         return element
    //     }
       
    // }

    let currentPlayers = game.players.map((player) => {
        return <p key={player.id}>{player.name}</p>
    })
 
    return(
        <>
        {/* <p>Specific game</p> */}
        <h3>{game.name}</h3>
        <h3>{`Price: £${game.price}`}</h3>
        <p>Publisher: {game.publisher}</p>
        <p>Genre: {game.genre}</p>
        <p>Age: {game.ageRating}</p>
        {/* {ifLoggedIn( */}
        <button className="purchaseModal"
                onClick={() => {
                    setPurchaseModal(true);
                }}
            
        > Purchase </button>
        {purchaseModal && <PurchaseModal closeModal={setPurchaseModal}/>}
                 
                
                
        {/* <button > Purchase</button> */}
        {/* )} */}
        <p>users:</p>
        {currentPlayers}
        </>
        
    )
}

export default SpecificGame;