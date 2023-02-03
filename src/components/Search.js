import { useState } from 'react';

const Search = ({ filterGames }) => {

    const [searchNameTerm, setSearchNameTerm] = useState("");
    const [searchPublisherTerm, setSearchPublisherTerm] = useState("");
    const [searchGenreTerm, setSearchGenreTerm] = useState("");
    const [searchAgeTerm, setSearchAgeTerm] = useState("");



  
    const handleSubmit = (event) => {
      event.preventDefault();
      filterGames(searchNameTerm, searchPublisherTerm, searchGenreTerm, searchAgeTerm);
    }

  
    return (
        <>
        <div className='searchTitle'>Our Games</div>
   
        <form className="search" role="search" onSubmit={handleSubmit}>
            <label className="search__label" htmlFor="search__input">Game:</label>
            <input 
                type="search" 
                placeholder="Type game name..." className="search__input" 
                value={searchNameTerm}
                onChange={event => setSearchNameTerm(event.target.value)} />

            <label className="search__label" htmlFor="search__input">Publisher:</label>
            <input 
                type="search" 
                placeholder="Type publisher here..." className="search__input" 
                value={searchPublisherTerm}
                onChange={event => setSearchPublisherTerm(event.target.value)} />

            <label className="search__label" htmlFor="search__input">Genre:</label>
            <input 
                type="search" 
                placeholder="Type genre here..." className="search__input" 
                value={searchGenreTerm}
                onChange={event => setSearchGenreTerm(event.target.value)} />

            <label className="search__label" htmlFor="search__input">Age:</label>
            <select 
                name="age" 
                onChange={event => setSearchAgeTerm(event.target.value)}
                defaultValue="">
                <option disabled-value=""></option>
                <option value="3">3</option>
                <option value="7">7</option>
                <option value="12">12</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="18">18</option>
            </select>

            <input type="submit" value="Search" className="search__submit"/>
        </form>
        </>
    )
  }
  
export default Search;