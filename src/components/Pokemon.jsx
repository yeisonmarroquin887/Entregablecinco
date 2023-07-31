import React, { useEffect, useState } from 'react'
import './StylePoke/pokeinfo.css'
import IsLoading from './IsLoadingTwo'
const Pokemon = ({pokemon}) => {
  
  const [loading, setloading] = useState(false)

  useEffect(() => {
   setTimeout(() => {
     setloading(true)
   }, 1800);
  },[])

  console.log(pokemon)
  return (
    <div>
      {
        loading
        ? <>
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
        <header className={`pokemon_header bg-${pokemon?.types[0].type.name}`}>
        <img
            className="pokemon_img"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>
        <section className='pokemon_iden'>
          <h1 className={`pokemon_id bg-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h1>
          <h1 className={`pokemon_name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h1>
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
              
              <span className={`color bg-${pokemon?.types[0].type.name}`}>{objType.type.name} </span>
             
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
         <section>
          <h1 className='stattt'>Stats</h1>
          <section>
            <nav className='stats'>
              <div className='value0'>
                  {
                pokemon?.stats.map(stats => (
                  <div className='stats_value'>
                      
                      <span>{stats.stat.name}:
                      <div className='porcenta'> <nav className={`porcent bg-${pokemon?.types[0].type.name}`}> <nav className='porce'></nav></nav> </div>
                       </span>
                     
                          
                  </div>
                 
                  
                ))
                }
              </div>
            
              <div className='value'>
                      {
                pokemon?.stats.map(stats => (
                  <div className='stats_value'>
                  <span className={`value color-${pokemon?.types[0].type.name}`}> {stats.base_stat}/150
             
                  </span>

                  </div>
                  
                ))
              }
              </div>
           
                  
            </nav>
          </section>
         </section>
      </section>
      </div>
      <h1 className={`move_tittle color-${pokemon?.types[0].type.name}`}>moves...</h1>
      <br />
      <section className='move'>
        
        {
          pokemon?.moves.map(movi => (
            <div className={`move_movi bg-${pokemon?.types[0].type.name}`}>
              <span className='move_movis'>{movi.move.name}</span>
            </div>
          ))
        }
      </section>
      </>
        :<IsLoading/>
      }
     
    </div>
  )
}

export default Pokemon
