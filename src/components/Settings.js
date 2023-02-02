import React from "react";
import { useState } from 'react';

const Settings =({account, updateAccount})=>{


    const dateConverterNew = (date)=>{
        const components = date.split("-");
        return `${components[2]}/${components[1]}/${components[0]}`;
    }

    const dateConverterOld = (date)=>{
        const components = date.split("/");
        return `${components[2]}-${components[1]}-${components[0]}`;
    }


    const [stateUser, setStateUser] = useState(
        {
            name: account.name,
            password: account.password,
            dateOfBirth: dateConverterOld(account.dateOfBirth),
            email: account.email

        }
    )

    const [stateUserFinal, setStateUserFinal] = useState(
        {
            name: "",
            password: "",
            dateOfBirth: "",
            email: ""

        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name; 
        let copiedUser = {...stateUser}
        copiedUser[propertyName] = event.target.value;
        setStateUser(copiedUser);
        setStateUserFinal(copiedUser);
    }

    const handleChangeDate = (event) => {
        let propertyName = event.target.name; 
        let copiedUser1 = {...stateUser}
        let copiedUser2 = {...stateUser}
        copiedUser1[propertyName] = event.target.value;
        copiedUser2[propertyName] = dateConverterNew(event.target.value);
        setStateUser(copiedUser1);
        setStateUserFinal(copiedUser2);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        updateAccount(stateUserFinal)
    }

    return (
        <>
            <div className="title">
                <h3>Settings:</h3>
            </div>

            <ul>

                <div className="loginText">
                    <form className="signup" role="search" onSubmit={handleSubmit}>

                        <li className="signup_label" htmlFor="signup_input">Username:
                            <input
                                type="text"
                                placeholder="Type username here..." 
                                name= "name" 
                                value={stateUser.name}
                                onChange={handleChange} />
                        </li>

                        <li className="signup_label" htmlFor="signup_input">Password:
                            <input 
                                type="password" 
                                placeholder="Type password here..." className="signup_input"
                                name="password" 
                                value={stateUser.password}
                                onChange={handleChange} />
                        </li>

                        <li className="signup_label" htmlFor="signup_input">Email:
                            <input 
                                type="text"
                                placeholder="Type email here..." className="signup_input" 
                                name="email"
                                value={stateUser.email}
                                onChange={handleChange} />
                        </li>

                        <li className="signup_label" htmlFor="signup_input">Date of Birth:
                            <input 
                                type="date" 
                                placeholder="Enter DOB here..." className="signup_input" 
                                name="dateOfBirth"
                                value={stateUser.dateOfBirth} 
                                onChange={handleChangeDate} />
                        </li>

                    <p>Total wallet:  £{account.wallet} <button>Add to Wallet</button></p> 


                        <input type="submit" value="Save Changes" className="okButton"/>

                    </form>
                </div>

            </ul>
        </>
    )
}
export default Settings;