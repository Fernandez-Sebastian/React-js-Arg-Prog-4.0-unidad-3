import React, { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Characters from './Components/Card/Characters';
import Navbar from './Components/Navbar/Navbar';
import Paginar from './Components/Paginar/Paginar';

function App() {

  const [characters, setCharacters] = useState([]);

 const urlPrincipal =  "https://rickandmortyapi.com/api/character";
 //const urlPrincipal =  " https://pokeapi.co/api/v2/pokemon/";

 const fetchCharacters = (url) =>{
    fetch (url)
      .then(Response => Response.json())
      .then (data =>setCharacters(data.results))
      .catch (error => console.log(error))
 };
  
useEffect(() => {
  fetchCharacters(urlPrincipal);
  },[])

  return (
    <>
          <Navbar titulo = 'My Cards Rick And Morty' />
          <div className='container'>
            <Paginar/>
            <Characters characters={characters}/>
            <Paginar/>
          </div>
    </>
  )
}

export default App
