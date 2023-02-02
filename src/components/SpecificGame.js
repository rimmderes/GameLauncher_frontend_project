import {useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

import PurchaseModal from './PurchaseModal';


const SpecificGame = ({games, ifLoggedIn, isLoggedIn, account, purchaseGame })=>{

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

    const ifPlayersEmpty = (element) => {
        if(game.players === []) {
            return "No players"
        }
        return element;
    }
 
    return(
        <>
        <div className='specificGameTitle'>{game.name}  </div>
        <div className='specificGame'>
            <div className='gameContainer'>
            <div className='photo-main'>
                 <img src="https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png" width={300} height={400} />
            </div>
            <div className='controls'>
            <div className='specificGameName'>
         </div>
       
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
            
        > Add to Cart </button>}

        {purchaseModal && <PurchaseModal closeModal={setPurchaseModal} purchaseGame={purchaseGame} account={account} game={game}/>}
                 
        {displayButtons(
            <button > Play</button>
        )} 
                
        
        <p>Players:</p>
        {ifPlayersEmpty (currentPlayers)}
        
        </div>
        </div>
        </div>
        </>
        
    )
}

export default SpecificGame;