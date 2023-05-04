import usefetch from "../hooks/useFetch";
import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import "./styles/location.css";
import Frompokes from "../components/Frompokes";
import Pikachus from "../components/Pikachus";


const LocationPoke = () => {
  const urlbase = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0.`
  const [form, setform] = useState(urlbase);
  const [getA, pokemones] = usefetch(form);
  useEffect(() => {
    getA();
  }, [form]);
  
  const { nameuser } = useSelector((state) => state);
  

  return (
    <div className="pokess">
      <h1 className="pokemones_tittle">
        Bienvenido<span className="name">{nameuser}</span>, Aqui podras
        encontrar tu Pokemon favorito
      </h1>
      <section className="pokes">
      <Frompokes setform={setform}/>
           
      <section className="pokemones">
         {
          pokemones?.results
          ?(
            pokemones?.results.map(poke => (
              <Pikachus key={poke.url} url={poke.url}/>
            ))
          )
          :(
            pokemones?.pokemon.map(pokes => (
              <Pikachus key={pokes.pokemon.url} url={pokes.pokemon.url}/>
            ))
          )
         }
        
          
      </section>
    
          
      </section>
    </div>
  );
};

export default LocationPoke;
