import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => {
    console.log("characters", characters)
    const generateCharacterList = (characters) => {
        if(characters.length){
            return characters.map( (item, index) => {
                return (
                    <div className="character-list-container" key={index}>
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
            {generateCharacterList(characters)}
        </div>
    );
};

export default CharacterList;
