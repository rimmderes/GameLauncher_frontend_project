import { useEffect, useState, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import GamesList from "../components/GamesList";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import Search from "../components/Search";
import SpecificGame from "../components/SpecificGame";
import HomeGameContainer from "./HomeGameContainer";
import Settings from "../components/Settings";
import logo from "./logo.webp"
import Footer from "../components/Footer";
import MyGamesContainer from "./MyGamesContainer";


const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 
  



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
        savedAccount.installGames = [];
        setAllAccounts([...allAccounts, savedAccount])
        setIsLoggedIn(true)
        setAccount(savedAccount);
    };

    const updateAccount = async (customisedAccount) => {
        const response = await fetch(`http://localhost:8080/accounts/${account.id}`, {
            method: "PATCH",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(customisedAccount)
        }) 
        const updatedAccount = await response.json();

        const updatedAccountList = allAccounts.map((accountInsideAllAccounts)=>{
            if(accountInsideAllAccounts.id=== updatedAccount.id){
                return updatedAccount;
            }
            return accountInsideAllAccounts;
        })
        setAllAccounts(updatedAccountList);
        setAccount(updatedAccount);
        setIsLoggedIn(true)
    };

    const purchaseGame= async (gameFile)=>{
        const response = await fetch(`http://localhost:8080/accounts/${account.id}`, {
            method: "PUT",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(gameFile)
        }) 

        const purchaseInfo = await response.json();
        const newAccount = purchaseInfo.accountStatus;

        const updatedAccountList = allAccounts.map((accountInsideAllAccounts)=>{
            if(accountInsideAllAccounts.id=== account.id){
                return newAccount;
            }
            return accountInsideAllAccounts;
        })
        setAllAccounts(updatedAccountList);
        setAccount(newAccount);
        setIsLoggedIn(true)
    }

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
        <Wrapper>
            <div>

            {/* <img src="logo.webp" /> */}

                <div className="navbar">


                    <ul>
                        <li className="homeButton">
                            <Link className="linkbutton" to="/">Home</Link>
                        </li>
                        {ifLoggedIn(
                        <li className="homeButton">
                            <Link className="linkbutton" to="/my-games">My Games</Link>
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
                        <li className="loginButton" 
                            onClick={() => {setSignupModal(true)}}
                            > Sign Up </li> 
                        )}

                        {signupModal && <SignupModal closeModal={setSignupModal} postAccount={postAccount}/>} 


                        {ifLoggedIn (<p id="tempname"> ???? {account.name}</p>
                            )}
                            

                        {ifLoggedIn(
                        <li className="homeButton settingsButton"> <Link className="linkbutton" to="/settings">Settings</Link></li>
                        )}
                        {ifLoggedIn(
                        <li className="homeButton logoutButton" onClick={() => setIsLoggedIn(false)}><Link className="linkbutton" to="/">Log Out</Link></li>
                        
                        
                        )}
                    </ul>
                </div>
               

                <Routes>
                    <Route path="/" element={
                        <HomeGameContainer filterGames={filterGames} games={filteredGames ? filteredGames : games}/>
                    }
                    />
                    <Route path="/games/:id" element={
                        <SpecificGame
                            games={games} ifLoggedIn={ifLoggedIn} isLoggedIn={isLoggedIn} account={account} purchaseGame={purchaseGame}
                        />}
                    />
                    <Route path="/my-games" element={
                        <MyGamesContainer games={account.installGames}/>
                    }
                    />

                    <Route path="/settings" element={
                        <Settings account={account} updateAccount={updateAccount}/>
                    }
                    />
                </Routes>

                <Footer />

            </div>
            </Wrapper>
        </BrowserRouter>
        
    );
}
 
export default HomeMenuContainer;