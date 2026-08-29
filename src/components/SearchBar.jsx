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
        setTerm("")
    }
    return(
        <div>
            <div className='relative'>
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={term}
                    onChange={(e)=>setTerm(e.target.value)}
                    placeholder="Search for tracks..."
                    className='px-25 py-2 rounded-md text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800 text-2xl text-center '
                />   
            </form>
            </div>
            {results.length > 0 && (
                <ul className='absolute top-half left-1/2 transform -translate-x-1/2 w-full max-w-5xl items-center text-left text-white text-2xl bg-gray-800 shadow-lg rounded-xl p-4 m-2 my-15'>
                    {results.map((track) => (
                        <li key={track.trackId} className='flex justify-between items-center mb-2'>
                            {track.trackName} - {track.artistName}
                            <button
                                onClick={() => {
                                    addTrack(track);
                                    setResults([]);
                                }}
                                className='px-2 py-1 text-xl bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors duration-300'
                            >
                                Add
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}