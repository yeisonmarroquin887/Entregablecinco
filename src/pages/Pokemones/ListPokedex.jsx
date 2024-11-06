import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApiPokedex from "../../Hooks/useApiPokedex";
import Header from "../../components/Header/Header";
import './ListPokedex.css';
import Pokemones from "../../components/PokedexPerson/Pokemones";
import axios from "axios";
import { useForm } from "react-hook-form";

function ListPokedex() {
    const { name } = useParams();
    const navigate = useNavigate();
    const { PokedexApi, Datos } = useApiPokedex();
    const [pokemon, setPokemon] = useState([]);
    const [pokemonCategory, setpokemonCategory] = useState([]);
    const { handleSubmit, register, reset } = useForm();


    const Busqueda = (data) => {
        const filteredPokemon = pokemon.filter(res => res.name === data.Name);
        setPokemon(filteredPokemon);
    };

    useEffect(() => {
        PokedexApi();
    }, []);

    useEffect(() => {
        if (Datos) {
            pokes();
        }
    }, [Datos]);
    const pokes = () => {
        
        Datos?.map((ressult) => {
            axios.get(ressult.url)
                .then(res => {
					setPokemon(prevState => [...prevState, res.data])
					setpokemonCategory(prevState => [...prevState, res.data])
				})
                .catch(err => console.log(err));
        });
        
    };

    const volver = () => {
        navigate("/");
        localStorage.removeItem("Name")
    };
    let raz = new Set();
    pokemonCategory.forEach(res => {
        raz.add(res.types[0].type.name);
    });
    raz = Array.from(raz);

    const filterRaza = (e) => {
        const filtro = e.target.value;
        if (filtro) {
            const filteredPokemon = pokemonCategory.filter(raza => raza.types.some(type => type.type.name === filtro));
            setPokemon(filteredPokemon);
        } else {
            pokes(); // Restablecer la lista completa si se selecciona "Todos los pokemones"
        }
    };

    return (
        <section className="ListPokedex">
            <div className="ListPokedex__header">
                <Header />
            </div>
            <div className="Volver">
            <button  onClick={volver}>Salir</button>
            </div>

            <div className="ListPokedex__info">
                <h1 className="ListPokedex__info-h1"> <span>Bienvenido {name},</span> aquí podrás encontrar tu Pokémon favorito</h1>
                <div className="ListPokedex__filters">
                    <div>
                        <form action="" onSubmit={handleSubmit(Busqueda)}>
                            <input {...register("Name")} type="text" placeholder="Busca por nombre 🔎" />
                            <button>Buscar</button>
                        </form>
                    </div>
                    <div>
                        <select className="ListPodex__select" onChange={filterRaza}>
                            <option value="">Todos los pokemones</option>
                            {raz.map((res, index) => (
                                <option key={index} value={res}>{res}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <Pokemones Datos={pokemon} />
            </div>

        </section>
    );
}

export default ListPokedex;
