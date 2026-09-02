import PlaylistList from "../components/PlaylistList";
export default function Playlist() {
    return (
       <div className="bg-gray-800 text-white font-sans max-w-4xl mx-auto mt-10 p-10 rounded-xl shadow-lg">
            <div className="flex flex-col items-center justify-center">
                <PlaylistList/>    
            </div>
        </div>

    )
}