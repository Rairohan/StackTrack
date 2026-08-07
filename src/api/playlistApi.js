export async function searchTracks(term) {
    const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=music&entity=song`)
    const data = await response.json()
    return data.results
}