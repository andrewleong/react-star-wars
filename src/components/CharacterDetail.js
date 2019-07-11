import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import {
    actionGetHomeWorld,
    actionGetFilms,
    actionGetSpecies,
    actionGetCharacter,
} from '../redux/actions';

class CharacterDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>

            </div>
        );
    }

    async componentDidMount(){
        const { location, characters, match } = this.props;
        const { state } = location;
        const { name } = state;
        const existingCharacter = characters[name];
        const { params={} } = match;
        const { id } = params;
        await this.props.getCharacter(id, existingCharacter);
    }

    async componentDidUpdate(prevProps){
        const { character } = this.props;
        if(_.isEmpty(prevProps.character) && !_.isEmpty(character)){
            const { films, homeworld, species } = character;
            await this.props.getHomeWorld(homeworld);
            await this.props.getFilms(films);
            await this.props.getSpecies(species);
        }
    }
}

const mapStateToProps = state => {
    const { characters, character, films, species, homeWorld } = state;
    console.log("state", state)
    return {
        characters,
        character,
        films,
        species,
        homeWorld
    };
}

const mapDispatchToProps = dispatch => ({
    getCharacter: (id, existingCharacter) => dispatch(actionGetCharacter(id, existingCharacter)),
    getHomeWorld: (path) => dispatch(actionGetHomeWorld(path)),
    getFilms: (paths) => dispatch(actionGetFilms(paths)),
    getSpecies: (paths) => dispatch(actionGetSpecies(paths))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
