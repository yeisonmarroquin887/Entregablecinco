import React from 'react'

const Pokemon = ({pokemon}) => {
  return (
    <div>
      <img
            className="pokemon__sprite"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
    </div>
  )
}

export default Pokemon
