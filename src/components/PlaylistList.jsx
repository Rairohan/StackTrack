import usePlaylist from "../hooks/usePlaylist"
export default function PlaylistList() {
    const {playlist}= usePlaylist()
   
    return (
        <div>
            <h1>My Playlist List</h1>
         {
             playlist.length === 0 ? <p>No Tracks added, Why not add some?</p>: null
         }
         {
             playlist.map((track)=>(
                <div key={track.trackId}>
                    <li>{track.trackName} - {track.artistName}</li>
                </div>
                 ))
         }

        </div>
    )
}