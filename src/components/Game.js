import { Link } from "react-router-dom";


const Game = ({game}) => {

    return ( 
        <>
         <section className="products">
            <h1>{game.name}</h1>
            <img src="https://i.pinimg.com/550x/8b/3d/02/8b3d0225bb8892f230dc89ed8b55b0ad.jpg" width={200} height={300} />
            <h3>{`Price: £${game.price}`}</h3>

            <button>
                    <Link to={`/games/${game.id}`} >More Details</Link>
            </button>
            </section>
        </>
     );
}
 
export default Game;