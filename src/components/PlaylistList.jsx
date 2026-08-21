import usePlaylist from "../hooks/usePlaylist";
import PlaylistItem from "./PlaylistItem";
export default function PlaylistList() {
    const {playlist,clearPlaylist} = usePlaylist();
  return (
    <div>
      <h1>My Playlist List</h1>
      {
        playlist.length === 0 ? <p>No tracks in the playlist</p> : null
      }
      {
        playlist.map((track)=>(
          <PlaylistItem key={track.id} track={track} />
        ))
      }
      <button onClick={()=>{clearPlaylist()}}>Clear Playlist</button>
    </div>
  );
}
