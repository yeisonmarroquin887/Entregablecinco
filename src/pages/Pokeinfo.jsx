import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import usefetch from '../hooks/useFetch'
import Pokemon from '../components/Pokemon'
import Errshrea from '../components/Errshrea'

const Pokeinfo = () => {
  
    const { name } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${name}` 
   const [   getpokemonbyid, pokemon,  haserror] = usefetch(url)
  useEffect(() => {
    getpokemonbyid()
  },[url])
  console.log(pokemon)
  return (
    <div>
        {
            haserror
               ?<Errshrea/> 
               :<Pokemon key={pokemon?.id} pokemon={pokemon}/>
        }
    </div>
  )
}

export default Pokeinfo

