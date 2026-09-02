import usePlaylist from "../hooks/usePlaylist"
export default function PlaylistItem({ track }) {
     const { removeTrack}= usePlaylist()
     return(
            <div className='flex flex-row items-center justify-between gap-20'>
                <li className='text-2xl'> {track.trackName} - {track.artistName}</li>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 m-1 rounded-xl" onClick={()=>{removeTrack(track.trackId)}}>
                        Remove
                    </button>
            </div>
     )
}