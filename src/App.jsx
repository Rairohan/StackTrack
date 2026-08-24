import PlaylistProvider from './context/PlaylistContext'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Playlist from './pages/Playlist'
import './App.css'

function App() {
  return (
    <PlaylistProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </PlaylistProvider>
  )
}

export default App