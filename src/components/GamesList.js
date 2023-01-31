import Game from "./Game";

const GamesList = ({games}) => {
     
        let mappedGames = games.map((game) => {
            return <Game key={games.id} game={game} value={games}/>
    
        })
        return ( 
            <div className="productcard">
            {mappedGames}
            </div>

    );
}
 
export default GamesList;