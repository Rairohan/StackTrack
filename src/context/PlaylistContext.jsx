import React, { createContext, useReducer, useState } from 'react';
export const PlaylistContext = createContext() 
const initailState= {
        playlist:[]
    }
function reducer(state,action){
    switch(action.type)
    {
    case "add": return {...state,playlist:[...state.playlist,action.payload]}
    case "remove": return {...state,playlist:[...state.playlist.filter(e => e.id !== action.payload)]}
    default: return state
    }

}
export default function PlaylistProvider({children}){
  const [state,dispatch] = useReducer(reducer,initailState)
  return(
    <PlaylistContext.Provider value={{state,dispatch}}>
        {children}
    </PlaylistContext.Provider>
  )
}