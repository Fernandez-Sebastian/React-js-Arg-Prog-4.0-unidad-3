import React, { useState,useEffect } from 'react'
import './App.css'
import Characters from './Components/Card/Characters';
import Navbar from './Components/Navbar/Navbar';
import Paginar from './Components/Paginar/Paginar';
import Footer from './Components/Footer/Footer';

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({})
  const urlPrincipal =  "https://rickandmortyapi.com/api/character";

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

  return (
    <>  
      <div className='fondo' >
       <section id='head'>
          <Navbar titulo ='Rick And Morty Card Store'/>
          <div className="contenedor-animado">
              <p className="parrafo-movimiento">This is a page made for Rick And Morty fans, where you can purchase collectible cards from your favorite series.</p>
          </div>
          {<img src='../../public/img/rick-and-morty.jpg' class="card-img" alt="" />}
        </section>
        <div id='cards' className='container'>
          <Paginar 
            next={info.next} 
            prev={info.prev} 
            onNext={onNext}
            onPrev={onPrev}
          />
          <Characters characters={characters}/>
          <Paginar 
            next={info.next} 
            prev={info.prev} 
            onNext={onNext}
            onPrev={onPrev}
          />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
