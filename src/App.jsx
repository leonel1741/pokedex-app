import './App.css'
import { HashRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import UserInput from './components/UserInput'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import PokemonDetail from './components/PokemonDetail'
import Settings from './components/Settings'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector(state => state.theme);
  document.body.style=`background: ${theme === 'light' ? '#FFF' : '#2f2f2f'}`;
  // console.log(theme);
  
  return (
      <HashRouter>
        <div className="App" id={theme}>
          <div className='pokeball-background'></div>
          <Link
            to='/settings'
            className='btn-setting'
          >
            <i className="fa-solid fa-gear"></i>
          </Link>
          <Routes >
            <Route path='/' element={<UserInput />} />
            <Route path='/settings' element={<Settings />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='/pokedex' element={<Pokedex />} />
              <Route path='/pokedex/:id' element={<PokemonDetail />} />
            </Route>
          </Routes>
        </div>
      </HashRouter>
  )
}

export default App
