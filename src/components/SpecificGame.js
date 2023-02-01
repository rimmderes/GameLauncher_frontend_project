import {useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

import PurchaseModal from './PurchaseModal';


const SpecificGame = ({games, ifLoggedIn, isLoggedIn, account })=>{

    const [purchaseModal, setPurchaseModal] = useState(false);
    const [ownGame, setOwnGame] = useState(false);



    const {id} = useParams();
    const game = games.find((game) => {
        const gameID = parseInt(id)
        return game.id === gameID
    });   



    useEffect(() => {
        if(isLoggedIn) {
            console.log("heyyy");
            const gameOwned = doTheyOwnGame(id) 
            setOwnGame(gameOwned);
            }
            
    }) 


    const doTheyOwnGame =(gameID) =>{
        let check = false;
        for(const ownedGame of account.installGames){
            if((ownedGame.id==gameID)){
                check= true;
            }
        }
        return check;
    }

    const ifOwnedGame =(element)=>{
        if(isLoggedIn){
            console.log("logged in")
            if(ownGame===false){
                console.log("dont own game")
                return element;
            }
        }
        
    }

    const displayButtons =(element)=>{
        if(isLoggedIn && ownGame){
            // if(doTheyOwnGame(game.id)){
            //     setOwnGame(true);
                return element;
            // }
        }
        
    }

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
        {/* {ifOwnedGame(
             <button className="purchaseModal"
                onClick={() => {
                    setPurchaseModal(true);
                }}
            
        > Purchase </button>
        )} */}

        {isLoggedIn && !ownGame && <button className="purchaseModal"
                onClick={() => {
                    setPurchaseModal(true);
                }}
            
        > Purchase </button>}

        {purchaseModal && <PurchaseModal closeModal={setPurchaseModal}/>}
                 
        {displayButtons(
            <button > Play</button>
        )} 
                
        
        <p>Players:</p>
        {currentPlayers}
        </>
        
    )
}

export default SpecificGame;