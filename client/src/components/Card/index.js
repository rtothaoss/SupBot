import React from 'react'

const Card = (props) => {
    return (
<div className="card" style={props.style}>
  <img className="card-img-top" src={props.img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.summary}</p>
    {/* <a href={props.linkURL} className="btn btn-primary">{props.linkName}</a> */}
  </div>
</div>
    )

}

export default Card;