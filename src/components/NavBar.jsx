import react from 'react';
import PlaylistProvider from '../context/PlaylistContext';
export default function NavBar(){
    return(
        <div>
            <h1>StackTrack</h1>
            <ul>
                <li>My Playlist</li>
            </ul>
        </div>
    )
}