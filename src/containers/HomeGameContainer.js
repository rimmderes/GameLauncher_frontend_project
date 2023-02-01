import GamesList from "../components/GamesList";
import Search from "../components/Search";


const HomeGameContainer = ({games, filterGames}) => {

    return ( 
        <div>
            <section>
                <Search filterGames={filterGames}></Search>
            </section>
            <section>
                <GamesList games={games}></GamesList>
            </section>
        </div>
     );
}
 
export default HomeGameContainer;