import { gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!) {
    characters(filter:{name:$name}) {
        results {
            location{
                name
            }
        }
    }
}
`

export default function Search() {

    const [name,setName] = useState("");

    const [getLocations,{ loading,error,data,called }] = useLazyQuery(GET_CHARACTER_LOCATIONS,{
        variables:{
            name
        },
        fetchPolicy: "network-only"     //this is for stop useLazyQuery to auto rendering the data. now it only trigger when button is clicked.
    })

    // console.log({
    //     called,
    //     loading,
    //     error,
    //     data,
    // })

  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={()=> getLocations()}>Search</button>
        {loading && <div>Loading</div>}
        {error && <div>something went wrong</div>}
        {data && (
            <ul>
                {data.characters.results.map((character,idx) => {
                    return <li key={idx}>{character.location.name}</li>
                })}
            </ul>
        )}
    </div>
  )
}
