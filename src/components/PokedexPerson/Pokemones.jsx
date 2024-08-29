import React from "react";
import CartPokemon from "./CartPokemon";
import './Pokemones.css'

function Pokemones({Datos}) {
	console.log(Datos)
	return (
		<section className="Pokemones">
		 {Array.isArray(Datos) ? (
                Datos.map((pokemon, index) => (
                    <CartPokemon key={index} pokemon={pokemon} />
                ))
            ) : (
                <CartPokemon pokemon={Datos} />
            )}
		</section>
	)
};

export default Pokemones;