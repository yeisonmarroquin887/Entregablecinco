import React from 'react'
import './StylePoke/pokeinfo.css'
const Pokemon = ({pokemon}) => {
  console.log(pokemon)
  return (
    <div>
          <div className="margen">
        <div className="rojo">
     
          <img className="margen_img" src="./image/Podex.png" alt="" />
        </div>
        <div className="padre">
           <div className="bola2">
            <div className="bola"> <div className="bol"></div> </div>
           </div>
          </div>
        
      </div>
      <div className='uy'>
      <section className='pokeinfo'>
        <header className='pokemon_header'>
        <img
            className="pokemon_img"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <section className='pokemon_iden'>
          <h1 className='pokemon_id'>#{pokemon?.id}</h1>
          <h1 className='pokemon_name'>{pokemon?.name}</h1>
        </section>
        <ul className='pokemon_ul'>
          <li className='pokemon_li'>
            <span className='pokemon_span'>weight</span>
            <span className='pokemon_span'>{pokemon?.weight}</span>
          </li>
          <li className='pokemon_li'>
            <span className='pokemon_span'>height</span>
            <span className='pokemon_span'>{pokemon?.height}</span>
          </li>
        </ul>
        <div>
        <section className='pokemon_ability'>
          
          <span className='pokemon_tipo'>
            <div>tipo</div>
            <div className='pokemon_power'>
               {pokemon?.types.map((objType) => (
              
              <span className='color'>  {objType.type.name}</span>
             
           ))}
            </div>
         
          </span>
          <span className='pokemon_aby'>
            <div>abilities</div>
            <div className='pokemon_powe'>
               {
              pokemon?.abilities.map(ability =>(
                
                   <span className='borde'>{ability.ability.name}</span>
                
               
              ))
             }
            </div>
         
          </span>
        
    
        
        </section>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Pokemon
