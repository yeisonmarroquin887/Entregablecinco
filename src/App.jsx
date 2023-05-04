import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LocationPoke from './pages/LocationPoke'
import Err from './pages/Err'
import Proteg from './pages/Proteg'
import Pokeinfo from './pages/Pokeinfo'

function App() {


  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route element={ <Proteg/> }>
        <Route path='/location' element={<LocationPoke/>}/>
        <Route path='/pokedex/:name' element={ <Pokeinfo/> }/>
      </Route>
      <Route path='*' element={<Err/>}/>
    </Routes>
      
      
     
    </div> 
  )
}

export default App
