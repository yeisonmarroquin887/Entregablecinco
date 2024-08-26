import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApiPokedex from "../../Hooks/useApiPokedex";
import Header from "../../components/Header/Header";
import './ListPokedex.css'
import Pokemones from "../../components/PokedexPerson/Pokemones";
import axios from "axios";

function ListPokedex() {
	const {name} = useParams()
    const navigate = useNavigate();
	const { PokedexApi, Datos } = useApiPokedex()
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		PokedexApi()
	}, [])

	useEffect(() => {
		if (Datos) {
			pokes();
		}
	}, [Datos]);

	const pokes = () => {
		Datos?.map((ressult) => {
			axios.get(ressult.url)
			.then(res => setPokemon(prevState => [...prevState, res.data]))
			.catch(err => console.log(err))
		})

	}
	const volver = () => {
		navigate("/")
	}

	return (
		<section className="ListPokedex">
			<div className="ListPokedex__header">
				<Header/>
			</div>

			<button onClick={volver}>Volver</button>

			<div className="ListPokedex__info">
			<h1 className="ListPokedex__info-h1"> <span>Bienvenido {name},</span> aqui podras encontrar tu pokemon favorito</h1>
			<div className="ListPokedex__filters">
				<div>
					<form action="">
						<input type="text" />
						<button>Buscar</button>
					</form>
				</div>
				<div>
					<select className="ListPodex__select" name="" id="">
						<option className="optio1" value="">Todos los pokemones</option>
					</select>
				</div>
			</div>
<h1>Aplicacion en proceso por el ING: <span style={{color: "red", borderBottom: '1px solid black'}}>Yeison Andres Marroquin.</span> </h1>
			</div>

			<div>
				<Pokemones Datos={pokemon}/>
			</div>

		</section>
	)
};

export default ListPokedex;