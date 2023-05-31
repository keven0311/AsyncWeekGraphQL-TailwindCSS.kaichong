import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { Link } from 'react-router-dom';



export default function CharacterList() {

    const {error,loading,data} =   useCharacters();

    if(loading) return <div>Loading...</div>
    if(error) return <div>something went wrong</div>


  return (
    <div className='flex flex-wrap justify-evenly'>
        {data.characters.results.map(character => {
            return (
                <Link to={`/example/${character.id}`} className='mb-5' key={character.id}>
                    <img src={character.image} alt='singleCharacter'/>
                    <h2 className='text-2xl font-bold ml-20'>{character.name}</h2>
                </Link>
            )
        })}
    </div>
  )
}
