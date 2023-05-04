import usefetch from "../hooks/useFetch";
import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import "./styles/location.css";
import Pikachus from "../components/Pikachus";
import Frompokes from "../components/Frompokes";


const LocationPoke = () => {
  const urlbase = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0.`;
  const [form, setform] = useState(urlbase);
  const [getA, pokemones] = usefetch(form);
  useEffect(() => {
    getA();
  }, [form]);
 
  const [getallapy, pokemon] = usefetch(form);
  useEffect(() => {
    getallapy();
  }, [form]);
  const { nameuser } = useSelector((state) => state);
  

  return (
    <div className="pokess">
      <h1 className="pokemones_tittle">
        Bienvenido<span className="name">{nameuser}</span>, Aqui podras
        encontrar tu Pokemon favorito
      </h1>
      <section className="pokes">
      <Frompokes setform={setform} urlbase={urlbase}/>
           
      <section className="pokemones">
          {pokemon?.results
          ? pokemon?.results.map((pikachu) => (
              <Pikachus key={pikachu.url} url={pikachu.url} />
            ))
          : pokemones?.pokemon.map((pikachu) => (
              <Pikachus key={pikachu.pokemon.url} url={pikachu.pokemon.url} />
            ))}
      </section>
    
          
      </section>
    </div>
  );
};

export default LocationPoke;
