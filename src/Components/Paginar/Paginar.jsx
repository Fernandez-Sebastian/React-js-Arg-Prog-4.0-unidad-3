import React from 'react'

const Paginar = ({}) => {
    const siguiente = () =>{

    }
    const anterior = () =>{
        
    }

  return (
    <nav>
        <ul className='pagination justify-content-center'>
            <li className='page-item'>
                <button className='page-link' onClick={anterior}>Previous</button>
            </li>
            <li className='page-items'>
                <button className='page-link' onClick={siguiente}>Next</button>
            </li>
        </ul>

    </nav>
  )
}

export default Paginar