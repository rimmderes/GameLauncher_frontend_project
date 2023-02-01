import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GamesList from "../components/GamesList";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import Search from "../components/Search";
import SpecificGame from "../components/SpecificGame";
import HomeGameContainer from "./HomeGameContainer";
import logo from "./logo.webp"



const HomeMenuContainer = () => {

    const SERVER_URL = "http://localhost:8080"

    const [account, setAccount] = useState(false);
    const [allAccounts, setAllAccounts] = useState([])
    const [games, setGames] = useState([]);
    const [filteredGames, setfilteredGames] = useState();
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [hideElement, setHideElement] = useState(false)


    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/games`)
            const data = await response.json();
            setGames(data);
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/accounts`)
            const data = await response.json();
            setAllAccounts(data);
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


    const postAccount = async (newAccount) => {
        const response = await fetch("http://localhost:8080/accounts", {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newAccount)
        }) 
        const savedAccount = await response.json();
        setAccount(savedAccount);
        setIsLoggedIn(true)
    };

    const logInToAnAccount = async (accountName, accountPassword) => {
        let check = false;
        for(const accountInList of allAccounts){
            if((accountInList.name===accountName)&(accountInList.password===accountPassword)){
                setAccount(accountInList);
                setIsLoggedIn(true)
                check= true;
            }
        }
        return check;
    };

    const ifLoggedIn = (element) => {
        if(isLoggedIn === true) {
            return element
        }
       
    }

    const ifLoggedOff = (element) => {
        if(isLoggedIn === false) {
            return element
        }
    }

   


    return ( 
        <BrowserRouter>
            <div>
                <div className="banner">

                    <div className="navbar">

                        {/* <img src={logo} alt="logo" width={100}/>  */}

                        <ul>
                            <li className="homeButton">
                                <Link to="/">Home</Link>
                            </li>
                            {ifLoggedIn(
                            <li>
                                <Link to="/my-games">My Games</Link>
                            </li>
                            )}
                        </ul>
                    
                        <ul>

                            {ifLoggedOff(
                            <li className="loginButton"
                                onClick={() => {setLoginModal(true)}}
                                > Login </li> 
                            )}

                            {loginModal && <LoginModal closeModal={setLoginModal} logInToAnAccount={logInToAnAccount}/>}
                        
                            {ifLoggedOff(
                            <li className="signupButton" 
                                onClick={() => {setSignupModal(true)}}
                                > Sign Up </li> 
                            )}

                            {signupModal && <SignupModal closeModal={setSignupModal} postAccount={postAccount}/>} 

                            <p id="tempname">{ifLoggedIn (account.name)}</p>

                            {ifLoggedIn(
                            <li onClick={() => setIsLoggedIn(false)}> Log Out</li>
                            )}
                        </ul>
                    </div>
                
                    

                    

                    <div className="content">

                        <h1>Negative Infinity</h1>
                    </div>

                    
                </div>

                <Routes>
                    <Route path="/" element={
                        <HomeGameContainer filterGames={filterGames} games={filteredGames ? filteredGames : games}/>
                    }
                    />
                    <Route path="/games/:id" element={
                        <SpecificGame
                            games={games} ifLoggedIn={ifLoggedIn} isLoggedIn={isLoggedIn} account={account}
                        />}
                    />
                    <Route path="/my-games" element={
                        <GamesList games={account.installGames}/>
                    }
                    />
                </Routes>

            </div>
        </BrowserRouter>
    );
}
 
export default HomeMenuContainer;