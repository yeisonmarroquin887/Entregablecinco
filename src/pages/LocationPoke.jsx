import usefetch from "../hooks/useFetch";
import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import "./styles/location.css";
import Frompokes from "../components/Frompokes";
import Pikachus from "../components/Pikachus";
import Pagination from "../components/Pagination";
import IsLoading from "../components/IsLoading2";

const LocationPoke = () => {

  const [loading, setloading] = useState(false)

  useEffect(() => {
   setTimeout(() => {
     setloading(true)
   }, 2000);
  },[])

  const urlbase = `https://pokeapi.co/api/v2/pokemon?limit=99&offset=0.`
  const [form, setform] = useState(urlbase);
  const [getA, pokemones] = usefetch(form);
  useEffect(() => {
    getA();
  }, []);
  
  const { nameuser } = useSelector((state) => state);


  return (
    <div className="pokess">
      {
        loading
        ?      <>
      <div className="margenn">
        <div className="rojoo">
     
          <img className="margen__img" src="./image/Podex.png" alt="" />
        </div>
        <div className="padree">
           <div className="bola22">
            <div className="bolaa"> <div className="bol"></div> </div>
           </div>
          </div>
        
      </div>
      <section className="pokemones_ini">
      <h1 className="pokemones_tittle">
        Bienvenido <span className="name">{nameuser}</span>, Aqui podras
        encontrar tu Pokemon favorito
      </h1>
      <section className="pokes">
      <Frompokes setform={setform} urlbase={urlbase}/>
           
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
      </section>
      </>
        :<IsLoading/>
      }

    </div>
  );
};

export default LocationPoke;
