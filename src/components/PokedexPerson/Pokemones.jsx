import React from "react";
import CartPokemon from "./CartPokemon";
import './Pokemones.css'

function Pokemones({Datos}) {
console.log(Datos)
	return (
		<section className="Pokemones">
			{
				Datos?.map((pokemon, index) => (
					<CartPokemon key={index} pokemon={pokemon}/>
				))
			}
		</section>
	)
};

export default Pokemones;