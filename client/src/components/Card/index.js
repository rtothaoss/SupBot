import React from 'react'
import './styles.css'

const Card = (props) => {
    return (
<div className="card" style={props.style}>
<div className='text-center'>
  <img className="card-img-top" src={props.img} alt="Card image cap" />
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.summary}</p>
    <button onClick={props.onClick} className="btn btn-primary">More Info</button>
  </div>
</div>
    )

}

export default Card;