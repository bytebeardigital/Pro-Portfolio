import { useQuery, gql } from '@apollo/client';
import React, {Component} from 'react';

const CHARACTERS_QUERY = gql`
{
    characters(page: 2) {
      results {
        id
        name
      }
    }
  }
`;


export default function Rick() {

    const { data, loading, error } = useQuery(CHARACTERS_QUERY);
    if (loading) return "Loading...";
    if(error) return <pre>{error.message}</pre>
    return(
        <div>
            <h1>RickCard</h1>
           <div className="rickCard">
               {data.characters.map((character) => (
                   <div>
                                          <p key={character.id}>{character.name}</p>
                   <p>Status:</p>
                   <p>Gender: </p>
                   <p>Origin: </p>
                   <p>Location: </p>
                       </div>
               ))}
           </div>
        </div>
    )
}