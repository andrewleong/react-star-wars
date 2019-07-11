import React from 'react';
import _ from 'underscore';
import CharacterItem from './CharacterItem';

const CharacterList = ({ characters }) => {

    const generateCharacterList = (characters) => {
        if(!_.isEmpty(characters)){
            return Object.values(characters).map( (item, index) => {
                const { url } = item;
                const id = url.split("/").slice(-2).join("");
                return (
                    <div key={index}>
                        <CharacterItem
                            character={item}
                            id={id}
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
