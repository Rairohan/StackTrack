import usePlaylist from "../hooks/usePlaylist"
export default function PlaylistItem({ track }) {
     const { removeTrack}= usePlaylist()
     return(
            <div>
                <li> {track.trackName} - {track.artistName}</li>
                    <button onClick={()=>{removeTrack(track.trackId)}}>
                        Remove
                    </button>
            </div>
     )
}