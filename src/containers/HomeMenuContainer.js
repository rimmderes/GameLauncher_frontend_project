import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GamesList from "../components/GamesList";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import Search from "../components/Search";
import SpecificGame from "../components/SpecificGame";

const HomeMenuContainer = () => {

    const SERVER_URL = "http://localhost:8080"

    // const [user, setUser] = useState(null);
    const [games, setGames] = useState([]);
    const [filteredGames, setfilteredGames] = useState();
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);


    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/games`)
            const data = await response.json();
            setGames(data);
        }
        fetchData()
    }, [])

    const filterGames = (searchNameTerm, searchPublisherTerm, searchGenreTerm, searchAgeTerm) => {
        // console.log("search term: ", searchTerm);
        const foundGamesByName = games.filter(game => {
          return game.name.toLowerCase().includes(searchNameTerm.toLowerCase())
        })

        const foundGamesByPublisher = foundGamesByName.filter(game => {
            return game.publisher.toLowerCase().includes(searchPublisherTerm.toLowerCase())
        })

        const foundGamesByGenre = foundGamesByPublisher.filter(game => {
        return game.genre.toLowerCase().includes(searchGenreTerm.toLowerCase())
        })

        const foundGamesByAge = foundGamesByGenre.filter(game => {
            return game.ageRating.toLowerCase().includes(searchAgeTerm.toLowerCase())
            })
    

        setfilteredGames(foundGamesByAge)
      }
    


    return ( 
        <BrowserRouter>
            <div>
                <h1>Negative Infinity</h1>
                <Search filterGames={filterGames}/>

                <button className="loginButton"
                onClick={() => {
                    setLoginModal(true);
                }}
                
                > Login </button>
                {loginModal && <LoginModal closeModal={setLoginModal}/>}
                 
                 
                 <button className="signupButton"
                 onClick={() => {
                    setSignupModal(true);
                }}
                
                > Sign Up </button>
                {signupModal && <SignupModal closeModal={setSignupModal}/>}

                <Routes>
                    <Route path="/games/:id" element={
                        <SpecificGame
                            games={games}
                        />}
                    />
                </Routes>
                <GamesList games={filteredGames ? filteredGames : games}/>
            </div>
        </BrowserRouter>
     );
}
 
export default HomeMenuContainer;