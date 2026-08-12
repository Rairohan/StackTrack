import { useState, useContext } from 'react'
import { PlaylistContext } from '../context/PlaylistContext'
import { searchTracks as searchTracksApi } from '../api/playlistApi'

export default function usePlaylist() {
  const { state, dispatch } = useContext(PlaylistContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function searchTracks(term) {
    setLoading(true)
    setError(null)
    try {
      const results = await searchTracksApi(term)
      return results
    } catch (err) {
      setError('Sorry!,An error occurred while searching for tracks.')
      return []
    } finally {
      setLoading(false)
    }
  }

  function addTrack(track) {
    dispatch({ type: 'add', payload: track })
  }

  function removeTrack(id) {
    dispatch({ type: 'remove', payload: id })
  }

  return {
    playlist: state.playlist,
    loading,
    error,
    searchTracks,
    addTrack,
    removeTrack,
  }
}