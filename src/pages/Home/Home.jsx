import React from "react";
import './Home.css'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function Home(){
	const {handleSubmit, register, reset} = useForm()
	const navigate = useNavigate();

	const submit = (data) => {
		localStorage.setItem("Name", data.Name)
			navigate(`/pokedex/${data.Name}`)
	}
 
	return (
		<section className="Home">
			<article className="Home__container">
				<figure className="Home__container-figure">
			    	<img className="Image1" src="../../../../image/Image1.jpg" alt="" />
					<img className="Image2" src="../../../../image/Podex.png" alt="" />
				</figure>
				 
				 <div className="Home__container-info">
					<h1>¡Hola Entrenador!</h1>
					<form className="Home__form" onSubmit={handleSubmit(submit)}>
						<label htmlFor="">Para empezar dame tu nombre:</label>
						<input {...register("Name")} type="text" required/>
						<button >Comenzar</button>
					</form>
					<p className="text">
					Que nuestras vidas sean como la de Ash y Pikachu: llenas de aventuras, amistad y sueños por alcanzar.
					</p>
				 </div>

			</article>
			<footer className="Home__Footer">
				<div>
					<div className="Footer__bola">
						<div className="Footer__bola2"></div>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Home;