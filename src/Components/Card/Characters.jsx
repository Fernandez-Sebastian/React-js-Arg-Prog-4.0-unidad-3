import React from 'react'
import './Characters.css';

const Characters = ({ characters = [] }) => {

  return (
    <div className='row'>
      {characters.map((item, index) => (
        <div key={index} className='col mb-4'>
          <div className="card" style={{minwidth: "200px", height: "100%"} }>
            <img src={item.image} alt="" />
            <div className='card-body'>
              <h5 className='card-title'><p>#{item.id} {item.name}</p></h5>
              <hr />
              <p>The Name of this character is {item.name}, {item.status=='unknown'?"His current status is unknown":` yours currently status is ${item.status}`}. 
              Your species is: {item.species} and {item.location.name=='unknown'?'its location is unknown':`he was last seen in ${item.location.name}`}</p>
              <hr />
              {/* uso item.gender para poder inventar un estado de stock a la vista en la pagina, totalmente inventado  */}
              <p>Stock: {item.gender!='Female'?`Actually we have ${Math.floor(Math.random() * 3) + 1} `:"Sold Out"}</p>
              <p>Price: {item.gender!='Female'?`$${Math.floor(Math.random() * 500) + 50}`:"Sold Out"}</p>
              {item.gender!='Female'?
                  <button type="button" class="btn btn-success" >Buy</button>
                :<button type="button" class="btn btn-secondary" disabled>Sold Out</button>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters