import React, { useEffect, useRef} from 'react'
import {useNavigate } from 'react-router-dom'
import usefetch from '../hooks/useFetch'
import './StylePoke/from.css'
const Frompokes = ({setform, urlbase}) => {
    
    
    
    const inputpoke = useRef()
    const navigate = useNavigate()
    
    const url = `https://pokeapi.co/api/v2/type/`
    const [getnameapy, pokemons] = usefetch(url)
    useEffect(() => {
      getnameapy()
    },[])
    const handelsubmit = e => {
        e.preventDefault()
            const path = `/pokedex/${inputpoke.current.value.trim().toLowerCase()}`
         navigate(path )
        
 }
 const handelchange = e => {
  setform(e.target.value)
 }

  return (
    <div>
       <form className='pokemones_form' onSubmit={handelsubmit}>
        <input ref={inputpoke} className="pokemones_input" type="text" />
        <button className="pokemones_btn">buscar</button>
      </form>
      <select className='pokemon_select' onChange={handelchange}>
        <option value={urlbase}>allPokemones</option>
        {
          pokemons?.results.map(type =>(
            <option key={type.url} value={type.url}>{type.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Frompokes
