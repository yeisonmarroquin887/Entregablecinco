import React from "react";
import './CartPokemon.css'

function CartPokemon({pokemon}) {

	return (
		<article className="CartPokemon">
		<div className="CartPokemon_header">
			<figure className="CartPokemon_info-img">
				<img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
			</figure>
		</div>
		<div className="CartPokemon_info">
			<div className="CartPokemon_info-titles">
				<h1>{pokemon.name}</h1>
				<div className="CartPokemon_power">
				{
                pokemon?.types.map((type, index) => (
                    <React.Fragment key={index}>
                        <p><span>{type.type.name}</span></p>
                        {index < pokemon.types.length - 1 && <span className="slash"> / </span>}
                    </React.Fragment>
                ))
            }
				</div>
				<p>Tipo</p>
			</div>
			<ul className="CartPokemon_habilite">
				<li>HP <span>{pokemon.stats[0].base_stat}</span></li>
				<li>ATAQUE <span>{pokemon.stats[1].base_stat}</span></li>
				<li>DEFENSA <span>{pokemon.stats[2].base_stat}</span></li>
				<li>VELOCIDAD <span>{pokemon.stats[5].base_stat}</span></li>
			</ul>
		</div>
	</article>
	)
}

export default CartPokemon;