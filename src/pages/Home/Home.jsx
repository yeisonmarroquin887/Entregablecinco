import React from "react";
import './Home.css'

function Home(){

	const alerta = () => {
		alert("Por el momento nuestra app esta en mantenimiento...  ING. Andres Marroquin.")
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
					<form className="Home__form" action="">
						<label htmlFor="">Para empezar dame tu nombre:</label>
						<input type="text" />
						<button onClick={alerta}>Comenzar</button>
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