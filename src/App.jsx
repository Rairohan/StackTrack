import PlaylistProvider from './context/PlaylistContext'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <>
      <PlaylistProvider>
        <NavBar/>
      </PlaylistProvider>
    </>
  )
}

export default App
