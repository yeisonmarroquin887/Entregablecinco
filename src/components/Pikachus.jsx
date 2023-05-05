import React, { useEffect } from "react";
import usefetch from "../hooks/useFetch";
import "./StylePoke/stylepoke.css";
import { useNavigate } from "react-router-dom";
import IsLoading from "./IsLoading";
const Pikachus = ({ url }) => {
  const [getpokemones, pokemon] = usefetch(url);
  useEffect(() => {
    getpokemones();
  }, []);
  
  const navigate = useNavigate()
  const handelnavigate = () => {
     navigate(`/pokedex/${pokemon.name}`)
  }

  return (
    <article className="pokes">
      {
        pokemon
         ?   <article onClick={handelnavigate} className={`pokemon border-${pokemon?.types[0].type.name}`}>
        <header className={`pokemon__header bg-${pokemon?.types[0].type.name}`}>
          <img
            className="pokemon__sprite"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </header>

        <section className="pokemon__body">
          <h3 className={`pokemon__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>

          <ul className="pokemon__types">
            {pokemon?.types.map((objType) => (
              <li className="pokemon__type-specific" key={objType.type.url}>
                {objType.type.name}
              </li>
            ))}
          </ul>

          <ul className="pokemon__stats">
            {pokemon?.stats.map((objStat) => (
              <li className="pokemon__stats-specific" key={objStat.stat.url}>
                <span className="pokemon__stats-label">
                  {objStat.stat.name}
                </span>

                <span className={`pokemon__stats-value color-${pokemon?.types[0].type.name}`}>{objStat.base_stat}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
         : <IsLoading/>
      }
   
    </article>
  );
};

export default Pikachus;
