import { Link } from "react-router-dom";


const Game = ({game}) => {

    return ( 
        <>
            <h1>{game.name}</h1>
            <button>
                    <Link to={`/games/${game.id}`} >More Detail</Link>
            </button>
        </>
     );
}
 
export default Game;