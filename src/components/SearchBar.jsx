import usePlaylist from '../hooks/usePlaylist';
import { useState } from 'react';
export default function SearchBar(){
    const [term,setTerm] =useState("")
    const [results,setResults] = useState([])
    const {searchTracks,addTrack} = usePlaylist()

    async function handleSubmit(e) {
        e.preventDefault()
        const data = await searchTracks(term)
        setResults(data)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                />   
            </form>
            <ul>
                {
                    results.map((track)=>(
                        <li key={track.trackId}>
                             {track.trackName} - {track.artistName}
                             <button onClick={()=>addTrack(track)}> Add</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}