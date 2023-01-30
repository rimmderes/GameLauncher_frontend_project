import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GamesList from "../components/GamesList";
import Login from "../components/Login";
import Signup from "../components/Signup";

const HomeMenuContainer = () => {

    const SERVER_URL = "http://localhost:8080"

    // const [user, setUser] = useState(null);
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`${SERVER_URL}/games`)
            const data = await response.json();
            setGames(data);
        }
        fetchData()
    }, [])
    


    return ( 
            <BrowserRouter>
            <div>
                <h1>Negative Infinity</h1>
                <ul>
                <li>Category</li>
                <li> <Link to="/login">Login</Link> </li>
                 <li> <Link to="/signup">Signup</Link> </li>
                </ul>

                
                <Routes>
                
                <Route path="/login" element={ <Login /> }/>
                <Route path="/signup" element={ <Signup /> }/> 
                </Routes>
                

                <GamesList games={games}/>
            </div>
            </BrowserRouter>
            
     );
}
 
export default HomeMenuContainer;