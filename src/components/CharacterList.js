import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => {

    const generateCharacterList = (characters) => {
        if(characters.length){
            return characters.map( (item, index) => {
                return (
                    <div key={index}>
                        <CharacterItem
                            character={item}
                        />
                    </div>
                )
            })
        }
    }

    return (
        <div className="col-xs-6 col-md-12">
            <div className="row character-list-container">
                {generateCharacterList(characters)}
            </div>
        </div>
    );
};

export default CharacterList;
