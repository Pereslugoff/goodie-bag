import React from 'react'

const Candy = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.description}</h3>
      <h3>{props.quantity} left!!!</h3>
      <img src={props.imageUrl} />
    </div>
  )
}

export default Candy;