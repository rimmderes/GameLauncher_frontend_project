import GamesList from "../components/GamesList";

const MyGamesContainer = ({games}) => {

        return ( 
            <div>
                <div className="settingsTitle">
                <h3>My Games</h3>
                </div>
                <section>
                    <GamesList games={games}></GamesList>
                </section>
            </div>
         );
    }

export default MyGamesContainer;