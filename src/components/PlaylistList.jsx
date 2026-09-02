import usePlaylist from "../hooks/usePlaylist";
import PlaylistItem from "./PlaylistItem";
export default function PlaylistList() {
    const {playlist,clearPlaylist} = usePlaylist();
  return (
    <div>
      <h1 className="text-4xl font-sans mb-2">My Playlist List</h1>
      {
        playlist.length === 0 ? <p className="text-xl text-gray-300">"No tracks in the playlist!"</p> : null
      }
      {
        playlist.map((track)=>(
          <PlaylistItem key={track.id} track={track} />
        ))
      }
      {
        playlist.length ===0 ? null : <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 m-4 rounded-xl" onClick={()=>{clearPlaylist()}}>Clear Playlist</button>
      }
      
    </div>
  );
}
