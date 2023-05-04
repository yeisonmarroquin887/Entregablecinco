import axios from "axios"
import { useState } from "react"
const usefetch = url => {
    const [pokemon, setpokemones] = useState()
    const [haserror, sethaserror] = useState(false)
  const getApy = () => {
    axios.get(url)
    .then(res => {
      setpokemones(res.data)
      sethaserror(false)
    })
    .catch(err =>{
       console.log(err)
       sethaserror(true)
    })
  }
  return [getApy, pokemon, haserror]
}
export default usefetch