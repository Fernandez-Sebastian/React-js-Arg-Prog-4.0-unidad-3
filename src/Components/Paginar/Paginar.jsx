import React from 'react'

const Paginar = ({prev,next,onPrev,onNext}) => {

    const siguiente = () =>{
        onNext();
    }
    const anterior = () =>{
        onPrev();
    }

  return (
    <nav>
        <ul className='pagination justify-content-center mt-5'>
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
        </ul>
    </nav>
  )
}

export default Paginar