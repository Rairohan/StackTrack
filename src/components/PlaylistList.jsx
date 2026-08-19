import usePlaylist from "../hooks/usePlaylist";
import PlaylistItem from "./PlaylistItem";
export default function PlaylistList() {
    const {playList} = usePlaylist();
  return (
    <div>
      <h1>My Playlist List</h1>
      {
        playList.length === 0 ? <p>No tracks in the playlist</p> : null
      }
      
    </div>
  );
}
