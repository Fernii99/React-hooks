import React from 'react'

export const PokemonCard = ({id, name, img, sprites = [] }) => {


  return (
   <section style={{ height:200 }}>
    <h2 className='text-capitalized'>#{id} - { name }</h2>

    <div>
        {sprites.map( sprite => <img key={sprite} src={sprite} lat={name} /> )}
    </div>
   </section>
  )
}
