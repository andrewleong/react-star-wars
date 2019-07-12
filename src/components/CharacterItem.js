import React from 'react';
import { Link } from 'react-router-dom';
import { FaMars, FaVenus, FaGenderless } from 'react-icons/fa';

const CharacterItem = ({ character, id }) => {
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
            <Link to={{
                pathname: `/character/${id}`,
                state: {name: character.name}
            }}>
                <div className="card">
                    <div className="icon">
                        {getGender(character.gender)}
                    </div>
                    <h3>{character.name}</h3>
                    <h4>{character.birth_year}</h4>
                </div>
            </Link>
        </div>
    )
};

export default CharacterItem;
