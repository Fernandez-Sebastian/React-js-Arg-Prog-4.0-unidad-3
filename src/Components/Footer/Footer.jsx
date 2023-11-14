import React from 'react'
import './Footer.css'
import {FaInstagram} from 'react-icons/fa6';
import {FaLinkedinIn,FaSquareXTwitter,FaWikipediaW,FaSpotify} from 'react-icons/fa6';

const Footer=()=> {
  return (
    <div className='container-fluid'  >
        <div className='row p-3 pb-0 bg-secondary text-white'>
            <div className='col-xs12 col-md-6 col-lg-3'>
                <p className='h3'>Oficial Sites</p>
                <a href="https://linktr.ee/rickandmorty"className='enlace'><FaLinkedinIn/></a>
                <a href="https://rickandmorty.fandom.com/es/wiki/Rickipedia"className='enlace'><FaWikipediaW/></a>
                <a href="https://www.instagram.com/rickandmorty/?hl=es" className='enlace'> <FaInstagram/> </a>
                <a href="https://twitter.com/rickandmorty?lang=es"className='enlace'><FaSquareXTwitter/></a>
                <a href="https://open.spotify.com/intl-es/artist/2M0kKcVuBsLFH5d12pW215"className='enlace'><FaSpotify/></a>
            </div>
            <div className='col-xs12 col-md-6 col-lg-3'>
                <p></p>
            </div>
            <div className='col-xs12 col-md-6 col-lg-3'>
            </div>
            <div className='col-xs12 col-md-6 col-lg-3'>
            </div>
            <div className='col-xs-12 pt-0'>
                <p className='text-white text-center'> Copyrigth - All rigths reserved © 2024 </p>
            </div>
        </div>
    </div>
  )
}

export default Footer