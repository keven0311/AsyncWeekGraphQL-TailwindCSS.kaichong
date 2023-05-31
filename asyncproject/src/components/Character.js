import React from 'react'
import { useCharacter } from '../hooks/useCharacter'
import { useParams } from 'react-router-dom';

export default function Character() {

    const { id } = useParams()
    const { data, loading, error } = useCharacter(id);
    console.log(error,loading,data)

    if(loading) return <div>Loading...</div>
    if(error) return <div>something went wrong</div>

  return (
    <div className='character'>
        <img src={data.character.image} alt='character' className='w-1/2 h-1/2'/>
        <div className='character-content'>
            <h1 className='text-3xl'>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className='character-episode'>
                {data.character.episode.map((episode,idx) => {
                    return <div key={idx} className='character-content'>
                        {episode.name} - <b>{episode.episode}</b>
                        </div>
                })}
            </div>
        </div>
    </div>
  )
}
