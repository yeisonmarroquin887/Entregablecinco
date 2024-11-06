import axios from "axios";
import './PokemonId.css'
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokeInfoId from "../../components/PokeId/PokeInfoId/PokeInfoId";
import PokeMovimient from "../../components/PokeId/PokeMovements/PokeMovimient";
import Header from "../../components/Header/Header";
const Apiurl = import.meta.env.VITE_REACT_APP_URL;

function PokemonId() {
const {id} = useParams()
const [data, setData] = useState()
const navigate = useNavigate();

useEffect(() => {
	Peticion();
}, [])

const Peticion = () => {
	axios.get(`${Apiurl}/pokemon/${id}`)
	.then(res => setData(res.data))
	.catch(err => console.log(err))
}

console.log(data)

const Volver = ()  => {
	navigate(`/pokedex/${localStorage.getItem("Name")}`)
}


	return (
		<section>
			<header className="ListPokedex__header">
				<Header/>
			</header>
			<div className="Volver">
				<button onClick={Volver}>Volver</button>
			</div>
			<div>
				<PokeInfoId Data={data}/>
			</div>

			<div>
				<PokeMovimient Data={data}/>
			</div>
		</section>
	)
}

export default PokemonId;