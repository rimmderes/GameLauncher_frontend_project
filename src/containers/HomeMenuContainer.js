import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GamesList from "../components/GamesList";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import Search from "../components/Search";
import SpecificGame from "../components/SpecificGame";
import logo from "./logo.webp"



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
                <div className="banner">
                
                <div className="navbar">
                    {/* <img src={logo} alt="logo" width={100}/>  */}

                    

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/my-games">My Games</Link>
                    </li>
                </ul>
                
                
               
                <ul>
                    
                <li className="loginButton"
                onClick={() => {
                    setLoginModal(true);
                }}
                
                > Login </li>
                {loginModal && <LoginModal closeModal={setLoginModal}/>}
                 
                 
                 <li className="signupButton"
                 onClick={() => {
                    setSignupModal(true);
                }}
                
                    
                > Sign Up </li>
                {signupModal && <SignupModal closeModal={setSignupModal}/>}
                </ul>
                </div>
                

                <div className="content">

                <h1>Negative Infinity</h1>
                    {/* <h2>Another One Bytes the Frost</h2> */}
                    </div>

                    <div className="search">
                    <Search filterGames={filterGames}/>
                    </div>

                 
                </div>

                <Routes>
                    <Route path="/" element={
                        <GamesList games={filteredGames ? filteredGames : games}/>
                    }
                    />
                    <Route path="/games/:id" element={
                        <SpecificGame
                            games={games}
                        />}
                    />
                </Routes>

                
            </div>
        </BrowserRouter>
     );
}
 
export default HomeMenuContainer;