import GamesList from "../components/GamesList";
import Search from "../components/Search";


const HomeGameContainer = ({games, filterGames}) => {

    return ( 
        <div>
             
             <div className="banner">
                <div className="content">

<<<<<<< HEAD
                <h1>Negative Infinity</h1>
=======
                <h1><span>Negative Infinity</span></h1>
>>>>>>> main
                </div>

                
                </div>
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