import react from 'react'

const RickCard = ({ characters }) => {
    return(
        <div>
            <h1>Rick Card</h1>
            {characters.map( (character) => (
                <div class="rickCard">
                    <p>id: {character.id}</p>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin}</p>
            <p>Location: {character.location['name']}</p>
            <img href={character.image} alt={character.name}/>
                </div>
            ))}

        </div>
    )
};

export default RickCard