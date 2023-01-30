import Game from "./Game";

const GamesList = ({games}) => {
     
        let mappedGames = games.map((game) => {
            return <Game game={game} key={games.id} />
    
        })
        return ( 
            <div>
            {mappedGames}
            </div>

    );
}
 
export default GamesList;