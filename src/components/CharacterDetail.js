import React from 'react';
import { connect } from 'react-redux';

import {
    actionGetHomeWorld,
    actionGetFilms,
    actionGetSpecies,
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
        const { location, characters } = this.props;
        const { state } = location;
        const { name } = state;
        const character = characters[name];

        if(character){
            const { films, homeworld, species } = character;
            await this.props.getHomeWorld(homeworld);
            await this.props.getFilms(films);
            await this.props.getSpecies(species);
        }

    }
}

const mapStateToProps = state => {
    const { characters } = state;
    console.log("state", state)
    return {
        characters
    };
}

const mapDispatchToProps = dispatch => ({
    getHomeWorld: (path) => dispatch(actionGetHomeWorld(path)),
    getFilms: (path) => dispatch(actionGetFilms(path)),
    getSpecies: (path) => dispatch(actionGetSpecies(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
