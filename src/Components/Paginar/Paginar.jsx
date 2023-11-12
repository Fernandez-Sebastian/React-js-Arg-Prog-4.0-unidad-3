import React from 'react'

const Paginar = ({prev,next,onPrev,onNext,First}) => {

    const siguiente = () =>{
        onNext();
    }
    const anterior = () =>{
        onPrev();
    }
    const primera = () =>{
        First();
    }

  return (
    <nav>
        <ul className='pagination justify-content-center'>
            {prev ? (
                <li className='page-item'>
                    <button className='page-link' onClick={anterior}>Previous</button>
                </li>
            ) : null}
             {next ? (
                <li className='page-items'>
                    <button className='page-link' onClick={siguiente}>Next</button>
                </li>
            ) : null}
            {prev ? (
                <li className='page-item'>
                    <button className='page-link' onClick="https://rickandmortyapi.com/api/character?page=1/">First</button>
                </li>
            ) : null}
        </ul>

    </nav>
  )
}

export default Paginar