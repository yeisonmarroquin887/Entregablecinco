import './Pokemovimient.css'

function PokeMovimient({Data}) {

	return (
		<div className='PokeMovimient'>
			<ul className='PokeIndoId__stats-ul'>
					<li className='PokeIndoId__stats-title'>Movements</li>
					<li className='PokeIndoId__stats-raya'></li>
					<img src="../../../../image/logo-white.png" alt="" />
				</ul>

				<ul className='Pokemovimient__moves'>
					{
						Data?.moves.map(moves => (
							<li key={Data.id}>{moves.move.name}</li>
						))
					}
				</ul>
		</div>
	)
}

export default PokeMovimient;