import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
export default function NavBar(){
    return(
        <div>          
            <Link to="/">Home</Link>
            <Link to="/playlist"> My Playlist</Link>
            <SearchBar/>
        </div>
    )
}