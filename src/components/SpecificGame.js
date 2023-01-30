import {useParams } from 'react-router-dom';


const SpecificGame = ({games})=>{

    const {id} = useParams();
    const game = games.find((game) => {
        const gameID = parseInt(id)
        return game.id === gameID
    });   
 
    return(
        <>
        <p>specific game</p>
        <h4>Name: {game.name}</h4>
        <p>Publisher: {game.publisher}</p>
        <p>Genre: {game.genre}</p>
        <p>Age: {game.ageRating}</p>
        <hr />
        </>
        
    )
}

export default SpecificGame;