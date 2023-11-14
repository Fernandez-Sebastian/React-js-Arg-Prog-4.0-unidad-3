import React from 'react'
import { IconContext } from "react-icons";
import {FaUserAstronaut} from 'react-icons/fa'
import {FaCartFlatbedSuitcase} from 'react-icons/fa6'

const Navbar=({titulo})=> {
  return (
    
    <nav className='navbar navbar-dark bg-black justify-content-between'>
      <div>
        <a className ='navbar-brand text-uppercase'href="#head">Main</a>
        <a className ='navbar-brand text-uppercase'href="#cards">Cards </a>
      </div>
      <div >
        <a className='navbar-brand text-uppercase' href="#Head"> {titulo}</a>
      </div>
      <div>
        <a className='navbar-brand '><FaCartFlatbedSuitcase className='icon'/>  </a>
        <a className='navbar-brand '><FaUserAstronaut className='icon'/> </a>
      </div>
    </nav>
  )
}

export default Navbar