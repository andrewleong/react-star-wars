import React from 'react';
import { FaMars, FaVenus, FaGenderless } from 'react-icons/fa';

const CharacterItem = ({ character }) => {
    const getGender = (gender) => {
        if(gender === 'male'){
            return <FaMars />
        } else if(gender === 'female'){
            return <FaVenus />
        } else {
            return <FaGenderless />
        }
    }
    return (
        <div className="col-sm-12 character-item-container">
            <div className="card each-card">
                {getGender(character.gender)}
                <h3>{character.name}</h3>
                <h4>{character.birth_year}</h4>
            </div>
        </div>
    )
};

export default CharacterItem;
