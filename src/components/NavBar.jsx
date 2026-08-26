import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
export default function NavBar(){
    return(
        <div className='bg-gray-800 text-white flex flex-col items-center p-7 '>
            <div className='flex gap-10'>
                <Link to="/" className='text-4xl hover:text-green-700 '>Home</Link>
                <Link to="/playlist" className='text-4xl hover:text-green-700 '> My Playlist</Link>
            </div>  
            <div className='mt-4'>
                <SearchBar/>  
            </div>           
        </div>
    )
}