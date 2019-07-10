import React from 'react';

const CharacterItem = ({ character }) => {
    return (
        <div className="col-sm-12 movie-item-container">
            <h3>{character.name}</h3>
        </div>
    )
};

export default CharacterItem;
