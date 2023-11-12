import React, { useState,useEffect } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import Characters from './Components/Card/Characters';
import Navbar from './Components/Navbar/Navbar';
import Paginar from './Components/Paginar/Paginar';

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({})

  const urlPrincipal =  "https://rickandmortyapi.com/api/character";
 //const urlPrincipal =  "https://pokeapi.co/api/v2/pokemon/";

  const fetchCharacters = (url) =>{
    fetch (url)
      .then(Response => Response.json())
      .then (data =>{
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch (error => console.log(error))
  };
  
  useEffect(() => {
    fetchCharacters(urlPrincipal);
  },[])


  const onPrev = ()=>{
    fetchCharacters(info.prev)
  }

  const onNext = ()=>{
    fetchCharacters(info.next)
  }
  
  const First = "https://rickandmortyapi.com/api/character?page=1/";
 
  

  return (
    <>
          <Navbar titulo = 'Rick And Morty Card Store' />
          <div className='container'>
            <Paginar 
              next={info.next} 
              prev={info.prev} 
              onNext={onNext}
              onPrev={onPrev}
              First={First}
            />
            <Characters characters={characters}/>
            <Paginar 
              next={info.next} 
              prev={info.prev} 
              onNext={onNext}
              onPrev={onPrev}
              First={First}
            />
          </div>
    </>
  )
}

export default App
