export async function fetchPlaylist() {
    const response = await fetch('https://itunes.apple.com/search?term=<song-or-artist>&media=music')
    const data = (await response).json()
    return data
}