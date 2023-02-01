import { Link } from "react-router-dom";


const Game = ({game}) => {

    return ( 
        <>
         <section className="products">
            <h1>{game.name}</h1>
            <img src="https://defenders.org/sites/default/files/styles/meta_image/public/2019-04/spotted_dolphin_chris_citler-noaa_header.jpg?itok=8KXjFdI_" width={100} height={100} />
            <h3>{`Price: £${game.price}`}</h3>

            <button>
                    <Link to={`/games/${game.id}`} >More Details</Link>
            </button>
            </section>
        </>
     );
}
 
export default Game;