import { useEffect, useState } from "react";
import GamesList from "../components/GamesList";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

const HomeMenuContainer = () => {

    const SERVER_URL = "http://localhost:8080"

    // const [user, setUser] = useState(null);
    const [games, setGames] = useState([]);
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
    


    return ( 
            <div>
                <h1>Negative Infinity</h1>
                {/* <ul>
                <li>Category</li>
                </ul> */}

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
                
                

                <GamesList games={games}/>
            </div>
           
            
     );
}
 
export default HomeMenuContainer;