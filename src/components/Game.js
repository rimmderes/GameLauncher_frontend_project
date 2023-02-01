import { Link } from "react-router-dom";


const Game = ({game}) => {

    return ( 
        <>
         <section className="products">
            <h1>{game.name}</h1>
            <h3>{`Price: £${game.price}`}</h3>
            <button>
                    <Link to={`/games/${game.id}`} >More Detail</Link>
            </button>
            </section>
        </>
     );
}
 
export default Game;