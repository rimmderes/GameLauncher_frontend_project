import Game from "./Game";

const GamesList = ({games}) => {
     
        let mappedGames = games.map((game) => {
            return <Game game={game} key={games.id} value={games}/>
    
        })
        return ( 
            <div>
            {mappedGames}
            </div>

    );
}
 
export default GamesList;