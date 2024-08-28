import React, { useEffect, useState } from "react";
import './CartPokemon.css'

function CartPokemon({pokemon}) {

	const [background, setBackground] = useState("");
	const [colors, setColors] = useState("");
	const type = pokemon.types[0].type.name

	// console.log(background)
	console.log(type)

	useEffect(() => {
		if (type === "fire") {
		  setBackground("linear-gradient(#F96D6F, #E35825, #E8AE1B)");
		  setColors("#E35825")
		} else if (type === "grass") {
		  setBackground("linear-gradient(#7EC6C5, #ABDAC6, #CAE099)");
		  setColors("#ABDAC6")
		} else if (type === "electric") {
		  setBackground("linear-gradient(#0C1395, #2B319B, #7075D9)");
		  setColors("#2B319B")
		} else if (type === "normal") {
		  setBackground("linear-gradient(#735259, #BC6B7C, #7C3F4C)");
		  setColors("#BC6B7C")
		} else if (type === "fighting") {
		    setBackground("linear-gradient(#96402A, #F1613C, #CB735D)");
		  setColors("#F1613C")
		} else if (type === "flying") {
		  setBackground("#D9F2FD");
		  setColors("D9F2FD")
		} else if (type === "poison") {
			setBackground("linear-gradient(#5B3184, #A564E3, #CE9BFF)");
			setColors("#A564E3")
		} else if (type === "ground") {
			setBackground("linear-gradient(#654008, #895C1A, #D69638)");
			setColors("#895C1A")
		} else if (type === "rock") {
			setBackground("linear-gradient(#7E7E7E, #8D8D94, #D3D3D3)");
			setColors("#8D8D94")
		} else if (type === "bug") {
			setBackground("linear-gradient(#62DB60, #3BB039, #AAFFA8)");
			setColors("#3BB039")
		} else if (type === "ghost") {
			setBackground("linear-gradient(#323569, #454AA8, #787DDA)");
			setColors("#454AA8")
		} else if (type === "steel") {
			setBackground("linear-gradient(#5E736C, #728881, #A8A8A8)");
			setColors("#728881")
		} else if (type === "water") {
		  setBackground("linear-gradient(#133258, #1479FB, #82B2F1)");
		  setColors("#1479FB")
		} else if (type === "psychic") {
			setBackground("linear-gradient(#971B45, #C23867, #CD7D98)");
			setColors("#C23867")
		} else if (type === "ice") {
			setBackground("linear-gradient(#6FBEDF, #64CBF5, #BDEBFE)");
			setColors("#64CBF5")
		} else if (type === "dragon") {
			setBackground("linear-gradient(#478A93, #56A4AE, #A2BEC1)");
			setColors("#56A4AE")
		} else if (type === "dark") {
			setBackground("linear-gradient(#030706, #0D1211, #5A5E5D)");
			setColors("#0D1211")
		} else if (type === "fairy") {
			setBackground("linear-gradient(#030706, #0D1211, #5A5E5D)");
			setColors("#0D1211")
		} else {
		  setBackground("#ffffff");
		}
	  }, [type]);

	return (
		<article className="CartPokemon" style={{border: `7px solid ${colors}`}}>
		<div className="CartPokemon_header" style={{background }}>
			<figure className="CartPokemon_info-img">
				<img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
			</figure>
		</div>
		<div className="CartPokemon_info">
			<div className="CartPokemon_info-titles">
				<h1 style={{color: `${colors}`}}>{pokemon.name}</h1>
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
				<li>HP <span style={{color: `${colors}`}}>{pokemon.stats[0].base_stat}</span></li>
				<li>ATAQUE <span style={{color: `${colors}`}}>{pokemon.stats[1].base_stat}</span></li>
				<li>DEFENSA <span style={{color: `${colors}`}}>{pokemon.stats[2].base_stat}</span></li>
				<li>VELOCIDAD <span style={{color: `${colors}`}}>{pokemon.stats[5].base_stat}</span></li>
			</ul>
		</div>
	</article>
	)
}

export default CartPokemon;