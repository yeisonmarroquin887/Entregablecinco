import axios from "axios";
import { useState } from "react";

const Apiurl = import.meta.env.VITE_REACT_APP_URL;

const useApiPokedex = () => {
	const Url = `${Apiurl}pokemon?limit=100000&offset=0`
	const [Datos, setDatos] = useState(null);

	const PokedexApi = () => {
		axios.get(Url)
		.then(res => setDatos(res.data.results))
		.catch(err => console.log(err))
	}




	return {PokedexApi, Datos}
}

export default useApiPokedex;